const ToDoModel = require('../model/todo.model');

class ToDoServices {
    static async createTodo(userId, title, desc) {
        const createTodo = new ToDoModel({ userId, title, desc });
        return await createTodo.save();
    }

    static async getTododata(userId) {
        const todoData = await ToDoModel.find({ userId });
        return todoData;
    }

    static async deleteTodo(id) {
        const deletedData = await ToDoModel.findByIdAndDelete({ _id: id });
        return deletedData;
    }
}

module.exports = ToDoServices;