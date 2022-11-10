import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._inputValues = this._form.querySelectorAll('.popup__input')
    }

    _getInputValues() {
        const inputsValue = {};
        this._inputValues.forEach((item) =>
            inputsValue[item.name] = item.value);
        return inputsValue;
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
        });
    };

    close() {
        this._form.reset();
        super.close();
    };

    loadingConduction(isLoading, buttonsText) {
      this._submitButton = this._form.querySelector('.popup__button')
      if (isLoading) {
          this._submitButton.textContent = `Сохранение...`
      } else {
          this._submitButton.textContent = buttonsText;
      }
  };
}