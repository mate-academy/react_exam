export default class AuthorsService {
  constructor() {
    this.apiBase = 'http://my-json-server.typicode.com/mate-academy/literary-blog/';
  }

  getAuthors() {
    return this._getData('authors');
  }

  _getData(type) {
    return fetch(`${this.apiBase}${type}`)
      .then(res => res.json());
  }
}
