import express from "express";
import {getAllUser, getUserByName, login, createUser, updateUser,deleteUser} from "../Controllers/nguoiDungController.js";
import { checkToken } from '../Config/jwtConfig.js';


const nguoiDungRoute = express.Router();

nguoiDungRoute.get("/get-all-user", checkToken, getAllUser);
nguoiDungRoute.get("/get-user-by-name/:fullName", checkToken, getUserByName);
nguoiDungRoute.get("/login", login);
nguoiDungRoute.post("/create-user", createUser);
nguoiDungRoute.put("/update-user/:id", checkToken, updateUser);
nguoiDungRoute.delete("/delete-user/:id", checkToken, deleteUser);

export default nguoiDungRoute;