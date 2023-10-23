import { ref, onMounted } from "vue";
import { getRandomName } from "@/api/getRandomName";

export const useRandomWord = () => {
  const word = ref("");
  const getRandomWord = async () => {
    try {
      const name = await getRandomName();
      word.value = name.toLocaleLowerCase();
    } catch (error) {
      console.log(error);
      word.value = "";
    }
  };

  onMounted(() => {
    getRandomWord();
  });

  return {
    word,
    getRandomWord,
  };
};
