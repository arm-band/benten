# Benten

## Abstract

自分用のスライド制作用テンプレートです。Kiribi_Ususamaからフォークしています。

Scss, ejs, gulp使用。

## How to use?

1. `git clone https://github.com/arm-band/benten.git`、またはBentenのGithubリポジトリからダウンロード
2. `npm i -D`(または`npm install --save-dev`)
3. `npm start`(`npm i -D`したファイルの再配置+初期設定画面生成・表示+初期設定完了後、`gulp init`実行)
    - このコマンドで生成したディレクトリやpackage-lock.json等は`npm run biwa`(琵琶)で削除できます
4. 2回目以降は`npm test`でプレビューを実行

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

- 2019/6/21 ver.4.1.4
    - `npm`パッケージを整理
- 2019/5/22 ver.4.1.3
    - `npm`パッケージを整理
- 2019/5/14 ver.4.1.2
    - Scss調整
- 2018/12/12 ver.4.1.1
    - gulpのバージョン指定方法を変更
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