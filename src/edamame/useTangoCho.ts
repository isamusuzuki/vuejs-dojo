import { computed, reactive, ref } from 'vue'

interface IWord {
    japanese: string
    english: string
}

interface State {
    words: Array<IWord>
}

export default () => {
    const state = reactive<State>({
        words: [
            {
                japanese: 'コアラ',
                english: 'Koala',
            },
            {
                japanese: 'ラッコ',
                english: 'Sea Otter',
            },
        ],
    })
    const newJapanese = ref('')
    const newEnglish = ref('')
    const buttonDisabled = computed(
        () => newJapanese.value === '' || newEnglish.value === ''
    )
    const addNewWord = () => {
        state.words.push({
            japanese: newJapanese.value, 
            english: newEnglish.value
        })
        newJapanese.value = ''
        newEnglish.value = ''
    }
    const words = computed(() => state.words)

    return {
        newJapanese,
        newEnglish,
        buttonDisabled,
        addNewWord,
        words,
    }
}