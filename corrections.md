# 오탈자 및 개선사항

## 1쇄
### pg.73 [(Issue #2)](https://github.com/velopert/learning-react/issues/2)
- App.js 코드 6번째 줄
- 코드상에서는 React 이나 스크린샷에는 react

수정 전: `<MyComponent name="React"/>`

수정 후: `<MyComponent name="react"/>`

반영 날짜: 2018-08-07

### pg. 193 ([Issue #4](https://github.com/velopert/learning-react/issues/4))
- webpack.config.dev.js sass-loader 설정 두번째 줄
- css 여야 하는데 scss 라고 적힘

수정 전: `test: /\.scss$/,`

수정 후: `test: /\.scss$/,`

### pg. 199 ([Issue #5](https://github.com/velopert/learning-react/issues/5))
- PageTemplate.js 파일 경로
- 경로에 PageTemplate/ 경로가 빠져있음

수정 전: `src/components/PageTemplate.js`

수정 후 : `src/components/PageTemplate/PageTemplate.js`

### pg. 292 ([Issue #8](https://github.com/velopert/learning-react/issues/8))
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

### pg. 445
- 맨 위 코드 .env 2번째 줄
- mongoose 버전 업데이트로 인하여 포트 포함 필요

수정 전: `MONGO_URI=mongodb://localhost/blog`

수정 후: `MONGO_URI=mongodb://localost:27017/blog`

### pg. 446
- src/index.js 코드 8번째 줄
- mongoose 버전 업데이트로 인하여 useNewUrlParser 옵션 추가

수정 전: `mongoose.connect(mongoURI);`

수정 후: `mongoose.connect(mongoURI, { useNewUrlParser: true });`

### pg.575 ([Issue #1](https://github.com/velopert/learning-react/issues/1))
- 맨 마지막 줄
- 괄호가 하나 빠짐

수정 전: `.set('lastPage', parseInt(lastPage, 10);`

수정 후: `.set('lastPage', parseInt(lastPage, 10));`


