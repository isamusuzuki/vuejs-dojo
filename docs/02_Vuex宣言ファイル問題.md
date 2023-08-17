# Vuexの宣言ファイルが見つからない問題

作成日 2023/08/17

## 問題発生

vuexに赤い波線が表示されて、「モジュール 'vuex' の宣言ファイルが見つかりませんでした。'/home/isamu/vuejs-dojo/node_modules/vuex/dist/vuex.cjs.js' は暗黙的に 'any' 型になります。」というメッセージが表示される

```javascript
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
```

インポートしたStoreも型がanyになってしまって、InjectionKeyに引数として与えられなくなる

## 解決方法

node_modules/vuex/package.json を開いて自分で4行目を書き足す

```json
{
  "exports": {
    ".": {
      "module": "./dist/vuex.esm-bundler.js",
      "require": "./dist/vuex.cjs.js",
      "import": "./dist/vuex.mjs",
      "types": "./types/index.d.ts"
    },
}
```

## 参照サイト

[https://github.com/vuejs/vuex/issues/2223](https://github.com/vuejs/vuex/issues/2223)
