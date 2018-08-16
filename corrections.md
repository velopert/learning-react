# 오탈자 및 개선사항

## 1쇄

### pg.27 [(Isssue #17](https://github.com/velopert/learning-react/issues/17))

- "author": "velopert" 부분 뒤에 쉼표가 하나 빠짐

수정 전:
```
{
  "title": "Hello",
  "contents": "Hello World",
  "author": "velopert",
  "likes": 1
}
```

수정 후:

```
{
  "title": "Hello",
  "contents": "Hello World",
  "author": "velopert",
  "likes": 1
}
```

### pg.32 [(Issue #11)](https://github.com/velopert/learning-react/issues/11)
- 3번째 줄

수정 전: 요소 개수가 **몇 백 개, 몇 천 개 단위로 많다면**

수정 후: 요소 개수가 **몇백 개, 몇천 개** 단위로 많다면

### pg.34 [(Issue #11)](https://github.com/velopert/learning-react/issues/11)
- 2번째 줄

수정 전: **다시 한 번** 강조하면

수정 후: **다시한번** 강조하면

### pg.41 [(Issue #18)](https://github.com/velopert/learning-react/issues/18)

- react-beautify 확장 프로그램은 게시중단되었으므로 제거처리

### pg.44 [(Issue #19)](https://github.com/velopert/learning-react/issues/19)

- 노트 하단에 yarn start 대신 npm start 가 들어가있음

수정 전:
```
$ cd hello-react
$ npm start
```

수정 후:
```
$ cd hello-react
$ yarn start
```

### pg.50[(Issue #11)](https://github.com/velopert/learning-react/issues/11)
- 노트 부분

수정 전: **구 버전**

수정 후: **구버전**

### pg.73 [(Issue #2)](https://github.com/velopert/learning-react/issues/2) ✅
- App.js 코드 6번째 줄
- 코드상에서는 React 이나 스크린샷에는 react

수정 전: `<MyComponent name="React"/>`

수정 후: `<MyComponent name="react"/>`

### pg.81 [(Issue #14)](https://github.com/velopert/learning-react/issues/14)
수정 전: **3.4.4**절에서 작성한 버튼 코드를 다시 한 번 살펴봅시다

수정 후: **3.3.4**절에서 작성한 버튼 코드를 다시 한 번 살펴봅시다

### pg.149 [(Issue #21)](https://github.com/velopert/learning-react/issues/21)

- 페이지 하단 설명 부분 함수명이 잘못됨

수정 전: 버튼을 렌더링하고, 누를 때마다 **handleRandomizeColor** 메서드가 호출되게 이벤트를 설정하며

수정 후: 버튼을 렌더링하고, 누를 때마다 **handleClick** 메서드가 호출되게 이벤트를 설정하며

### pg. 193 ([Issue #4](https://github.com/velopert/learning-react/issues/4)) ✅
- webpack.config.dev.js sass-loader 설정 두번째 줄
- css 여야 하는데 scss 라고 적힘

수정 전: `test: /\.scss$/,`

수정 후: `test: /\.scss$/,`

### pg. 195 ([Issue #12](https://github.com/velopert/learning-react/issues/12))

- 10.1.2.5 메인 스타일 설정 파일 이름 잘못됨

수정 전: `src/styles/main.css`

수정 후: `src/styles/main.scss`

### pg. 199 ([Issue #5](https://github.com/velopert/learning-react/issues/5)) ✅
- PageTemplate.js 파일 경로
- 경로에 PageTemplate/ 경로가 빠져있음

수정 전: `src/components/PageTemplate.js`

수정 후 : `src/components/PageTemplate/PageTemplate.js`

### pg. 292 ([Issue #8](https://github.com/velopert/learning-react/issues/8)) ✅
- object1 이라고 적어야하는데 object 로 되어있음

수정 전:

```javascript
let object2 = {
  ...object,
  d: {
    ...object.d,
    f: {
      ...object.d.f,
      h: 10
    }
  }
}
```

수정 후
```javascript
let object2 = {
  ...object1,
  d: {
    ...object1.d,
    f: {
      ...object1.d.f,
      h: 10
    }
  }
}
```

### pg.310 [(Issue #13)](https://github.com/velopert/learning-react/issues/13) 🚨

- 아이템 토글 / 삭제시 id 로 index 를 조회하는 부분이 누락됨

변경 내역 Commit [a3ada1e](https://github.com/velopert/learning-react/commit/a3ada1e5f96aba0c3e069d732952f4dcd0a5d1ad) 참고

### pg.339 [(Issue #9)](https://github.com/velopert/learning-react/issues/9)
- 파일 이름에 경로가 빠짐

수정 전: `src/post.js`

수정 후: `src/modules/post.js`

### pg.340  [(Issue #9)](https://github.com/velopert/learning-react/issues/9)
- 파일 이름이 경로가 빠짐

수정 전: `src/index.js`

수정 후: `src/modules/index.js`

### pg.363 [(Issue #15)](https://github.com/velopert/learning-react/issues/15) ☑️

이 부분은 2쇄 때 전체적으로 수정이 될 부분인데, NODE_PATH 를 따로 설정하지 않고, .env 파일을 루트경로로 만들어서 NODE_PATH=src 라고 적어도 똑같이 작동합니다.

20.1.5.1 에서도 이와 같은 방식으로 진행합니다.

NODE_PATH 를 명령어로 따로 설정해주면 yarn eject 하게 됐을 때 따로 코드를 수정해줘야하는 단점이 있습니다.

### pg.411 [(Issue 20)](https://github.com/velopert/learning-react/issues/20) ☑️

- 이 부분은 2쇄에서 추가 할 내용

윈도우즈의 경우 linebreak-style 오류가 발생 할 수 있으니, 해당 검사를 끄거나

```
module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-unused-vars': 1,
    'comma-dangle': 0,
    'eol-last': 0,
    'no-console': 0,
    'linebreak-style': ['error', 'windows']
  }
};
```

VSCode 설정에서 

```
"files.eol": "\n",
```

를 설정하도록 안내


### pg. 445 ✅
- 맨 위 코드 .env 2번째 줄
- mongoose 버전 업데이트로 인하여 포트 포함 필요

수정 전: `MONGO_URI=mongodb://localhost/blog`

수정 후: `MONGO_URI=mongodb://localost:27017/blog`

### pg. 446
- src/index.js 코드 8번째 줄
- mongoose 버전 업데이트로 인하여 useNewUrlParser 옵션 추가

수정 전: `mongoose.connect(mongoURI);`

수정 후: `mongoose.connect(mongoURI, { useNewUrlParser: true });`

### pg.575 ([Issue #1](https://github.com/velopert/learning-react/issues/1)) ✅
- 맨 마지막 줄
- 괄호가 하나 빠짐

수정 전: `.set('lastPage', parseInt(lastPage, 10);`

수정 후: `.set('lastPage', parseInt(lastPage, 10));`


