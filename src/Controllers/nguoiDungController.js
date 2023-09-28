import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';
import { Sequelize } from 'sequelize';
import { taoToken } from '../Config/jwtConfig.js';
import bcrypt from "bcrypt";
import multer from 'multer';
import path from 'path';

const Op = Sequelize.Op;
const model = initModels(sequelize);

//READ
export const getAllUser = async (req, res) => {
    try {
        let data = await model.nguoi_dung.findAll();
        res.send(data);
    }
    catch (error) {
        res.status(500).send("BE error");
    }
}

//getUserByName
export const getUserByName = async (req, res) => {
    try {
        let { fullName } = req.params;
        let data = await model.nguoi_dung.findAll({
            where: {
                ho_ten: {
                    [Op.like]: `%${fullName}%`
                }
            }
        });

        res.send(data);
    } catch (error) {
        res.status(500).send("BE error");
    }
}

//CREATE
const storage = multer.diskStorage({
    destination: path.join(process.cwd(), 'public', 'img', 'user-profiles'),
    filename: (req, file, callback) => {
        const uniqueFilename = new Date().getTime();
        callback(null, uniqueFilename);
    }
});
const uploadProfilePicture = multer({ storage }).single('profilePicture');

export const createUser = async (req, res) => {
    try {
        uploadProfilePicture(req, res, async (uploadError) => {
            if (uploadError) {
                console.error(uploadError);
                res.status(400).send('Error uploading picture');
                return;
            }
            const { email, mat_khau, ho_ten, tuoi } = req.body;
            const { filename } = req.file;
            const hashedPassword = bcrypt.hashSync(mat_khau, 10);
            const newData = {
                email,
                mat_khau: hashedPassword,
                ho_ten,
                tuoi,
                anh_dai_dien: filename
            };

            const checkEmail = await model.nguoi_dung.findOne({
                where: { email }
            });

            if (checkEmail) {
                res.status(400).send("Email already exists");
                return;
            }

            await model.nguoi_dung.create(newData);
            res.status(201).send("Successfully added");
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("BE error");
    }
}



//LOGIN
export const login = async (req, res) => {
    try {
        let { email, mat_khau } = req.body;

        let checkEmail = await model.nguoi_dung.findOne({
            where: {
                email
            }
        });

        if (checkEmail) {
            let checkPass = bcrypt.compareSync(mat_khau, checkEmail.mat_khau);
            if (checkPass == true) {
                let token = taoToken(checkEmail);
                res.status(200).send(token);
            } else {
                res.status(400).send("Wrong Password");
            }
        }
        else {
            res.status(400).send("Email doesn't exist");
        }
    }
    catch {
        res.status(500).send("BE error");
    }
}


//UPDATE
export const updateUser = async (req, res) => {
    try {
        let { id } = req.params;
        let { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = req.body;
        await model.nguoi_dung.update({ email, mat_khau, ho_ten, tuoi, anh_dai_dien },
            { where: { nguoi_dung_id: id } });
        res.send("updated successfully");
    } catch (error) {
        res.status(500).send("BE error")
    }
}

//DELETE
export const deleteUser = async (req, res) => {
    try {
        let { id } = req.params;
        await model.nguoi_dung.destroy({ where: { nguoi_dung_id: id } });
        res.send("deleted successfully");
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}
