export interface RootObject {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  license: License
  sourceUrls: string[]
}

 interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonyms: unknown[] | null;
}

 interface Definition {
  definition: string
  synonyms: unknown[] | null;
  antonyms: unknown[] | null;
  example?: string
}

interface Phonetic {
  text: string
  audio: string
  sourceUrl: string
  license: License
}

interface License {
  name: string
  url: string
}
