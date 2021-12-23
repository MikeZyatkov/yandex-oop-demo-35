import TodoListItem from "./TodoListItem.js";

class TodoList {
    constructor(selector, todos) {
        this._selector = selector;
        this._todos = todos;
    }

    _getTemplate() {
        return document.querySelector(this._selector)
            .content
            .querySelector('.todos__list')
            .cloneNode(true)
    }

    getView() {
        this._element = this._getTemplate();
        this._todos.forEach(title => {
            const todo = new TodoListItem('.todo-item-template', title);
            this._element.append(todo.getView());
        })

        return this._element;
    }
}

export default TodoList;
