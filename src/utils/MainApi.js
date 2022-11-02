import {Api} from './Api';
import { API_MAIN_URL, API_OPTIONS } from '../constants';

class MainApi extends Api {
  constructor({ baseUrl, options }) {
    super({ baseUrl, options });
  }

  _request(url, options) {
    return super._request(url, options);
  }

  signUp(data) {
    return this._request(
      `${this._baseUrl}/signup`,
      {
        ...this._options,
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  }

  signIn(data) {
    return this._request(
      `${this._baseUrl}/signin`,
      {
        ...this._options,
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  }

  getCurrentUser() {
    return this._request(
      `${this._baseUrl}/users/me`,
      {
        ...this._options,
        method: 'GET',
      }
    );
  }
};

export const mainApi = new MainApi({
  baseUrl: API_MAIN_URL,
  options: API_OPTIONS,
});
