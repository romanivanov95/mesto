export class Card {
  constructor(data, handleCardClick, cardSelector) {
      this._name = data.place;
      this._link = data.link;
      this._handleCardClick = handleCardClick;
      this._cardSelector = cardSelector;
  };

  _getTemplate() {
      const cardElement = document.querySelector(this._cardSelector).content.querySelector('.elements__item').cloneNode(true);

      return cardElement
  };

  _setEventListeners() {
      this._likeButton = this._element.querySelector('.elements__like-btn');
      this._likeButton.addEventListener('click', () => {
          this._clickLike();
      });
      this._delButton = this._element.querySelector('.elements__dlt-btn');
      this._delButton.addEventListener('click', () => {
          this._clickDelete();
      });
      this._cardImage = this._element.querySelector('.elements__photo')
      this._cardImage.addEventListener('click', () => {
          this._handleCardClick(this._link, this._name)
      });
  };

  _clickLike() {
      this._likeButton.classList.toggle('button_active')
  };

  _clickDelete() {
      this._element.remove();
  };

  generateCard() {
      this._element = this._getTemplate();
      this._cardTitle = this._element.querySelector('.elements__name');
      this._setEventListeners();
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;
      this._cardTitle.textContent = this._name;

      return this._element
  };
};

