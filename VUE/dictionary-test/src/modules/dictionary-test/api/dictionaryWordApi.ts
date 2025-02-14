import axios from 'axios'
import type { RootObject } from '../interfaces'

export class dictionaryWordApi {
    words = [
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
      'compose'
    ]
    word = this.words[Math.floor(Math.random() * this.words.length)]
    // return word


  async get() {
    console.log('https://api.dictionaryapi.dev/api/v2/entries/en/'+this.word)
    const response = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/'+this.word)

    return response.data as RootObject
  }
}
