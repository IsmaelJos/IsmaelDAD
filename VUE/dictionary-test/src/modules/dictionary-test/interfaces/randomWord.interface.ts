
export interface randomWord {
  word: string;
//  phonetic: string;
//  phonetics: Phonetic[];
  meanings: Meaning[];
//  license: License;
//  sourceUrls: string[];
}

export interface Meaning {
//  partOfSpeech: string;
  definitions: Definition[];
//  synonyms: string[];
//  antonyms: any[];
}

export interface Definition {
  definition: string;
//  synonyms: any[];
//  antonyms: any[];
//  example?: string;
}
/*
interface Phonetic {
  text: string;
  audio: string;
  sourceUrl: string;
  license: License;
}

interface License {
  name: string;
  url: string;
}
*/
