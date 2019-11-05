# fragment-shader-boilerplate

## 必須環境

- [Node10以上](https://nodejs.org/ja/)
- yarn


## npmが初めての方

`$ npm install -g yarn`を実行してください

## プロジェクトの起動方法

```shell
$ git clone https://github.com/ArakiTakaki/fragment-shader-boilerplate
$ cd fragment-shader-boilerplate
$ yarn install
$ yarn start
$ open http://localhost:1234
```

## 成果物のアップロード方法

1. `$ yarn build`
2. distに成果物が生成される
3. 中身をすべて所定のサーバーへアップロードする。

## フラグメントシェーダーを編集したい場合

`./src/scripts/shaders/fragment/default.frag`を編集する。

### 最初からあるuniform一覧

| name       | type  |
|------------|-------|
| resolution | vec2  |
| mouse      | vec2  |
| time       | float |


### uniformを追加したい場合

1. `./src/scripts/objects/base.js`を編集する
2. 初期設定の場合`15行`あたりに`uniforms`のオブジェクトに追記を行う。
3. `32行`のupdateUniformにアップデートさせるための数値を入れる。(uniformの数値が`resolution`のように固定の場合不要)
    - 毎フレーム更新されるためインクリメントなどを行うと毎フレームインクリメントされるようになる

`厳格に記述するのであればresolutionもwindowがリサイズごとに変更させるほうが良い`

## ディレクトリ構成

```
├── package.json
├── src
│   ├── index.html
│   └── scripts
│       ├── constants
│       │   └── DomElements.js
│       ├── entry.js
│       ├── lib
│       │   └── resize.js
│       ├──objects 
│       │   └── base.js // 描画するデータの基本設定
│       └── shaders
│           ├── fragment // fragment shader の格納部
│           │   └── default.frag
│           └── vertex // vertex shader の格納部
│               └── default.vert
└── yarn.lock
```


