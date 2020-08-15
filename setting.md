# 리액트 설정

## 리액트 프로젝트 구성 만들기

`npx create-react-app mondy-clone-react-app --typescript`

## 프로젝트 시작하기

yarn start

## eslint && prettier && airBnb 구성하기

`npm i -D prettier eslint-plugin-prettier eslint-config-prettier`
`npm i -D eslint-config-airbnb-base eslint-plugin-import`

### .prettierrc.js

```javascript
{
  "printWidth": 100, // 화면 폭
  "tabWidth": 2, // 탭간격, 스페이스 설정시 2칸 띄어쓰기
  "singleQuote": true, // ' 사용
  "trailingComma": "all", // , 자동 붙이기
  "bracketSpacing": true, // [1,2] -> [ 1, 2 ]
  "semi": true, // ; 사용
  "useTabs": false, // tab키 사용. false 추천 == space 대체
  "arrowParens": "avoid", // (x) => x를 x => x로 변환
  "endOfLine": "lf"
}
```

### .eslintrc.js

```javascript
{
    "extends": ["airbnb-base", "plugin:prettier/recommended"]
}
```

### vscode settings.json

```javascript
{
  "workbench.iconTheme": "vscode-icons",
  "extensions.ignoreRecommendations": true,
  "workbench.colorTheme": "Visual Studio 2019 Dark",
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features",
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "auto-close-tag.excludedTags": [
    "area",
    "base",
    "br",
    "col",
    "command",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ],
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "prettier.disableLanguages": ["js"],
  "files.autoSave": "onFocusChange",
  "workbench.settings.useSplitJSON": true
}

```
