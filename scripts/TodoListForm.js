class TodoListForm {
    constructor(selector, onSubmit) {
        this._selector = selector;
        this._onSubmit = onSubmit;
    }

    _getTemplate() {
        return document.querySelector(this._selector)
            .content
            .querySelector('.todo-form')
            .cloneNode(true)
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        const input = this._element.querySelector('.todo-form__input');
        this._onSubmit(input.value);
        input.value = '';
    }

    getView() {
        this._element = this._getTemplate();

        this._element.addEventListener('submit', this._handleSubmit)

        return this._element;
    }
}

export default TodoListForm;
