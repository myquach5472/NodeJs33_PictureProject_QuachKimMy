import express from "express";
import {getAllNgayLuu, getNgayLuuByUser, getNgayLuuByHinh, createNgayLuu, updateNgayLuu} from "../Controllers/luuHinhController.js";
import { checkToken } from '../Config/jwtConfig.js';

const luuHinhRoute = express.Router();

luuHinhRoute.get("/get-all-ngay-luu", checkToken, getAllNgayLuu);
luuHinhRoute.get("/get-ngay-luu-by-user/:id", checkToken, getNgayLuuByUser);
luuHinhRoute.get("/get-ngay-luu-by-hinh/:id", checkToken, getNgayLuuByHinh);
luuHinhRoute.post("/create-ngay-luu", checkToken, createNgayLuu);
luuHinhRoute.put("/update-ngay-luu/:id", checkToken, updateNgayLuu);

export default luuHinhRoute;