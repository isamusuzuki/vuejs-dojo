# ref と reactive の違い

作成日 2023/08/24、更新日 2023/08/28

## 01. 仕様まとめ

- `ref` は、Object でないプリミティブな値をリアクティブにする
- `reactive` は、Object をリアクティブにする
- リアクティブにした Object の一部の値を使いたいときは、`toRef` を使う

## 02. サンプルコード

```javascript
import { reactive, toRef } from 'vue'

type StateType = {
    selectedFilename: string
    uploadFile: File | null
}

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget
}

export useExcelUpload = () => {
    const state = reactive<StateType>({
        selectedFilename: '',
        uploadFile: null,
    })

    const selectedFilename = toRef(state, 'selectedFilename')

    const fileChanged = (event: HTMLInputEvent) => {
        const files: FileList | null = event.target.files
        if (files && files.length > 0) {
            state.uploadFile = files[0]
            state.selectedFilename = files[0].name
        }
    }

    const fileDropped = (event: DragEvent) => {
        store.commit('closeDragging')
        if (event.dataTransfer) {
            const files: FileList = event.dataTransfer.files
            if (files.length > 0) {
                state.uploadFile = files[0]
                state.selectedFilename = files[0].name
            }
        }
    }

    return {
        selectedFilename,
        fileChanged,
        fileDropped,
    }
}
```

## 03. ref に型注釈を書きたい場合

```javascript
import { ref } from 'vue'
import type { Ref } from 'vue'

const targetFile: Ref<File | null> = ref(null)
```
