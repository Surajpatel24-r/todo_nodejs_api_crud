const router = require('express').Router();
const ToDoController = require("../controller/todo.controller");

router.post('/storeTodo', ToDoController.createTodo);
router.post('/getUserTodoList', ToDoController.getUserTodo);
router.post('/deleteTodo', ToDoController.deleteTodo);

module.exports = router;