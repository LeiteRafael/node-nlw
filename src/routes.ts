import { response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController"

const router = Router();

const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);
router.get("/users", () => {
    return response.send("teste")
});

export { router };