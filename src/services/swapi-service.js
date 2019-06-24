export default class SwapiService {

  async getResource(url) {
    const res = await fetch(` http://my-json-server.typicode.com/mate-academy/literary-blog/authors`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  async getAllAuthor() {
    const res = await this.getResource();
    return res;
  }
 }
