# Vue.js の開発環境を構築する

まっさらな状態から開発環境を構築したときの作業メモ

作成日 2023/08/10

## 00. Node.jsのインストール

最新のLTSをインストールするために Nodesource を使う

[https://github.com/nodesource/distributions](https://github.com/nodesource/distributions)

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - &&\
sudo apt-get install -y nodejs

node -v
# => v18.17.0
npm -v
# => 9.6.7
npx -v
# => 9.6.7

npm list -g --depth=0
# /usr/lib
# ├── corepack@0.18.0
# └── npm@9.6.7
```

## 01. 新規プロジェクト作成

```bash
# 空のリポジトリをクローンする
git clone git@github.com:isamusuzuki/vuejs-dojo.git
cd ~/vuejs-dojo

# package.json ファイルを生成する
npm init -y
```

## 02. TypeScript 導入

※ `npm i -D {name}` は、`npm install --save-dev {name}` の短縮形

```bash
npm i -D typescript
npx tsc --init
# => tsconfig.json ファイルが生成される
```

### tsconfig.json の設定例

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2015",
    "moduleResolution": "Node16",
    "sourceMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitReturns": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts", "src/**/*.vue"]
}
```

## 03. ESLint 導入

```bash
npm i -D eslint
npm i -D @eslint/create-config
npx eslint --init
# => インタラクティブなセットアップが始まる
# => 回答が終わるとモジュールの追加インストールが始まり、
# => .eslintrc.json ファイルが生成される
```

### ESLint セットアップの回答例

```text
? How would you like to use ESLint?
  To check syntax only
> To check syntax and find problems
  To check syntax, find problems, and enforce code style

? What type of modules does your project use?
> JavaScript modules (import/export)
  CommonJS (require/exports)
  Non of these

? Which framework does your project use?
  React
> Vue.js
  None of these

? Does your project use TypeScript?
  No
> Yes

? Where does your code run?
> Browser
> Node

? What format do you want your config file to be in?
  JavaScript
  YAML
> JSON

? Would you like to install them now?
  No
> Yes

? Which package manager do you want to user?
> npm
  yarn
  pnpm
```

## 04. Webpack 導入

```bash
npm i -D webpack webpack-cli webpack-dev-server
npm i -D ts-loader
npm i -D css-loader style-loader
```

## 05. Vue.js 導入

```bash
npm i -D vue
npm i -D vue-loader
npm i -D @vue/compiler-sfc
```

※ SFC = Single File Components 単一ファイルコンポーネント
