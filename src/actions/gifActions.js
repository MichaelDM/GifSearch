import request from 'superagent';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC';

export const REQUEST_GIFS = 'REQUEST_GIFS';
export function requestGifs(term=null) {
  return function(dispatch) {
    request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`)
    .then(response => {
      dispatch({
        type: REQUEST_GIFS,
        payload: response
      });
    });
  }
}
