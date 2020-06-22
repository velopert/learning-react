# 오탈자 및 개선사항

여기에 있는 내용은 개정판 3쇄 이상 기준입니다.
개정판 1~2쇄에 기준한 업데이트 사항은 다음 링크에서 확인하세요: 

- [개정판-1쇄.md](https://github.com/velopert/learning-react/blob/master/_old_corrections/%EA%B0%9C%EC%A0%95%ED%8C%90-1%EC%87%84.md)
- [개정판-2쇄.md](https://github.com/velopert/learning-react/blob/master/_old_corrections/%EA%B0%9C%EC%A0%95%ED%8C%90-2%EC%87%84.md)


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

