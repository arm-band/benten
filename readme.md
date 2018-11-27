# Benten

## Abstract

自分用のスライド制作用テンプレートです。Kiribi_Ususamaからフォークしています。

Scss, ejs, gulp使用。

## How to use?

使い方

### Preparement

事前に以下の準備が必要です。

- node.js(7.2.1以上)
    - npm: 以下のライブラリを使用します(主なもののみ記載)
        - browser-sync: 2.18.13
        - gulp: 4.0.0
        - gulp-ejs: 3.0.1
        - gulp-sass: 3.1.0
        - gulp-autoprefixer: 4.1.0
        - jquery: 3.2.1
        - jquery.easing: 1.4.1
        - reveal.js: 3.6.0
        - font-awesome: 4.7.0

### Using

1. `git clone https://github.com/arm-band/benten.git`、またはBentenのGithubリポジトリからダウンロード
2. `npm i -D`(または`npm install --save-dev`)
3. `npm start`(`npm i -D`したファイルの再配置+初期設定画面生成・表示+初期設定完了後、`gulp init`実行)
    - このコマンドで生成したディレクトリやpackage-lock.json等は`npm run biwa`(琵琶)で削除できます
4. 2回目以降は`npm test`でプレビューを実行

## Functions1

gulpで処理されるもの

- ejs → htmlへの変換(`/src/ejs/*.ejs`→`/dist/*.html`)
    - 自動生成
- Scss → cssへの変換(`/src/scss/*.scss`→`/dist/css/*.css`)
    - 自動生成
        - minifyされたものを生成
    - 自動でプレフィックスを付与
        - 基本最新2バージョン
        - `iOS >= 10.0`
        - `Android >= 5.0`
- 画像の圧縮(`/src/img/*`→`/dist/img/*`)
    - 自動生成

## Settings

- `config.yml`
    - `sitename`: スライド名。titleタグに使います。
    - `description`: `<meta description="">`に記述される説明
    - `mode`: スライドとして使用するか、pdfとして印刷するかのモード切替です(下記2択)
        - `slide`: `print/pdf.css`を読み込まず、スライドとして使用します
        - `print`: `print/pdf.css`を読み込み、pdf印刷用とします
    - `css`: 読み込むcssファイルのファイル名。拡張子不要
- `commonvar.yml`
    - 色、ナビゲーションバーの高さなど、基本的な情報をjson形式で記述
    - このjsonからscssの各所で使用している変数の元となる`/src/base/_var.scss`が生成される
    - ※既定で記述されているものはscssやejsで使用しているため、消さないこと
        - `main-color`: scssの他、`/src/ejs/partial/head.ejs`の`meta`タグ、`theme-color`属性の指定で使用

## Release Notes

- 2018/11/27 ver.4.1.0
    - mdファイルの簡易改行コード判定を追加
- 2018/11/27 ver.4.0.0
    - `gulp`のバージョンを3.9.1から4へアップデート
    - `npm`でダウンロードするパッケージを整理
    - 設定ファイルをjsonからymlに変更
    - 全体を整理
- 2018/10/10 ver.3.0.1
    - npm scriptsで`revearl.js/lib/font`の中身を上手くコピーできていなかった不具合を解消
- 2018/7/29 ver.3.0.0
    - 印刷モードを追加。`variable.json`の値で印刷用cssを読み込むか否か切り替えできるようにしました
        - 印刷時はURLの後ろ(`/#/`より前)に`?print-pdf`を付けてください。
- 2018/5/30 ver.2.7.7
    - 初版