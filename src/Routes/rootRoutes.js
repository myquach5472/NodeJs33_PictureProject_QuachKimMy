import express from 'express';
import nguoiDungRoute from './nguoiDungRoute.js';
import binhLuanRoute from './binhLuanRoute.js';
import hinhAnhRoute from './hinhAnhRoute.js';
import luuHinhRoute from './luuHinhRoute.js';

const rootRoutes = express.Router();
rootRoutes.use("/nguoiDung", nguoiDungRoute);
rootRoutes.use("/binhLuan", binhLuanRoute);
rootRoutes.use("/hinhAnh", hinhAnhRoute);
rootRoutes.use("/luuHinh", luuHinhRoute);

export default rootRoutes;