
import {localStorageConst} from "../const/const";
const BASE_URL = "https://api.diploma.grave.nomoredomains.icu";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`>>> Ошибка: ${ res.status }`)
}

export const signup = ({name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name, email, password }),
  }).then(checkResponse);
};

export const signin = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        localStorage.setItem("email", email);
      }

      return data;
    });
};
export const signOut = () => {
	return fetch(`${BASE_URL}/logout`, {
			method: "GET",
			credentials: "include",
			headers: {
					"Content-Type": "application/json",
					"Accept": "application/json",
			}, 
	})
	.then(checkResponse);

}

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  }).then(checkResponse);
};
export const getUser = () => {
		return fetch(`${BASE_URL}/users/me`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				'Authorization': 'Bearer ' + localStorage.getItem(localStorageConst.jwt),
			},
		}).then(checkResponse);
	};

export const updateUser = ({name, email}) =>{
		return fetch(`${BASE_URL}/users/me`, {
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				'Authorization': 'Bearer ' + localStorage.getItem(localStorageConst.jwt),
			},
			body: JSON.stringify({
				name: name,
				email: email,
			})
		})
		.then(checkResponse)
	}

export const getSaveMovies = () => {
		return fetch(`${BASE_URL}/movies`, {
			method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
				'Authorization': 'Bearer ' + localStorage.getItem(localStorageConst.jwt),
      },
		})
		.then(checkResponse)
	}

export const	addMovie = (movie) => {
	return fetch(`${BASE_URL}/movies`, {
		method: 'POST',
		credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
			'Authorization': 'Bearer ' + localStorage.getItem(localStorageConst.jwt),
    }, 
		body: JSON.stringify({
			country:  movie.country || ' ',
			director: movie.director,
			duration: movie.duration,
			year: movie.year,
			description: movie.description,
			trailerLink: movie.trailerLink,
			movieId: movie.id,
			nameRU: movie.nameRU,
			nameEN: movie.nameEN,
			image: `https://api.nomoreparties.co${movie.image.url}`,
			thumbnail: `https://api.nomoreparties.co${movie.image.url}`
		})
	})
	.then(checkResponse)
}

export const	deleteMovie = (id) => {
	return fetch(`${BASE_URL}/movies/${id}`, {
		method: 'DELETE',
		headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
			'Authorization': 'Bearer ' + localStorage.getItem(localStorageConst.jwt),
    }, 
	})
	.then(checkResponse)
}