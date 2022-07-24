import './index.css';
import Api from '../components/Api.js';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';

import  Section  from '../components/Section.js';
import  PopupDelete from '../components/PopupDelete.js';
import  PopupWithForm  from '../components/PopupWithForm.js';
import  PopupWithImage  from '../components/PopupWithImage.js';
import  UserInfo from '../components/UserInfo.js';
import {  
    profileBtn,   
    popupZoom, 
    avatarPopup,
    editAvatarButton,
    popupConfirmSelector,
    popupAvatarSelector,
    profileAvatarSelector,
    popupEditSelector,
    formImgCard,
    formBioElement, 
    popupAddSelector, 
    profileNameSelector, 
    profileInfoSelector, 
    nameInput, 
    jobInput, 
    addCardBtn, 
    selectorTemaplate,
    settings, 
    formAvatar,
    cardsList} 
   from '../utils/utils.js'


let userId;

const popupImgZoom = new PopupWithImage(popupZoom)
popupImgZoom.setEventListeners();

const popupFormEdit = new PopupWithForm(popupEditSelector, editUserInfo);
popupFormEdit.setEventListeners();

const popupFormAdd = new PopupWithForm(popupAddSelector, saveCard)
popupFormAdd.setEventListeners();

const popupDelete = new PopupDelete(popupConfirmSelector);
popupDelete.setEventListeners();

const popupAvatarForm = new PopupWithForm(popupAvatarSelector, editAvatar);
popupAvatarForm.setEventListeners();

const avatarFormValidation = new FormValidator(settings, avatarPopup)
avatarFormValidation.enableValidation();

const addCardFormValidator = new FormValidator(settings, formImgCard);
addCardFormValidator.enableValidation();

const editProfileFormValidator = new FormValidator(settings, formBioElement);
editProfileFormValidator.enableValidation();


function editAvatar(data) {
  popupAvatarForm.loadingConduction(true, 'Сохранить')
  api.editAvatar(data)
      .then((data) => {
          userInfo.setUserInfo(data)
          popupAvatarForm.close();
      })
      .finally(() => {
          popupAvatarForm.loadingConduction(false, 'Сохранить')
      })
};

   const userInfo = new UserInfo(profileNameSelector, profileInfoSelector, profileAvatarSelector)

   const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43/',
    headers: {
      authorization: '7eb3efca-bef5-48de-935e-a185424b57c9',
      'Content-Type': 'application/json'
    }
  });

const initialItems = new Section({
  renderer: (items) => {
      const card = createNewCard(items);
      initialItems.addItem(card);
  },
}, cardsList);

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([data, items]) => {
        userId = data._id;
        userInfo.setUserInfo(data);
        initialItems.renderItems(items);
    })
    .catch((err) => {
        console.log(err);
    });

    function createNewCard(data) {
        const newCard = new Card(data, userId, selectorTemaplate, handleCardClick, handleLikeClick, handleCardDelete)
        return newCard.generateCard()
    };

    function handleCardDelete(card) {
      popupDelete.open();
      popupDelete.handelSubmit(() => {
          api.deleteCard(card.id)
              .then((data) => {
                  card.clickDelete(data)
              })
              .then(() => {
                  popupDelete.close()
              })
      })
  };

    function handleLikeClick(card) {
      if (card.isLiked()) {
          api.deleteCardLike(card.id)
              .then(cardData => {
                  card.setLikes(cardData.likes)
              })
      } else {
          api.putCardLike(card.id)
              .then(cardData => {
                  card.setLikes(cardData.likes)
              })
      }
  };
    
function handleCardClick(link, name) {
    popupImgZoom.openPopupAlbum(link, name)
};

function editUserInfo(data) {
  popupFormEdit.loadingConduction(true, 'Сохранить')
  api.editUserInfo(data)
      .then(data => {
          userInfo.setUserInfo(data)
          popupFormEdit.close()
      })
      .finally(() => {
          popupFormEdit.loadingConduction(false, 'Сохранить')
      })
};

function saveCard(data) {
  popupFormAdd.loadingConduction(true, 'Сохранить')
  api.createCardApi(data)
      .then(data => {
        initialItems.addItem(createNewCard(data))
          popupFormAdd.close()
      })
      .finally(() => {
          popupFormAdd.loadingConduction(false, 'Сохранить')
      })
};

function setInputValue() {
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().about;
}

profileBtn.addEventListener('click', () => {
  setInputValue();
  popupFormEdit.open();
  editProfileFormValidator.clearErrors();
})


addCardBtn.addEventListener('click', () => {
  addCardFormValidator.clearErrors();
    popupFormAdd.open()
});

editAvatarButton.addEventListener('click', () => {
  popupAvatarForm.open();
  avatarFormValidation.clearErrors();
});






