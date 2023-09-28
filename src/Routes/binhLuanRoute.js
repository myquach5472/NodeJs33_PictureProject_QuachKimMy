import express from "express";
import {getAllBinhLuan, getBinhLuanByUser, getBinhLuanByHinh, createBinhLuan, updateBinhLuan} from "../Controllers/binhLuanController.js";
import { checkToken } from '../Config/jwtConfig.js';

const binhLuanRoute = express.Router();

binhLuanRoute.get("/get-all-binh-luan", checkToken,  getAllBinhLuan);
binhLuanRoute.get("/get-binh-luan-by-user/:id", checkToken,  getBinhLuanByUser);
binhLuanRoute.get("/get-binh-luan-by-hinh/:id", checkToken,  getBinhLuanByHinh);
binhLuanRoute.post("/create-binh-luan", checkToken,  createBinhLuan);
binhLuanRoute.put("/update-binh-luan/:id", checkToken,  updateBinhLuan);

export default binhLuanRoute;