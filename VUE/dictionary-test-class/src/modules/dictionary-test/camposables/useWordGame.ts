import { computed, onMounted, ref } from 'vue'
import { GameStatus } from '../interfaces'
import { dictionaryWordApi } from '../api/dictionaryWordApi'
import confetti from 'canvas-confetti'

export const useWordGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing)
  const isLoading = computed(() => definitions.value.length === 0)
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
  const wordApi = ref<string>(words[Math.floor(Math.random() * words.length)])

  const definitions = ref<string[]>([])

  // Realizar la petición a la API
  const fetchDefinitions = async () => {
    const response = await new dictionaryWordApi().get(wordApi.value)
    const meanings = response.data[0]?.meanings || []
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    definitions.value = meanings.flatMap((meaning: any) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      meaning.definitions.map((def: any) => def.definition),
    )
  }

  // GAME

  const wordDisplay = ref<string>('')
  const userGuess = ref<string>('')
  const feedback = ref<string | null>(null)
  const feedbackColor = ref<string>('red')
  const failCount = ref<number>(0)

  const updateWordDisplay = () => {
    wordDisplay.value = '_ '.repeat(wordApi.value.length)
  }

  const checkGuess = () => {
    if (userGuess.value.trim().toLowerCase() === wordApi.value.toLowerCase()) {
      feedback.value = 'Congratulations! You guessed the word!'
      feedbackColor.value = 'green'
      gameStatus.value = GameStatus.Won
      confetti({
        particleCount: 200,
      angle: 90,
      spread: 90,
      origin: { x: 0.5, y: 0.7 },
      shapes: ['star', 'square'],
      colors: ['#ff0000', '#00ff00', '#0000ff'],
      gravity: 0.5,
      drift: 0,
      scalar: 0.8,
      })
    } else {
      feedback.value = 'Wrong guess. Try again!'
      feedbackColor.value = 'red'
      failCount.value++
    }

    // Dejar en blanco despues preguntar
    userGuess.value = ''
  }

  onMounted(async () => {
    updateWordDisplay()
    fetchDefinitions()
    console.log(definitions.value)
  })

  return {
    //GAME
    checkGuess,
    userGuess,
    feedback,
    feedbackColor,
    wordDisplay,
    failCount,

    //FUNCTION
    gameStatus,
    isLoading,
    wordApi,
    definitions,
  }
}
