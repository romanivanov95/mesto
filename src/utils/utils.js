export const initialCards = [
  {
    place: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    place: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    place: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    place: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    place: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    place: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  }
];

export const profileBtn = document.querySelector(".bio__edit-btn");
export const profilePopup = document.querySelector('#popupProfile'); 
export const cardPopup = document.querySelector('#popupCard'); 
export const imagePopup = document.querySelector(".popup_album"); 
export const profileCloseBtn = document.querySelector(".popup__close-btn_profile"); 
export const cardCloseBtn = document.querySelector(".popup__close-btn_card"); 
export const albumCloseBtn = document.querySelector(".popup__close-btn_album"); 

export const formBioElement = document.querySelector(".popup__form_bio");
export const formImgCard = document.querySelector(".popup__form_card"); 

export const listContainer = (".elements__grid"); 

export const bioName = document.querySelector(".bio__name");  
export const bioDescription = document.querySelector(".bio__description"); 

export const nameInput = document.querySelector(".popup__input_type_call"); 
export const jobInput = document.querySelector(".popup__input_type_hobbies"); 

export const addCardBtn = document.querySelector(".profile__add-btn"); 

export const linkInput = document.querySelector(".popup__input_type_link"); 
export const placeInput = document.querySelector(".popup__input_type_place"); 

export const popupImageSelector = '.popup__image';
export const popupSubtitleSelector = '.popup__description';
export const popupZoom = '.popup_album';
export const sectionCards = '.cards';
export const cardsList = '.elements__grid';
export const profileNameSelector = '.bio__name';
export const profileInfoSelector = '.bio__description';
export const popupEditSelector = '.popup_profile';
export const popupAddSelector = '.popup_card';


export const selectorTemaplate = '#card__template'; 

export const profilePopupSaveBtn = profilePopup.querySelector('.popup__save-btn');

export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};