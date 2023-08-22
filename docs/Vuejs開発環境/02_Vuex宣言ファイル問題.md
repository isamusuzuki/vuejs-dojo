# Vuex の宣言ファイルが見つからない問題

作成日 2023/08/17

## 01. 問題発生

vuex に赤い波線が表示されて、「モジュール 'vuex' の宣言ファイルが見つかりませんでした。'node_modules/vuex/dist/vuex.cjs.js' は暗黙的に 'any' 型になります。」というメッセージが表示される

```javascript
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
```

インポートした Store も型が any になってしまい、InjectionKey に引数として与えられなくなる

### 01a. 追加情報

2021 年にはじめて Vuex 4 に挑戦したときには、この問題は発生していない

そのときのバージョンは `4.0.2` で、現在は `4.1.0`

```json
{
  "vuex": "^4.0.2",
  "vuex": "^4.1.0"
}
```

## 02. 解決方法

node_modules/vuex/package.json を開いて自分で 4 行目の types キーバリューを書き足す

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

## 03. 参照サイト

[https://github.com/vuejs/vuex/issues/2223](https://github.com/vuejs/vuex/issues/2223)

> it seem vuex not maintain anymore\
> you can manual change file package.json in path node_modules\vuex\package.json\
> and add this

[https://github.com/vuejs/create-vue/issues/291](https://github.com/vuejs/create-vue/issues/291)

> I'm using `https://github.com/ds300/patch-package` to apply the fix for vuex and vuei18n.
>
> As it's an issue with vuex, I'm closing the issue here.

=> Vuex がもうメンテされていないということが本当の問題であって、だとすると、状態管理モジュールの新しいデファクトスタンダードを探す必要がある
