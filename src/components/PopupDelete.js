import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form_delete');
    };
    handelSubmit(submit) {
        this._submitHandel = submit;
    };
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandel();
        })
    };
};