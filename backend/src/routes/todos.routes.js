import { Router } from "express";
import { getAllTodosCtrl, createTodoCtrl, updateTodoCtrl, deleteTodoCrtl } from "../controllers/todos.controllers.js";
import validarJwt from "../middlewares/validar-jwt.js";
const todosRouter = Router();

todosRouter.get("/", validarJwt, getAllTodosCtrl);

todosRouter.post('/', validarJwt, createTodoCtrl); 

todosRouter.put('/:id', validarJwt, updateTodoCtrl); 

todosRouter.delete('/:id', validarJwt, deleteTodoCrtl); 



export { todosRouter };


