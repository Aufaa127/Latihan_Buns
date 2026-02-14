import { Hono } from "hono";
import UsersController from "../controllers/users.controller";

const api = new Hono();
const usersController = new UsersController();

api.get("/users", (c) => usersController.getListData(c))

export default api;
