//Переменные, с которыми работаем
const page = document.querySelector('.page');
const cardContainer = page.querySelector('.cards');
const profileEditButton = page.querySelector('.profile__edit-button');
const profileTitle = page.querySelector('.profile__title');
const profileSubtitle = page.querySelector('.profile__subtitle');
const profileAddButton = page.querySelector('.profile__add-button');
const popupProfile = page.querySelector('.popup_value_profile');
const popupProfileForm = popupProfile.querySelector('.form');
const popupProfileInputName = popupProfile.querySelector('.form__item-text_value_name');
const popupProfileInputJob = popupProfile.querySelector('.form__item-text_value_job');
const popupProfileCloseButton = popupProfile.querySelector('.popup__close-button');
const popupProfileOverlay = popupProfile.querySelector('.popup__overlay');
const popupAddCard = page.querySelector('.popup_value_add-card');
const popupAddCardForm = popupAddCard.querySelector('.form');
const popupAddCardInputCardName = popupAddCard.querySelector('.form__item-text_value_card-name');
const popupAddCardInputLinkPhoto = popupAddCard.querySelector('.form__item-text_value_link-photo');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close-button');
const popupAddCardOverlay = popupAddCard.querySelector('.popup__overlay');
const popupAddCardSubmitButton = popupAddCard.querySelector('.form__item-submit');
const imagePopup = page.querySelector('.popup-image');
const imagePopupItem = imagePopup.querySelector('.popup-image__item');
const imagePopupTitle = imagePopup.querySelector('.popup-image__title');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');
const imagePopupOverlay = imagePopup.querySelector('.popup-image__overlay');
const initialCards = [
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  }
];

//Функции:
//Функция добавления карточек на страницу
function addCard (name, link) {
  const cardTemplate = page.querySelector('#cards').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const likeButton = card.querySelector('.card__like-button');
  const cardTrash = card.querySelector('.card__trash');
  cardTitle.textContent = name;
  cardImage.alt = name;
  cardImage.src = link;

  cardImage.addEventListener('click', () => {
    hangleClickCardImage(cardImage);
  });

  likeButton.addEventListener('click', () => {
    likeButtonActive(likeButton);
  });

  cardTrash.addEventListener('click', () => {
    removeElement(cardTrash)
  });
  return card;
};

function renderCard (container, card) {
  container.prepend(addCard (card.name, card.link));
};

//откртие попапа
const openPopup = (elm) => {
  elm.classList.add('popup_opened');
};
//закрытие попапа
const closePopup = (elm) => {
  elm.classList.remove('popup_opened');
};
//Кнопка лайка
const likeButtonActive = (elm) => {
  elm.classList.toggle('card__like-button_active');
};
//Удаление карточки
const removeElement = (elm) => {
  const card = elm.closest('.card');
  card.remove();
};
//Функция обработчика субмита попапа редактирования профиля
const handlePopupProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = popupProfileInputName.value;
  profileSubtitle.textContent = popupProfileInputJob.value;
  closePopup (popupProfile);
};
//Функция закрытия попапа редактирования профиля и сохранение исходных данных в инпутах
const handlePopupProfileClose = () => {
  popupProfileInputName.value = profileTitle.textContent;
  popupProfileInputJob.value = profileSubtitle.textContent;
  closePopup (popupProfile);
};
//Функция обработчика субмита попапа добавления карточки
const handlePopupAddCardFormSubmit = evt => {
  evt.preventDefault();
  const card = {
    name: popupAddCardInputCardName.value,
    link: popupAddCardInputLinkPhoto.value
  };
  renderCard(cardContainer, card);
  popupAddCardForm.reset();
  closePopup (popupAddCard);
};
//Функция с помощью которой передаются данные для попапа при нажатии на картинку
const hangleClickCardImage = (item) => {
  openPopup(imagePopup);
  imagePopupItem.src = item.src;
  imagePopupItem.alt = item.alt;
  imagePopupTitle.textContent = item.alt;
};

//перебор массива для рендера карточек
initialCards.forEach(function(card) {
  renderCard(cardContainer, card)
});

profileEditButton.addEventListener('click', () => {
  openPopup(popupProfile);
});
popupProfileForm.addEventListener('submit', (handlePopupProfileFormSubmit));

popupProfileCloseButton.addEventListener('click', handlePopupProfileClose);

popupProfileOverlay.addEventListener('click', handlePopupProfileClose);

profileAddButton.addEventListener('click', () => {
  openPopup (popupAddCard);
  replaceCursorSumbitButton();
});

popupAddCardForm.addEventListener('submit', handlePopupAddCardFormSubmit);

popupAddCardCloseButton.addEventListener('click', () => {
  popupAddCardForm.reset();
  closePopup (popupAddCard);
});

popupAddCardOverlay.addEventListener('click', () => {
  popupAddCardForm.reset();
  closePopup (popupAddCard);
});

imagePopupCloseButton.addEventListener('click', () => {
  closePopup (imagePopup);
});

imagePopupOverlay.addEventListener('click', () => {
  closePopup (imagePopup);
});

//вставка данных в профиль из инпутов
profileTitle.textContent = popupProfileInputName.value;
profileSubtitle.textContent = popupProfileInputJob.value;

