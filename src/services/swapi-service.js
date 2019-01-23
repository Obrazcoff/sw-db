export default class SwApiService {
  _apiBase = 'https://swapi.co/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._apiBase}${url} , Received ${res.status}`,
      );
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource('/people/');
    return res.results;
  }

  getAppPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getResource('/planets/');
    return res.results;
  }

  getAppPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getResource('/starships/');
    return res.results;
  }

  getAppStarship(id) {
    return this.getResource(`/starships/${id}/`);
  }
}

const swapi = new SwApiService();

swapi.getAllPeople().then(people => {
  people.forEach(person => {
    console.log(person.name);
  });
});
