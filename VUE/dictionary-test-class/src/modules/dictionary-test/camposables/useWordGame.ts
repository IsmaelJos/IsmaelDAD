import { computed, onMounted, ref } from "vue"
import { GameStatus, type RandomWord} from "../interfaces"
import { dictionaryWordApi } from '../api/dictionaryWordApi';
import confetti from 'canvas-confetti';

export const useWordGame = () => {

    const wordSelected = ref<RandomWord[]>([]);
    const gameStatus = ref<GameStatus>( GameStatus.Playing);
    const isLoading = computed(()=> wordSelected.value == null);

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
            'compose'
          ]
    const wordApi = words[Math.floor(Math.random() * words.length)]

    const getValue = async (): Promise<RandomWord[]> =>{

      const response = await new dictionaryWordApi().get(wordApi);

      return [{
        word: wordApi,
        meanings: response.meanings.map(m => {return m.definitions.map(d => {return d.definition})})
      }]

    }

    const checkAnswer = (tryName: string) =>{
      const hasWon = wordApi === tryName;
      if(hasWon){
        gameStatus.value = GameStatus.Won;
        confetti({
            particleCount: 300,
            spread: 150,
            origin: { y: 0.6 },
        });
        return;
      }
      gameStatus.value = GameStatus.Lost;
    }

    onMounted( async () =>{
      wordSelected.value = await getValue();
      console.log(wordSelected.value)
    });

    return{
      isLoading,
      wordSelected,
      checkAnswer
    }
}
