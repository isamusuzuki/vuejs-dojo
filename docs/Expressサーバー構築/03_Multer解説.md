# Multer 解説

作成日 2023/08/29

## 01. Multer とは

`multipart/form-data`形式の受信データを扱うミドルウェア

公式リポジトリ => [expressjs/multer: Node.js middleware for handling `multipart/form-data`.](https://github.com/expressjs/multer)

インストール => `npm i multer`

## 02. サンプルコード

```javascript
const express = require('express')
const multer = require('multer')
const upload = multer({dest: 'temp/'})

const app = express()

app.post('/api/ingen/upload', upload.single('uploadFile'), (req, res) =>{
    res.json({success: true, message: `${req.file.originalname}のアップロードが完了しました`})
})
```

tempフォルダには、ランダムな名前でファイル名が生成されている

```text
vuejs-dojo/
    `--temp/
        |--30cab1880d8d691ff83cdfdec7dd701a
        `--332340d007a2a0e3fb338f969c1a582c
```

## 03. ファイル情報の取得

`req.file`は、下記のキーバリューを持つ JSON オブジェクトとなっている

| キー         | 解説                                                        |
| ------------ | ----------------------------------------------------------- |
| fieldname    | HTML フォームで指定された名前                               |
| originalname | アップロードしたファイルのファイル名                        |
| name         | 勝手に変更されたファイル名                                  |
| encoding     | ファイルのエンコードタイプ                                  |
| mimetype     | ファイルの MIME タイプ                                      |
| path         | サーバー側に保存されたファイルのパス                        |
| extension    | ファイルの拡張子                                            |
| size         | ファイルサイズ(byte)                                        |

`req.body` には、フォームのテキスト情報が格納されている

## 04. アップロードしたファイル名と同じファイル名で保存させる

multerのdiskStorageを使う

```javascript
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'temp/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage })
```
