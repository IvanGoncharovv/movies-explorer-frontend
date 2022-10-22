class MoviesApi {
    constructor({url, headers}) {
        this._url = url
        this._headers = headers
    }

    _resStatus(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMoviesData() {
        return fetch(`${this._url}`, {
            headers: this.headers,
        })
        .then(this._resStatus);
    }

}

const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-type': 'application/json'
    }
  })

export default  moviesApi;