export class Card {
  constructor(data, usedId, cardSelector, handleCardClick, handleLikeClick, handleDeleteCard) {
      this._name = data.name;
      this._link = data.link;
      this.id = data._id;
      this._likes = data.likes;
      this._owner = data.owner._id;
      this._usedId = usedId;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._handleLikeClick = handleLikeClick;
      this._handleDeleteCard = handleDeleteCard;
  };

  _getTemplate() {
      const cardElement = document.querySelector(this._cardSelector).content.querySelector('.elements__item').cloneNode(true);

      return cardElement
  };
  
  clickDelete() {
      this._element.remove();
      this._element = null;
  };


  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._link, this._name));
    this._cardLike.addEventListener('click', () => this._handleLikeClick(this));
    this._cardDelete.addEventListener('click', () => this._handleDeleteCard(this));
  };

  cardsOwner() {
    if (this._usedId === this._owner) {
        return (true)
    }
};

handleDeleteButton() {
  if (this.cardsOwner() === true) {
      this._cardDelete.classList.remove('elements__dlt-btn_deactive');
  } else {
      this._cardDelete.classList.add('elements__dlt-btn_deactive');
  }
};

isLiked() {
  return this._likes.some(owner => owner._id === this._usedId)
};

toggleLikeButton() {
  if (this.isLiked()) {
      this._cardLike.classList.add('button_active');
  } else {
      this._cardLike.classList.remove('button_active');
  }
};

_likeAmount() {
  this._cardLike.classList.toggle('button_active')
  this._cardLikeCounter.textContent = this._likes.length;
};

setLikes(cardData) {
  this._likes = cardData;
  this._likeAmount();
};

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.elements__photo');
    this._cardTitle = this._element.querySelector('.elements__name').textContent = this._name;
    this._cardLike = this._element.querySelector('.elements__like-btn');
    this._cardDelete = this._element.querySelector('.elements__dlt-btn');
    this._cardLikeCounter = this._element.querySelector('.elements__like-count');
    this._cardLikeCounter.textContent = this._likes.length;

    this._setEventListeners();
    this.handleDeleteButton();
    this.toggleLikeButton();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._element
  };
};

