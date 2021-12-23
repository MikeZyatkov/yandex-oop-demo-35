class TodoList {
    constructor(selector) {
        this._selector = selector;
    }

    _getTemplate() {
        return document.querySelector(this._selector)
            .content
            .querySelector('.todos__list')
            .cloneNode(true)
    }

    getView() {
        return this._getTemplate();
    }
}

export default TodoList;
