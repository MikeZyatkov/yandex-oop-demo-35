class TodoListForm {
    constructor(selector) {
        this._selector = selector;
    }

    _getTemplate() {
        return document.querySelector(this._selector)
            .content
            .querySelector('.todo-form')
            .cloneNode(true)
    }

    getView() {
        return this._getTemplate();
    }
}

export default TodoListForm;
