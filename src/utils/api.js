const baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-65';
const headers = {
  authorization: '76bd6af4-1eb8-427e-97cd-2bc6cdc45941',
  'Content-Type': 'application/json'
}

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  // Работа с карточками
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authorization
      }
    }).then(this._getResponseData);
  }

  setCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({name, link})
    }).then(this._getResponseData);
  }

  changeLikeCardStatus(cardId, likeStatus) {
    const likeAction = likeStatus ? 'PUT' : 'DELETE';
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: likeAction,
      headers: {
        authorization: this._authorization
      }
    }).then(this._getResponseData);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
    .then(response => {
      if(!response.ok) {
        return Promise.reject(`Ошибка: ${response.status}`);
      } else {
        return Promise.resolve();
      }
    })
  }

  // Работа с пользователем
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authorization
      }
    }).then(this._getResponseData);
  }

  setUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({name, about})
    }).then(this._getResponseData);
  }

  setUserAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({avatar})
    }).then(this._getResponseData);
  }
}

const api = new Api({baseUrl,  headers});

export default api;
