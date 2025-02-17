import { computed, onMounted, ref } from 'vue'
import { GameStatus } from '../interfaces'
import { dictionaryWordApi } from '../api/dictionaryWordApi'
import confetti from 'canvas-confetti'

export const useWordGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing)
  const isLoading = computed(() => definitions.value == null)
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
      meaning.definitions.map((def: any) => def.definition),
    )
  }

  const checkAnswer = (tryName: string) => {
    const hasWon = wordApi.value === tryName
    if (hasWon) {
      gameStatus.value = GameStatus.Won
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 },
      })
      return
    }
    gameStatus.value = GameStatus.Lost
  }

  // GAME

  const wordDisplay = ref<string>('')
  const userGuess = ref<string>('')
  const feedback = ref<string | null>(null)
  const feedbackColor = ref<string>('red')

  const updateWordDisplay = () => {
    wordDisplay.value = '_ '.repeat(wordApi.value.length)
  }

  const checkGuess = () => {
    if (userGuess.value.trim().toLowerCase() === wordApi.value.toLowerCase()) {
      feedback.value = 'Congratulations! You guessed the word!'
      feedbackColor.value = 'green'
      gameStatus.value = GameStatus.Won
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 },
      })
    } else {
      feedback.value = 'Wrong guess. Try again!'
      feedbackColor.value = 'red'
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

    //FUNCTION
    gameStatus,
    isLoading,
    wordApi,
    checkAnswer,
    definitions,
  }
}
