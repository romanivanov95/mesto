//общие переменные
const page = document.querySelector('.page');
const elementsContainer = document.querySelector('.elements');
const profileUserName = document.querySelector('.profile__name');
const profileUserDescription = document.querySelector('.profile__description');

//переменные попапа edit-profile
const popupEditUserButtonOpen = document.querySelector('.profile__edit-button');
const popupEditUser = document.querySelector('.popup_value_edit-profile');
const popupEditUserForm = document.querySelector('.popup__form');
const popupEditUserInputName = document.querySelector('.popup__input_value_name');
const popupEditUserInputJob = document.querySelector('.popup__input_value_job');
const popupEditUserButtonClose = popupEditUser.querySelector('.popup__close-button');

//переменные попапа add-element
const popupAddElementButtonOpen = document.querySelector('.profile__add-button');
const popupAddElement = document.querySelector('.popup_value_add-element');
const popupAddElementButtonClose = popupAddElement.querySelector('.popup__close-button');
const popupAddElementForm = popupAddElement.querySelector('.popup__form');
const popupAddElementInputName = popupAddElement.querySelector('.popup__input_value_element-name');
const popupAddElementInputLink = popupAddElement.querySelector('.popup__input_value_element-link');

//переменные попапа image-fullsize
const popupImageFullsize = document.querySelector('.popup_value_image-fullsize');
const popupImageFullsizeImage = popupImageFullsize.querySelector('.popup__fullsize-image');
const popupImageFullsizeImageName = popupImageFullsize.querySelector('.popup__fullsize-image-name');
const popupImageFullsizeButtonClose = popupImageFullsize.querySelector('.popup__close-button');

//общие функции открытия и закрытия попапов
const openPopup = (element) => {
    element.classList.add('popup_opened');
}

const closePopup = (element) => {
    element.classList.remove('popup_opened');
};

//попап edit-profile
popupEditUserButtonOpen.addEventListener('click', () => {
    openPopup (popupEditUser);
    popupEditUserInputName.value = profileUserName.textContent;
    popupEditUserInputJob.value = profileUserDescription.textContent;
});

popupEditUserButtonClose.addEventListener('click', () => {
    closePopup (popupEditUser);
});

//обработчик формы edit-profile
const handleEditProfileFormSubmit = event => {
  event.preventDefault();
  profileUserName.textContent = popupEditUserInputName.value;
  profileUserDescription.textContent = popupEditUserInputJob.value;
  closePopup (popupEditUser);
};
popupEditUserForm.addEventListener('submit', handleEditProfileFormSubmit); 

//попап add-element
popupAddElementButtonOpen.addEventListener('click', () => {
    openPopup (popupAddElement);
});

popupAddElementButtonClose.addEventListener('click', () => {
    popupAddElementForm.reset();
    closePopup (popupAddElement);
});

//кнопка like
const toggleLikeButton = (element) => {
    element.classList.toggle('elements__like-button_active');
};

//кнопка delete
const deleteElement = (element) => {
  const elementsCard = element.closest('.elements__card');
  elementsCard.remove();
};

//добавление карточек на страницу
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 

//функции добавления карточек на страницу
function addElement(name, link) {
  const elementsTemplate = page.querySelector('#elements').content;
  const elementsCard = elementsTemplate.querySelector('.elements__card').cloneNode(true);
  const elementsImage = elementsCard.querySelector('.elements__image');
  const elementsName = elementsCard.querySelector('.elements__name');
  const elementsButtonLike = elementsCard.querySelector('.elements__like-button');
  const elementsDeleteButton = elementsCard.querySelector('.elements__delete-button');
  elementsImage.alt = name;
  elementsImage.src = link;
  elementsName.textContent = name;

  elementsButtonLike.addEventListener('click', () => {
    toggleLikeButton(elementsButtonLike);
  });

  elementsDeleteButton.addEventListener('click', () => {
    deleteElement(elementsDeleteButton);
  });

  elementsImage.addEventListener('click', () => {
    popupImageFullsizeImage.src = link;
    popupImageFullsizeImage.alt = name;
    popupImageFullsizeImageName.textContent = name;
    openPopup (popupImageFullsize);
  });

  return elementsCard;
};

function prependElement (elementsAll, elementsCard) {
  elementsAll.prepend(addElement (elementsCard.name, elementsCard.link));
};

//обработчик формы add-element
const handleAddElementFormSubmit = event => {
  event.preventDefault();
  const elementsCard = {
    name: popupAddElementInputName.value,
    link: popupAddElementInputLink.value
  };
  prependElement(elementsContainer, elementsCard);
  popupAddElementForm.reset();
  closePopup (popupAddElement);
};

popupAddElementForm.addEventListener('submit', handleAddElementFormSubmit);

//добавление исходных карточек
initialCards.forEach(function(elementsCard) {
  prependElement(elementsContainer, elementsCard);
});

//попап image-fullsize
popupImageFullsizeButtonClose.addEventListener('click', () => {
  closePopup (popupImageFullsize);
});

