import { computed, onMounted, ref } from "vue"
import { GameStatus, type randomWord } from "../interfaces"
import { dictionaryWordApi } from '../api/dictionaryWordApi';
import confetti from 'canvas-confetti';

export const useWordGame = () => {

    const word = ref<randomWord>();
    const gameStatus = ref<GameStatus>( GameStatus.Playing);
    const isLoading = computed(()=> word.value == null);

    const getValue = async (): Promise<randomWord> =>{
      const dictionaryWordApi0 = new dictionaryWordApi()
      const response = await dictionaryWordApi0.get();

      return{
        word: response.word,
        meanings: response.meanings
      }
    }

    const checkAnswer = (tryName: String) =>{
      const hasWon = word.value?.word === tryName;
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
      word.value = await getValue();
    });

    return{
      isLoading,
      word,
      checkAnswer,
    }
}
