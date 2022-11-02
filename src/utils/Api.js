export class Api {
  constructor({ baseUrl, options }) {
    this._baseUrl = baseUrl;
    this._options = options;
  }

  _request(url, options) {
    return fetch(url, options).then((res) => {
      return res.ok ? res.json() : Promise.reject({
        status: res.status,
        text: res.statusText,
      });
    });
  };
}
