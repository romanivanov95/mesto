import Card from './Сard.js';
import FormValidator from './FormValidator.js';

const profileBtn = document.querySelector(".bio__edit-btn");
const profileAddCardBtn = document.querySelector(".profile__add-btn");

const profilePopup = document.querySelector(".popup_profile");
const profilePopupSaveBtn = profilePopup.querySelector('.popup__save-btn');
const cardPopup = document.querySelector(".popup_card");
const imagePopup = document.querySelector(".popup_album");
 
const popupAlbumImage = document.querySelector(".popup__image");
const popupDescription = document.querySelector(".popup__description");

const profileCloseBtn = document.querySelector(".popup__close-btn_profile");
const cardCloseBtn = document.querySelector(".popup__close-btn_card");
const albumCloseBtn = document.querySelector(".popup__close-btn_album");

const formBioElement = document.querySelector(".popup__form_bio");
const formImgCard = document.querySelector(".popup__form_card");

const bioName = document.querySelector(".bio__name");
const bioDescription = document.querySelector(".bio__description");
const nameInput = document.querySelector(".popup__input_type_call");
const jobInput = document.querySelector(".popup__input_type_hobbies");
const placeInput = document.querySelector(".popup__input_type_place");
const linkInput = document.querySelector(".popup__input_type_link");
const listContainer = document.querySelector(".elements__grid");
const selectorTemaplate = '#card__template';

export const Settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

//Открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_is-active");
  document.addEventListener('keydown', closeByEscape);
}

//Закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_is-active");
  document.removeEventListener('keydown', closeByEscape);
}

//Закрытие попапа по клику на оверлей
function closeOverlayClick(event) {
  if(event.target === event.currentTarget) {
    closePopup(event.currentTarget);
  }
}

//Закрытие на кнопку ESC
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-active');
    closePopup(openedPopup);
  }
}

const handleCLickImage = (link, name) => {
    popupAlbumImage.src = link;
    popupAlbumImage.alt = link;
    popupDescription.textContent = name;
  
    openPopup(imagePopup);
}

function renderCard (link, name) {
  return new Card(link, name, selectorTemaplate, handleCLickImage).getCard();
}

function addCard (card) {
  listContainer.prepend(card);
}

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

initialCards.forEach((item) => {
  const card = renderCard(item.link, item.name);
  addCard(card);
});


//Форма отправки изменений в имени и описании профиля
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  bioName.textContent = nameInput.value;
  bioDescription.textContent = jobInput.value;
  closePopup(profilePopup);
}


function handleSubmitPopupAddCard (evt) {
  evt.preventDefault();
  const card = renderCard(linkInput.value, placeInput.value);
  addCard(card);
  closePopup(cardPopup);
}

profileBtn.addEventListener('click', () => {
  nameInput.value = bioName.textContent;
  jobInput.value = bioDescription.textContent;
  editProfileFormValidator.clearErrors();
  openPopup(profilePopup);
});
profilePopupSaveBtn.addEventListener('submit', handleProfileFormSubmit);


profileAddCardBtn.addEventListener('click', () => {
  formImgCard.reset(); 
  addCardFormValidator.clearErrors();
  openPopup(cardPopup);
});
cardPopup.addEventListener('submit',  handleSubmitPopupAddCard);


profilePopup.addEventListener('click', closeOverlayClick);
cardPopup.addEventListener('click', closeOverlayClick);
imagePopup.addEventListener('click', closeOverlayClick);
profileCloseBtn.addEventListener("click", () => closePopup(profilePopup));
cardCloseBtn.addEventListener("click", () => closePopup(cardPopup));
albumCloseBtn.addEventListener("click", () => closePopup(imagePopup));
formBioElement.addEventListener("submit", handleProfileFormSubmit);

const addCardFormValidator = new FormValidator(Settings, formImgCard);
addCardFormValidator.enableValidation();

const editProfileFormValidator = new FormValidator(Settings, formBioElement);
editProfileFormValidator.enableValidation();