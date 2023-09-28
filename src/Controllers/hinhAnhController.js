import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';
import { Sequelize } from 'sequelize';

const model = initModels(sequelize);
const Op = Sequelize.Op;

//READ
export const getAllHinhAnh = async (req, res) => {
    try {
        let data = await model.hinh_anh.findAll();
        res.send(data);
    }
    catch (error) {
        res.status(500).send("BE error");
    }
}


  export const getHinhAnhByUser = async (req, res) => {
    let { id } = req.params;
    try {
      let data = await model.hinh_anh.findOne({ where: { nguoi_dung_id: id } });
      if (data) {
        res.send(data);
      } else {
        res.status(404).send("This user hasn't uploaded anything.");
      }
    } catch (error) {
      res.status(500).send("Error fetching.");
    }
  };
  

  export const getHinhAnhByTenHinh = async (req, res) => {
    let { tenHinh } = req.params;
    try {
      let data = await model.hinh_anh.findAll({ where: { 
        ten_hinh: {
            [Op.like]: `%${tenHinh}%`
        }
       } });
      if (data.length > 0) {
        res.send(data);
      } else {
        res.status(404).send("Not found.");
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error fetching.");
    }
  };
  

//CREATE
export const createHinhAnh = async (req, res) => {
    let {ten_hinh, duong_dan, mo_ta, nguoi_dung_id} = req.body;
    try {
      await model.hinh_anh.create({ten_hinh, duong_dan, mo_ta, nguoi_dung_id});
      res.send("Successfully added");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error creating a new HinhAnh.");
    }
  };
  

//UPDATE
export const updateHinhAnh = async (req, res) => {
    let { id } = req.params;
    let {ten_hinh, duong_dan, mo_ta, nguoi_dung_id} = req.body;
    try {
      await model.hinh_anh.update(
        {ten_hinh, duong_dan, mo_ta, nguoi_dung_id},
        { where: { hinh_id: id, nguoi_dung_id: nguoi_dung_id } }
      );
  
      res.send("Successfully updated.");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error updating HinhAnh.");
    }
  };
  
