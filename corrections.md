# 오탈자 및 개선사항

여기에 있는 내용은 개정판 5쇄 이상 기준입니다.
개정판 1~4쇄에 기준한 업데이트 사항은 다음 링크에서 확인하세요:

- [개정판-1쇄.md](https://github.com/velopert/learning-react/blob/master/_old_corrections/%EA%B0%9C%EC%A0%95%ED%8C%90-1%EC%87%84.md)
- [개정판-2쇄.md](https://github.com/velopert/learning-react/blob/master/_old_corrections/%EA%B0%9C%EC%A0%95%ED%8C%90-2%EC%87%84.md)
- [개정판-3쇄.md](https://github.com/velopert/learning-react/blob/master/_old_corrections/%EA%B0%9C%EC%A0%95%ED%8C%90-3%EC%87%84.md)
- [개정판-4쇄.md](https://github.com/velopert/learning-react/blob/master/_old_corrections/%EA%B0%9C%EC%A0%95%ED%8C%90-4%EC%87%84.md)

### 8.2.3 (pg. 199) 개선

기존의 설명에서 사용되던 코드가 적절하지 않아 코드를 변경합니다.

Info.js - useEffect

```javascript
useEffect(() => {
  console.log('effect');
  return () => {
    console.log('unmount');
  };
}, []);
```

> 'unmount' 부분 볼드 처리 부탁합니다.

### 9.2 업데이트 (pg. 224)

node-sass 최신 버전이 현재 create-react-app에서 작동하지 않습니다. 따라서, 구버전을 설치해야 합니다.

```diff
- $ yarn add node-sass
+ $ yarn add node-sass@4.14.1
```

문구 추가: 2021년 1월 기준, node-sass의 최신 버전이 create-react-app에서 지원되고 있지 않습니다. 따라서, 구 버전을 사용해 주세요.

### 10.1 업데이트 (pg. 255)

```diff
- $ yarn add node-sass classnames react-icons
+ $ yarn add node-sass@4.14.1 classnames react-icons
```

### 20.3.5 업데이트 (pg.559, pg.560)

`runtime~main.js` 가 `runtime-main.js` 로 변경됐습니다.

pg.559 에서 asset-maniefst.json 파일을 다음과 같이 변경합니다.

```diff
-  "runtime~main.js": "/static/js/runtime~main.c5541365.js",
-  "runtime~main.js.map": "/static/js/runtime~main.c5541365.js.map",
+  "runtime~main.js": "/static/js/runtime-main.c5541365.js",
+  "runtime~main.js.map": "/static/js/runtime-main.c5541365.js.map",
```

pg.560에서 index.server.js 를 다음과 같이 변경합니다.

```diff
- <script src="${manifest.files['runtime~main.js']}"></script>
+ <script src="${manifest.files['runtime-main.js']}"></script>
```

### 24.2.2 오탈자 (pg. 800)

localStorage 에서 데이터 조회 후 `JSON.parse` 를 해야 하는데 이 부분이 생략됐습니다.

```diff
- store.dispatch(tempSetUser(user));
+ store.dispatch(tempSetUser(JSON.parse(user)));
```
