import axios from 'axios'
import type { randomWord } from '../interfaces'

export class dictionaryWordApi {
  wordFromList = () => {
    const words = [
      'abandon',
      'abbreviate',
      'abdomen',
      'ablaze',
      'collab',
      'dirty',
      'disable',
      'disc',
      'graffiti',
      'grain',
      'inexpert',
      'psychic',
      'public',
      'rooster',
      'tax',
      'unrelated',
      'warp',
      'barmen',
      'calm',
      'calories',
      'coagulated',
      'egg',
      'convict',
      'swearword',
      'encyclopedia',
      'unpleasant',
      'marketing',
      'tough',
      'recession',
      'bottom',
      'chaos',
      'humanity',
      'chair',
      'gain',
      'diet',
      'expect',
      'twist',
      'cause',
      'resist',
      'related',
      'admire',
      'emotion',
      'compose',
    ]
    const word = words[Math.floor(Math.random() * words.length)]
    return word
  }

  async get() {
    const responce = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/'+this.wordFromList)
    return responce.data as randomWord
  }
}
