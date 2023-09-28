import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';


const model = initModels(sequelize);

//READ
export const getAllNgayLuu = async (req, res) => {
    try {
        let data = await model.luu_hinh.findAll();
        res.send(data);
    }
    catch (error) {
        res.status(500).send("BE error");
    }
}


  export const getNgayLuuByUser = async (req, res) => {
    let { id } = req.params;
    try {
      let data = await model.luu_hinh.findOne({ where: { nguoi_dung_id: id } });
      if (data) {
        res.send(data);
      } else {
        res.status(404).send("No data.");
      }
    } catch (error) {
      res.status(500).send("BE error.");
    }
  };
  

  export const getNgayLuuByHinh = async (req, res) => {
    let { id } = req.params;
    try {
      let data = await model.luu_hinh.findAll({ where: { hinh_id: id } });
      if (data) {
        res.send(data);
      } else {
        res.status(404).send("No data");
      }
    } catch (error) {
      res.status(500).send("BE error.");
    }
  };
  

//CREATE
export const createNgayLuu = async (req, res) => {
    let { nguoi_dung_id, hinh_id, ngay_luu} = req.body;
    try {
      await model.luu_hinh.create({ nguoi_dung_id, hinh_id, ngay_luu});
      res.send("Successfully Added");
    } catch (error) {
      res.status(500).send("BE error");
    }
  };
  

//UPDATE
export const updateNgayLuu = async (req, res) => {
    let { id } = req.params;
    let { nguoi_dung_id, hinh_id, ngay_luu} = req.body;
    try {
      await model.luu_hinh.update(
        { nguoi_dung_id, hinh_id, ngay_luu},
        { where: { nguoi_dung_id: id, hinh_id: hinh_id } }
      );
  
      res.send("Successfully updated");
    } catch (error) {
      res.status(500).send("BE error.");
    }
  };
  
