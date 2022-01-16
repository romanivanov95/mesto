let openPopup = document.querySelector('.profile__edit-button');
let closePopup = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let profileUserName = document.querySelector('.profile__name');
let profileUserDescription = document.querySelector('.profile__description');
/*let likeButton = document.querySelector('.elements__like-button');
let likeButtonActive = document.querySelector('.elements__like-button_active');
let saveForm = document.querySelector('.popup__save-button');*/
let nameInput = document.querySelector('.popup__input_value_name');
let jobInput = document.querySelector('.popup__input_value_job');

function popupAdd() {
    popup.classList.add('popup_opened');
    nameInput.value = profileUserName.textContent;
    jobInput.value = profileUserDescription.textContent;
}

function popupRemove() {
    popup.classList.remove('popup_opened');
}

openPopup.addEventListener('click', popupAdd);

closePopup.addEventListener('click', popupRemove);

/*likeButton.addEventListener('click', function() {
    likeButton.classList.add('elements__like-button_active');
})*/

function formSubmitHandler(event) {
    event.preventDefault();
    profileUserName.textContent = nameInput.value;
    profileUserDescription.textContent = jobInput.value;
    popupRemove();
};

formElement.addEventListener('submit', formSubmitHandler); 
