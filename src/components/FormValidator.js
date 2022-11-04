export class FormValidator {
 
   constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._button = this._form.querySelector(this._settings.submitButtonSelector);
  }

  _disableButton() {
    this._button.disabled = true;
    this._button.classList.add(this._settings.inactiveButtonClass);
  }

  _enableButton() {
    this._button.disabled = false;
    this._button.classList.remove(this._settings.inactiveButtonClass);
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  };

  _showError(input, errorString) {
    const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
    errorElement.textContent = errorString;
    errorElement.classList.add(this._settings.errorClass);
    input.classList.add(this._settings.inputErrorClass);
  }

  _hideError(input) {
    const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(this._settings.errorClass);
    input.classList.remove(this._settings.inputErrorClass);
  }

  _validateInput(input) {
    if (!input.validity.valid) {
      const errorString = input.validationMessage;
      this._showError(input, errorString);
    } else {
      this._hideError(input);
    }
  }

  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._validateInput(input);
        this._toggleButtonState();
      });
    });
  }

  clearErrors() {
    this._inputList.forEach((input) => {
      const errorElement = input.closest(this._settings.formSelector).querySelector(`#${input.id}-error`);
      this._hideError(input, errorElement);
    });
    this._disableButton();
  }


  enableValidation() {
    this._disableButton();
    this._setEventListeners();
  }
}

