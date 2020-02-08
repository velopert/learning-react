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

## 22.4 (pg. 646)

ESModule 기능이 Node v12에서 정식 지원되지 않았는데, 잘못된 정보가 기재되었습니다. 따라서, pg 646의 **Node.js v12부터 ES Module 정식 지원** 참고 블록을 무시해주세요.

```

```
