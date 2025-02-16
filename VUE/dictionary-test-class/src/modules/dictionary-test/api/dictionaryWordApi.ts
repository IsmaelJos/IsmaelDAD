import axios from 'axios'
import type { RootObject } from '../interfaces'

export class dictionaryWordApi {

  async get(randomWord:string) {
    console.log('https://api.dictionaryapi.dev/api/v2/entries/en/'+randomWord);
    const response = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/'+randomWord);

    return response.data as RootObject;
  }
}
