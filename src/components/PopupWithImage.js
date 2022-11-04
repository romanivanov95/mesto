import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupDescription = this._popup.querySelector('.popup__description')
    }
    openPopupAlbum(link, name) {
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupDescription.textContent = name;
        super.open();
    };
}

