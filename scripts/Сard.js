class Card {
    constructor(link, name, selectorTemaplate, handleClickImage) {
      this._link = link;
      this._name = name;
      this._cardTemplate = document.querySelector(selectorTemaplate).content;
      this._handleClickImage = handleClickImage;
    }
  
    _getTemplate() {
      this._card = this._cardTemplate.querySelector('.elements__item').cloneNode(true);
      this._cardImage = this._card.querySelector('.elements__photo');
      this._cardTitle = this._card.querySelector('.elements__name');
      this._heart = this._card.querySelector('.elements__like-btn');
      this._trash = this._card.querySelector('.elements__dlt-btn');
    }
  
    _likeElement(event) {
      event.target.classList.toggle('button_active');
    }
  
    _removeElement(event) {
      event.target.closest('.elements__item').remove();
    }
  
    getCard() {
      this._getTemplate();
  
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;
      this._cardTitle.textContent = this._name;
  
      this._heart.addEventListener('click', this._likeElement);
      this._trash.addEventListener('click', this._removeElement);
      this._cardImage.addEventListener('click', () => this._handleClickImage(this._link, this._name));
      
  
      return this._card;
    }
  }
  
  export default Card;