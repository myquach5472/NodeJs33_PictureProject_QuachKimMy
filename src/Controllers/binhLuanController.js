import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';

const model = initModels(sequelize);

//READ
export const getAllBinhLuan = async (req, res) => {
    try {
        let data = await model.binh_luan.findAll();
        res.send(data);
    }
    catch (error) {
        res.status(500).send("BE error");
    }
}


  export const getBinhLuanByUser = async (req, res) => {
    let { id } = req.params;
    try {
      let data = await model.binh_luan.findOne({ where: { nguoi_dung_id: id } });
      if (data) {
        res.send(data);
      } else {
        res.status(404).send("No data");
      }
    } catch (error) {
      res.status(500).send("BE error");
    }
  };
  

  export const getBinhLuanByHinh = async (req, res) => {
    let { id } = req.params;
    try {
      let data = await model.binh_luan.findAll({ where: { hinh_id: id } });
      if (data) {
        res.send(data);
      } else {
        res.status(404).send("No data");
      }
    } catch (error) {
      res.status(500).send("Be error");
    }
  };
  

//CREATE
export const createBinhLuan = async (req, res) => {
    let { nguoi_dung_id, hinh_id, ngay_binh_luan,_noi_dung} = req.body;
    try {
      await model.binh_luan.create({ nguoi_dung_id, hinh_id, ngay_binh_luan,_noi_dung});
      res.send("Successfully added");
    } catch (error) {
      res.status(500).send("BE error");
    }
  };
  

//UPDATE
export const updateBinhLuan = async (req, res) => {
    let { id } = req.params;
    let { nguoi_dung_id, hinh_id, ngay_binh_luan,_noi_dung} = req.body;
    try {
      await model.binh_luan.update(
        { nguoi_dung_id, hinh_id, ngay_binh_luan,_noi_dung},
        { where: { binh_luan_id: id, hinh_id: hinh_id } }
      );
  
      res.send("Successfully updated");
    } catch (error) {
      res.status(500).send("BE error");
    }
  };
  
