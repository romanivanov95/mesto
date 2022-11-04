import './index.css';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';

import  Section  from '../components/Section.js';
import  PopupWithForm  from '../components/PopupWithForm.js';
import  PopupWithImage  from '../components/PopupWithImage.js';
import  UserInfo from '../components/UserInfo.js';
import { initialCards, 
    profileBtn,  
    cardsList, 
    popupZoom, 
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
    settings } 
   from '../utils/utils.js'



const addCardFormValidator = new FormValidator(settings, formImgCard);
addCardFormValidator.enableValidation();

const editProfileFormValidator = new FormValidator(settings, formBioElement);
editProfileFormValidator.enableValidation();


const popupImgZoom = new PopupWithImage(popupZoom)
popupImgZoom.setEventListeners();


const initialItems = new Section({
    items: initialCards,
    renderer: (item) => {
        initialItems.addItem(createNewCard(item));
    }
}, cardsList);
initialItems.renderItems();

function handleCardClick(link, name) {
    popupImgZoom.openPopupAlbum(link, name)
};

function createNewCard(data) {
    const newCard = new Card(data, handleCardClick, selectorTemaplate)
    return newCard.generateCard()
};

const userInf = new UserInfo(profileNameSelector, profileInfoSelector)

function setInputValue() {
    const userInformation = userInf.getUserInfo();
    nameInput.value = userInformation.name;
    jobInput.value = userInformation.about;
}

const popupFormEdit = new PopupWithForm(popupEditSelector, (data) => {
  userInf.setUserInfo(data)
});
popupFormEdit.setEventListeners();

profileBtn.addEventListener('click', () => {
  setInputValue();
  popupFormEdit.open();
})

const popupFormAdd = new PopupWithForm(popupAddSelector, (item) => {
  initialItems.addItem(createNewCard(item));
})

addCardBtn.addEventListener('click', () => {
  addCardFormValidator.clearErrors();
    popupFormAdd.open()
});

popupFormAdd.setEventListeners();




