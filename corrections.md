# 오탈자 및 개선사항

여기에 있는 내용은 개정판 2쇄 이상 기준입니다.
개정판 1쇄에 기준한 업데이트 사항은 다음 링크에서 확인하세요.

[개정판-1쇄.md](https://github.com/velopert/learning-react/blob/master/_old_corrections/%EA%B0%9C%EC%A0%95%ED%8C%90-1%EC%87%84.md)

## 3.4.1 (pg. 105)

컴포넌트가 상속받고 있는데, "상속하는" 이라고 잘못 설명하여 이를 수정합니다.

```diff
이는 컴포넌트 생성자의 메서드인데요. 클래스형 컴포넌트에서 ...
+ 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속하고 있는 리액트의...
- 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속받고 있는 리액트의...
```

## 11.6 (pg. 302)

헷갈릴 수 있는 설명이 있어서 이를 수정합니다.

```diff
- 앞에서 useState를 사용해 만든 onToggle 함수를 다시 확인해볼까요?
+ 앞에서 useState를 사용해 만든 todos 배열과 setTodos 함수를 사용하는 onToggle 함수를 다시 확인해볼까요?
```

## 12.1.5 (pg. 320)

immer의 예시 코드에 오탈자가 있어 이를 수정합니다.

**수정 전:**

```javascript
const update = draft => {
  draft.value = 2;
};
```

**수정 후:**

```javascript
const update = produce(draft => {
  draft.value = 2;
});
```

## 14.1.3 (pg. 359)

예시 코드에서 `increase`가 `increment`로 잘못 들어가서 이를 모두 `increase`로 변경합니다.

```javascript
async function runTasks() {
  try {
    // try/catch 구문을 사용하여 에러를 처리합니다.
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
```

## 22.9.2 (pg.669 - 672)

기존 `joi` 모듈이 deprecated 되고, `@hapi/joi` 로 이름이 바뀌었습니다. 따라서 설치 방법도 바뀌고, 사용 방법도 조금 바뀌었습니다. 기존에 `Joi.validate` 가 `schema.validate` 로 바뀝니다.

설치 방법 변경:

```diff
- yarn add joi
+ yarn add @hapi/joi
```

**posts.ctrl.js** - import 하는 부분과 write 함수에서 validate 부분 코드 변경

```diff
- import Joi from 'joi';
+ import Joi from '@hapi/joi';
```

```diff
// 검증하고 나서 검증 실패인 경우 에러 처리
- const result = Joi.validate(ctx.request.body, schema);
+ const result = schema.validate(ctx.request.body);
```

**posts.ctrl.js** - update 부분도 변경

```diff
- const result = Joi.validate(ctx.request.body, schema);
+ const result = schema.validate(ctx.request.body);
```

## 23.3.1 (pg.691)

Joi 버전이 업데이트됨에 따라 코드도 업데이트 합니다.

```diff
+ import Joi from '@hapi/joi';
- import Joi from 'joi';
import User from '../../models/user';
```

```diff
+ const result = schema.validate(ctx.request.body);
- const result = Joi.validate(ctx.request.body, schema);
```

## 22.4 (pg. 646)

ESModule 기능이 Node v12에서 정식 지원되지 않았는데, 잘못된 정보가 기재되었습니다. 따라서, pg 646의 **Node.js v12부터 ES Module 정식 지원** 참고 블록을 무시해주세요.

## 26.2.2 (pg. 857 - 858)

`username`을 `match.params` 에서 조회해야 하는데 `query`에서 조회를 하는 실수가 있었습니다. `match.params` 에서 불러오도록 수정합니다.

```diff
- const PostListContainer = ({ location }) => {
+ const PostListContainer = ({ location, match }) => {
```

```diff
  useEffect(() => {
+    const { username } = match.params;
+    const { tag, page } = qs.parse(location.search, {
-    const { tag, username, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ tag, username, page }));
  }, [dispatch, location.search]);
```

## 26.2.4 (pg. 869 - 870)

`username`을 `match.params` 에서 조회해야 하는데 `query`에서 조회를 하는 실수가 있었습니다. `match.params` 에서 불러오도록 수정합니다.

```diff
+const PaginationContainer = ({ location, match }) => {
-const PaginationContainer = ({ location }) => {
```

```diff
+  const { username } = match.params;

  // page가 없으면 1을 기본값으로 사용
+  const { tag, page = 1 } = qs.parse(location.search, {
-  const { tag, username, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
```
