# vue-clipboard3 をインポートするとエラーが出る

作成日 2023/08/23、更新日 2023/08/24

## 01. vue-clipboard3 とは

下線部分をクリックすると、その文言がパソコンのクリップボードに格納されて、どこにでもペーストできるようにしたい

それを実現するために、vue-clipboard3 を利用する

[vue-clipboard3 - npm](https://www.npmjs.com/package/vue-clipboard3)

インストール => `install i -D vue-clipboard3`

## 02. 問題発生

```javascript
import useClipboard from 'vue-clipboard3'

const { toClipboard } = useClipboard()

const copy = async () => {
  await toClipboard(props.target)
}
```

1 行目の`'vue-clipboard3'`に赤い波線が登場して、以下のメッセージが表示される

```text
「現在のファイルは CommonJS モジュールであり、このインポートでは 'require' 呼び出しが生成されますが、
参照ファイルは ECMAScript モジュールであるため、'require' ではインポートできません。
代わりに動的な 'import("vue-clipboard3")' 呼び出しを記述することを検討してください。
このファイルを ECMAScript モジュールに変換するには、ファイル拡張子を '.mts' に変更するか、
フィールド '"type": "module"' を '/home/isamu/vuejs-dojo/package.json' に追加します。ts(1479)
```

## 03. 試行錯誤 1

このリポジトリの`package.json`に`"type": "module",` 行を追加してみる

すると、Webpack の設定ファイルが CommonJS 形式で書かれているため、npm スクリプトが動かなくなってしまう

```text
ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension
and '/home/isamu/vuejs-dojo/package.json' contains "type": "module".
To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
```

## 04. 試行錯誤 2

代わりに、`node_modules/vue-clipboard3/package.json` から `"type": "module",`行を削除してみたら、エラーが表示されなくなった

とりあえずこれでよしとする
