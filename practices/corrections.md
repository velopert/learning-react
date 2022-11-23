# 오탈자 및 개선사항

여기에 있는 내용은 개정판 6쇄 이상 기준입니다.
개정판 1~4쇄에 기준한 업데이트 사항은 다음 링크에서 확인하세요:

- [개정판-1쇄.md](https://github.com/velopert/learning-react/blob/master/_old_corrections/%EA%B0%9C%EC%A0%95%ED%8C%90-1%EC%87%84.md)
- [개정판-2쇄.md](https://github.com/velopert/learning-react/blob/master/_old_corrections/%EA%B0%9C%EC%A0%95%ED%8C%90-2%EC%87%84.md)
- [개정판-3쇄.md](https://github.com/velopert/learning-react/blob/master/_old_corrections/%EA%B0%9C%EC%A0%95%ED%8C%90-3%EC%87%84.md)
- [개정판-4쇄.md](https://github.com/velopert/learning-react/blob/master/_old_corrections/%EA%B0%9C%EC%A0%95%ED%8C%90-4%EC%87%84.md)
- [개정판-5쇄.md](https://github.com/velopert/learning-react/blob/master/_old_corrections/%EA%B0%9C%EC%A0%95%ED%8C%90-5%EC%87%84.md)

### 1.3.1 (pg.44 ~ pg.46) 내용 업데이트

Node.js 가 이제 v14 가 LTS 버전이고 곧 v16이 될 예정이여서 내용을 변경합니다.

1. pg.44 노트 부분 다음과 같이 교체

```
이 책에서는 Node.js LTS 버전인 14.x 버전을 사용합니다. LTS 버전은 장기적으로 안정적인 지원을 제공하는 버전을 의미합니다. LTS 버전은 매년 10월쯤에 바뀝니다. 여러분이 이 책을 읽는 시점의 LTS 버전을 사용해주세요.
```

2. pg. 45 nvm 버전 업데이트

nvm 설치 스크립트 교체

```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

nvm 버전 확인 교체

```
$ nvm --version
0.38.0
```

3. macOS yarn 설치 방법 변경

macOS에서는 이제 npm을 사용하여 yarn을 설치 할 수 있습니다. Homebrew 관련 내용을 다 지우고 다음과 같이 내용을 추가해주세요.

```
macOS에서는 npm의 글로벌 설치 기능을 통하여 yarn을 설치할 수 있습니다.

$ npm install --global yarn
```

## 2.1 (pg. 56 ~ pg. 58)

리액트 v17 부터 상단에 `import React from 'react';` 를 필수적으로 불러오지 않아도 됩니다.

1. App.js 상단의 `import React` 코드 제거.

```diff
- import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
```

2. 코드를 하나씩 이해해봅시다. 하단의 코드 제거

```javascript
import logo from "./logo.svg";
import "./App.css";
```

3. 설명 수정

```diff
- 이 코드는 리액트를 불러와서 ... 사용할 수 있는 것이죠.
+ 여기서 import 구문이 사용됐습니다. 이는 특정 파일을 불러오는 것을 의미합니다. 리액트로 만든 프로젝트의 자바스크립트 파일에서는 import 를 사용하여 다른 파일들을 불러와서 사용할 수 있습니다.
```

그 이후 내용은 pg. 58 "프로젝트 번들링과는 다릅니다." 까지는 그대로 유지

4. 내용 제거

```diff
- 리액트를 불러오는 코드 하단에는 ... 코드가 있습니다.
```

그 아래에 있는 `import logo`, `import './App.css` 코드 블록도 제거

### 책 전체에서 나오는 코드 업데이트

`import React from 'react';` 가 더 이상 필수가 아니기 때문에 책에 있는 모든 코드에서 React를 불러오는 코드를 지워야됩니다.
그리고 만약에 Fragment 나 다른 Hook을 불러온다면 다음과 같이 해야 합니다.

pg. 63

```javascript
import { Fragment } from "react";
```

pg. 85

```javascript
import { Component } from "react";
```

pg. 190

```javascript
import { useState } from "react";
```

반면, `React.memo` 를 사용하는 코드가 있다면 React를 불러와야 합니다.

```javascript
import React from 'react';

(...)

export default React.memo(...)
```

또는 다음과 같이 사용할 수도 있습니다.

```javascript
import { memo } from 'react';

(...)

export default memo(...)
```

### 책 전체에서 나오는 설명 변경

"함수형 컴포넌트" 라는 용어를 "함수 컴포넌트" 로 모두 바꿉니다.

예전에는 Functional Component라고 불렀지만 이제는 Function Component라고 부르기 때문입니다.

### 3.2.2 ES6 화살표 함수 예제 오탈자 (pg. 89)

두번째 화살표 함수를 사용하는 `setTimeout`에 괄호가 하나 더 들어가있어서 제거합니다.

```javascript
setTimeout(() => {
  console.log("hello world");
}, 1000);
```

### 6.3.1 key 설정 (pg. 163)

`articleList` 예시에 `map` 사용하는 부분에서 소괄호가 하나 더 추가되어야 합니다.

```javascript
const articleList = articles.map(article => (
  <Article
    title={article.title}
    writer={article.writer}
    key={article.id}
  />
));
```


### 9.2 (pg.224) node-sass 대신 sass 사용

node-sass 가 deprecated 되었습니다. 이제 node-sass 대신에 sass를 설치해야 합니다.

```
$ yarn add sass
```

### 9.2.2 sass-loader 설정 방식 변경 pg.230

sass-loader 설정 방식이 바뀌었습니다. importLoaders가 3으로 바뀌고 sourceMap 조건도 바뀌었습니다.

`webpack.config.js - sassRegex 찾기`

```javascript
{
  test: sassRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 3,
      sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
    },
    'sass-loader'
  ),
  sideEffects: true,
},
```

그 아래에, concat을 통해서 커스터마이징된 sass-loader 설정 넣는 부분의 코드

```javascript
{
  test: sassRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders({
    importLoaders: 3,
    sourceMap: isEnvProduction
      ? shouldUseSourceMap
      : isEnvDevelopment,
  }).concat({
    loader: require.resolve("sass-loader"),
    options: {
      sassOptions: {
        includePaths: [paths.appSrc + "/styles"],
      },
    },
  }),
  sideEffects: true,
},
```

pg. 231 설명 변경

```diff
- 그럴 때는 sass-loader의 data 옵션을 설정하면됩니다. data 옵션을 설정하면
+ 그럴 때는 sass-loader의 additionalData 옵션을 설정하면됩니다. additionalData 옵션을 설정하면
```

```diff
- 조금 전 수정했던 sass-loader의 옵션에 있는 data 필드를 다음과 같이 설정해 보세요.
+ 조금 전 수정했던 sass-loader의 옵션에서 additionalData 필드를 다음과 같이 설정해 보세요.
```

기존에 `prependData` 대신 `additionalData` 필드 설정 (pg. 232)

```javascript
{
  test: sassRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders({
    importLoaders: 3,
    sourceMap: isEnvProduction
      ? shouldUseSourceMap
      : isEnvDevelopment,
  }).concat({
    loader: require.resolve("sass-loader"),
    options: {
      sassOptions: {
        includePaths: [paths.appSrc + "/styles"],
      },
      additionalData: "@import 'utils';",
    },
  }),
  sideEffects: true,
}
```

### 10.1 (pg.255) node-sass 대신 sass 사용

위와 같은 이유로 node-sass 대신 sass 를 설치하도록 설치 스크립트를 변경합니다.

```
$ cd todo-app
$ yarn add sass classnames react-icons
```

### 10.3.3.2 리액트 개발자 도구 스크린샷 및 설명 변경 (pg. 276)

```
설치하고 나서 크롬 개발자 도구를 열면 개발자 도구 탭에 components가 나타납니다. 이를 클릭하세요. 그리고 좌측에서 TodoInsert를 선택하면, 다음과 같이 인풋을 수정했을 때 Hooks의 State 부분에도 똑같은 값이 잘 들어가는 것을 확인할 수 있습니다.
```

**그림 10-16 리액트 개발자 도구**
![](https://i.imgur.com/iiDI9ck.png)

### 11.2 리액트 성능 측정 관련 스크린샷 및 설명 변경 (pg.292~294, 299, 310)

리액트 성능 측정 방법이 바뀌었습니다. 내용이 많아서, 따로 [PDF](https://github.com/velopert/learning-react/blob/master/update-pdf/7%EC%87%84.pdf)에 정리했습니다.



### 20.3.5 업데이트 (pg.559)

지난 6쇄때 덜 업데이트 된 부분이 있습니다. asset-manifest.json 의 필드에 `runtime~main.js` 에서 물결 `~`를 대쉬 `-`로 바꿔주어야 합니다.

```diff
-  "runtime~main.js": "/static/js/runtime-main.c5541365.js",
-  "runtime~main.js.map": "/static/js/runtime-main.c5541365.js.map",
+  "runtime-main.js": "/static/js/runtime-main.c5541365.js",
+  "runtime-main.js.map": "/static/js/runtime-main.c5541365.js.map",
```


### 24.3.2.2 로그인 상태 유지하기 (pg. 800)

맨 하단에 다음 내용을 추가합니다.

```
localStorage에 데이터를 따로 저장하지 않아도 /api/check API를 호출하여 로그인 상태를 유지할 수도 있습니다. 하지만, 우리가 여기서 localStorage를 따로 사용을 해준 이유는, 사용자가 이 API를 요청하고 응답하기 전에도 로그인 상태를 보여주기 위함입니다.
```

