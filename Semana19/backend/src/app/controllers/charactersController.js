import axios from 'axios';

let offset = 0;
const baseUrl = 'https://gateway.marvel.com/v1/public';
const apikey = 'fcd289c48c367e74e3c27a74253120b5';
const hash = '1c4d844c9aad7ce0084d1d6839ee7e0d';
const ts = '613222206';

class CharactersController {

  async getCharacters(request, response) {
    offset = request.query.offset;

    const url = `${baseUrl}/characters?apikey=${apikey}&hash=${hash}&ts=${ts}&limit=30&offset=${offset}`;

    const result = await axios.get(url);
    return response.json(result.data.data);

  }

  async getCharactersByName(request, response) {
    const name = request.query.name;
    offset = request.query.offset;

    const url = `${baseUrl}/characters?nameStartsWith=${name}&apikey=${apikey}&hash=${hash}&ts=${ts}&limit=30&offset=${offset}`;

    const result = await axios.get(url);
    return response.json(result.data.data);
  }

  async getCharacterById(request, response) {
    const id = request.query.id;

    const url = `${baseUrl}/characters/${id}?apikey=${apikey}&hash=${hash}&ts=${ts}`;

    const result = await axios.get(url);
    return response.json(result.data.data);
  }

}

export default new CharactersController();
