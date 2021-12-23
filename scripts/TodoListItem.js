class TodoListItem {
    constructor(selector, title) {
        this._selector = selector;
        this._title = title;
    }

    _getTemplate() {
        return document.querySelector(this._selector)
            .content
            .querySelector('.todo-item')
            .cloneNode(true)
    }

    _handleDeleteTodo = () => {
        this._element.remove();
    }

    getView() {
        this._element = this._getTemplate();
        this._element.querySelector('.todo-item__text').textContent = this._title;
        this._element.querySelector('.todo-item__del').addEventListener('click', this._handleDeleteTodo);

        return this._element;
    }
}

export default TodoListItem;
