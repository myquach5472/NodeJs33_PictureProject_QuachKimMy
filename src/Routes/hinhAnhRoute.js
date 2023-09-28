import express from "express";
import {getAllHinhAnh, getHinhAnhByUser, getHinhAnhByTenHinh, createHinhAnh, updateHinhAnh} from "../Controllers/hinhAnhController.js";
import { checkToken } from '../Config/jwtConfig.js';

const hinhAnhRoute = express.Router();

hinhAnhRoute.get("/get-all-hinh-anh", checkToken, getAllHinhAnh);
hinhAnhRoute.get("/get-hinh-anh-by-user/:id", checkToken, getHinhAnhByUser);
hinhAnhRoute.get("/get-hinh-anh-by-ten-hinh/:tenHinh", checkToken, getHinhAnhByTenHinh);
hinhAnhRoute.post("/create-hinh-anh", checkToken, createHinhAnh);
hinhAnhRoute.put("/update-hinh-anh/:id", checkToken, updateHinhAnh);

export default hinhAnhRoute;