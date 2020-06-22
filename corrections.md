# 오탈자 및 개선사항

여기에 있는 내용은 개정판 3쇄 이상 기준입니다.
개정판 1~2쇄에 기준한 업데이트 사항은 다음 링크에서 확인하세요: 

- [개정판-1쇄.md](https://github.com/velopert/learning-react/blob/master/_old_corrections/%EA%B0%9C%EC%A0%95%ED%8C%90-1%EC%87%84.md)
- [개정판-2쇄.md](https://github.com/velopert/learning-react/blob/master/_old_corrections/%EA%B0%9C%EC%A0%95%ED%8C%90-2%EC%87%84.md)

## 2.3.2 업데이트 (pg.41)

3월 11일부터 create-react-app 으로 새로 만든 프로젝트에는 다음과 같이 `StrictMode`가 적용되어있습니다. `StrictMode`는 리액트 프로젝트에서 레거시 기능을 사용하지 않도록 검사를 해줍니다. 자세한 내용은 https://ko.reactjs.org/docs/strict-mode.html 에서 참고 가능합니다.


```diff
ReactDOM.render(
+  <React.StrictMode>
    <App />
+  </React.StrictMode>,
  document.getElementById('root')
);
```


### 참고 박스 추가:

> **React.StrictMode는 무엇인가요?**
> `React.StrictMode`는 리액트 프로젝트에서 리액트의 레거시 기능들을 사용하지 못하게 하는 기능입니다. 이를 사용하면 문자열 `ref`, `componentWillMount` 등 나중에는 완전히 사라지게 될 옛날 기능들을 사용했을 때 경고를 출력합니다. 
>
> 이 책이 작성될 시점 (2019년 8월)에는 해당 옵션이 기본적으로 적용되어있지 않았었기 때문에, 앞으로 이 책에 나타나게 될 index.js에 `React.StrictMode`가 적용되어있지 않으니 참고하세요.

## 7.3.2 내용 업데이트

### 참고 박스 추가:

> **React.StrictMode가 적용되어 있으면 일부 라이브사이클이 두번씩 호출됩니다.**
>
> 2.3.2에서 언급했었던 `React.StrictMode`가 적용되어 있으면 일부 라이브사이클이 두 번씩 호출됩니다. 개발 환경에서만 두 번씩 호출이 되며 프로덕션 환경에서는 정상적으로 호출되니 안심하세요. 만약에 책에서 나오는 스크린샷과 동일한 결과물을 보시고 싶다면, index.js를 열어서 `React.StrictMode`를 제거하고 `App` 컴포넌트만 렌더링 하시면 됩니다.

## 13.4 오탈자

설명에서는 `/profiles` 라고 적혀있지만 실제 코드에서는 `/profile` 를 사용하고 있습니다. 따라서, 기존의 설명들을 모두 수정합니다.

1. pg.335
```diff
- 파라미터 예시: /profiles/velopert
+ 파라미터 예시: /profile/velopert
```

2. pg. 336
```diff
- 이번에 사용할 path 규칙에는 /profiles/:username이라고 넣어 주면 됩니다.
+ 이번에 사용할 path 규칙에는 /profile/:username이라고 넣어 주면 됩니다.
```

## 13.6.4 오탈자 (pg. 351)

불필요한 active 키워드가 포함되어있습니다.

```diff
- <NavLink activeStyle={activeStyle} to="/profiles/velopert" active>
+ <NavLink activeStyle={activeStyle} to="/profiles/velopert">
```

## 18.3.2.1 오탈자 (pg. 503)

주석 결과가 잘못 표기되어있음

```diff
generator.next();
// 제너레이터 함수
// { value: 2, done: false }
generator.next();
-// 제너레이터 함수
+// function*
// { value: 2, done: false }
```

## 20.3.2 (pg.546 ~ 552) 업데이트

CRA 업데이트 됨에 따라 paths 부분이 변경되어 이에 따라 SSR 전용 웹팩 환경설정 코드를 변경해야합니다.

1. pg. 546 ~ 547 `config/paths.js`

```diff
(...)
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveModule(resolveApp, 'src/index'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  appJsConfig: resolveApp('jsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveModule(resolveApp, 'src/setupTests'),
  proxySetup: resolveApp('src/setupProxy.js'),
  appNodeModules: resolveApp('node_modules'),
-  publicUrl: getPublicUrl(resolveApp('package.json')),
-  servedPath: getServedPath(resolveApp('package.json')),
  ssrIndexJs: resolveApp('src/index.server.js'), // 서버 사이드 렌더링 엔트리
  ssrBuild: resolveApp('dist'), // 웹팩 처리 후 저장 경로
+  publicUrlOrPath,
};
```


2. pg.547 `config/webpack.config.sever.js`

```diff
  output: {
    path: paths.ssrBuild,
    filename: 'server.js',
    chunkFilename: 'js/[name].chunk.js',
-    publicPath: paths.servedPath,
+    publicPath: paths.publicUrlOrPath
  }
```

동일한 수정이 pg. 548, pg.551 에도 필요합니다.

3. pg.552 `config.webpack.config.server.js`

```diff
- const publicUrl = paths.servedPath.slice(0, -1);
- const env = getClientEnvironment(publicUrl)
+ const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));
```


## 26.2.3 코드 수정 (pg. 864)

업데이트 할 때 `sanitizeOption`이 빠져서 태그가 모두 사라지는 현상이 발생합니다. 이를 고치기 위하여 update API에도 `sanitizeHtml` 을 사용 할 때 `sanitizeOption` 을 두번째 파라미터로 넣어주어야 합니다.

```diff
-   nextData.body = sanitizeHtml(nextData.body);
+   nextData.body = sanitizeHtml(nextData.body, sanitizeOption);
```

