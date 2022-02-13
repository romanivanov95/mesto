//валидация
// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const obj = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};

//показ
const showInputError = (formElement, inputElement, errorMessage, obj) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(obj.inputErrorClass)
    errorElement.textContent = errorMessage;
    errorElement.classList.add(obj.errorClass);
};

//скрытие
const hideInputError = (formElement, inputElement, obj) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(obj.inputErrorClass);
    inputElement.classList.remove(obj.errorClass);
    errorElement.textContent = ' ';
};

//проверка инпутов
const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, obj);
    } else {
    hideInputError(formElement, inputElement, obj);
    };
};

//добавление слушателей
const setEventListeners = (formElement, obj) => {
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    const buttonElement = formElement.querySelector(obj.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, obj);
    inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement, obj);
    });
    });
};

//проверка валидации формы
const enableValidation = (obj) => {
    const formList = Array.from(document.querySelectorAll(obj.formSelector));
    formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    setEventListeners(formElement, obj);
    });
};

//возврат
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    });
};

//переключение кнопки "сохранить"
const toggleButtonState = (inputList, buttonElement, obj) => {
    if (hasInvalidInput(inputList)) {
    saveButtonDisable(buttonElement, obj);
    } else {
    saveButtonActive(buttonElement, obj);
    };
};

//функция активнйо кнопки
const saveButtonActive = (buttonElement, obj) => {
    buttonElement.classList.remove(obj.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
};

//функция деактивации кнопки
const saveButtonDisable = (buttonElement, obj) => {
    buttonElement.classList.add(obj.inactiveButtonClass);
    buttonElement.setAttribute('disabled', '');
};

//вызов 
enableValidation(obj);