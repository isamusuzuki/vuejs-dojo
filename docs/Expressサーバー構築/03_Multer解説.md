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
const upload = multer({ dest: 'uploads/' })

const app = express()

app.post('/upload', upload.single('file'), function (req, res) {
    res.send(req.file.originalname + 'ファイルのアップロードが完了しました。')
})
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

`req.body` には、フォームのその他のテキスト情報が格納されている

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
