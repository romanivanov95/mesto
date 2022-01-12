let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let saveForm = document.querySelector('.popup__save-button');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-job');
let profileUserName = document.querySelector('.profile__name');
let profileUserDescription = document.querySelector('.profile__description');

openPopup.addEventListener('click', function() {
    popup.classList.add('popup_opened');
})

closePopup.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
})


let formElement = document.querySelector('.popup');

function formSubmitHandler(event) {
    event.preventDefault();
    profileUserName.textContent = nameInput.value;
    profileUserDescription.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
};
formElement.addEventListener('submit', formSubmitHandler); 
