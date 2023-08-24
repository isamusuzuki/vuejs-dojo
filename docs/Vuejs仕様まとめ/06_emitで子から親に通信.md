# emit を使って子から親に値を渡す

作成日 2023/08/24

## 01. セットアップ関数の 2 つの引数について

[Composition API: setup() | Vue.js](https://ja.vuejs.org/api/composition-api-setup.html#composition-api-setup)

> `setup` 関数の第 1 引数は `props` です。`props` はリアクティブで、新しい props が渡されたら更新されます
>
> `setup` 関数に渡される第 2 引数は `context` です。 `context` は `setup` 内で便利と思われる他の値を公開します
>
> `context` オブジェクトは一般的な JavaScript オブジェクトです。すなわち、リアクティブではありません

```javascript
export default {
  setup(props, context) {
    // 属性 Attributes
    console.log(context.attrs)
    // スロット Slots
    console.log(context.slots)
    // イベントの発行 Emit Events
    console.log(context.emit)
    // パブリックプロパティの公開
    console.log(context.expose)
  },
}
```

## 02. 自分で書いたサンプルコード

```text
--src/
  `--components/
      |--copy2Parent.vue
      `--Parent.vue
```

copy2Parent.vue

```html
<template>
  <span
    style="text-decoration: underline; cursor: pointer"
    @click="copy"
    v-text="target"
  ></span>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      target: {
        type: String,
        required: true,
      },
    },
    setup(props, context) {
      const copy = () => {
        context.emit('childEvent', props.target)
      }

      return {
        copy,
      }
    },
  })
</script>
```

Parent.vue

```html
<template>
  <copy-2-parent target="男の子" @childEvent="setKeyword"></copy-2-parent>
  <copy-2-parent target="女の子" @childEvent="setKeyword"></copy-2-parent>
  <input
    class="input"
    type="text"
    placeholder="入力不可、選択のみ可"
    disabled
    v-model="keyword"
  />
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import Copy2Parent from './Copy2Parent.vue'

  export default defineComponent({
    components: {
      Copy2Parent,
    },
    setup() {
      const keyword = ref('')

      const setKeyword = (word: string) => {
        keyword.value = word
      }

      return {
        keyword,
        setKeyword,
      }
    },
  })
</script>
```
