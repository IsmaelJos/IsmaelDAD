import { computed, onMounted, ref } from "vue"
import type { randomWord } from "../interfaces"

export const useWordGame = () => {

    const words = ref<randomWord[]>([]);

    const isLoading = computed(()=> words.value.length === 0);

    onMounted( async () =>{

    });

    return{
      isLoading,

    }
}
