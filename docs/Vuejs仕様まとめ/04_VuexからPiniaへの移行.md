# Vuex から Pinia への移行

作成日 2023/08/24

## 01. Vuex の後継の Pinia とは

紹介記事 => [Vue.js Pinia を使って状態管理(データの共有)を行ってみよう](https://reffect.co.jp/vue/vue-pinia/)

> Vue.js では Global State Management ライブラリとして Vuex が有名ですが Vuex の後継として新たに Pinia という Store ライブラリが登場し Vue.js で新しくプロジェクトを作成する場合は Pinia を利用することが推奨されています。\
> ネット上には Vuex に関する記事が豊富に存在すると思いますがこれから Vue.js を学習するのであれば Vuex は気にせず Pinia を利用してください。

公式サイト => [Pinia | The intuitive store for Vue.js](https://pinia.vuejs.org/)

公式ドキュメント => [Introduction](https://pinia.vuejs.org/introduction.html)

## 02. サンプルコード

stores/counter.js

```javascript
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
  },
})
```

ストアを利用するコンポーネントファイル

```html
<script setup>
  import { useCounterStore } from './stores/counter'

  const counter = useCounterStore()

  counter.count++

  counter.increment()
</script>

<template>
  <div>Current Count: {{ counter.count }}</div>
</template>
```

main.ts

```javascript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
```

### 03. Vuex との違い

- `mutations` はもう存在しない。しばしば極端に冗長であった
- TypeScript をサポートするための複雑なラッパーを作成する必要はもうない
- ファンクションをインジェクトして、インポートして、それを呼び出す魔法の呪文はもうない
- 動的に store を追加する必要はもうない。すべてデフォルトで動的
- ネストされたモジュール構造はもうない
- 名前空間を持ったモジュールはもうない

### マイグレーションガイドを読む

[Migrating from Vuex ≤4 | Pinia](https://pinia.vuejs.org/cookbook/migration-vuex.html)

- `state`を関数に変更
- `state`と同じ名前を返す`getter`は削除。`store`インスタンスにあるすべての`state`にアクセスできるようになった
- `rootState`,`rootGetters`を使っている場合は、直接他のストアをインポートしている形に変更
- すべての`actions`から、最初の引数の`context`を削除。`this`でアクセス可能
- `mutations`は、`actions`に書き換える。その時、最初の引数の `state` を削除。`this`でアクセス可能
