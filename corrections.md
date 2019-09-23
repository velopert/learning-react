# 오탈자 및 개선사항

## 18.3.1.5 (pg.500)

페이지 상단 `connect` 함수의 `loadingPost` 와 `loadingUsers` 부분에 오탈자가 있습니다.

```diff
export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
-    loadingPost: loading.GET_POST,
-    loadingUsers: loading.GET_USERS
+    loadingPost: loading['sample/GET_POST'],
+    loadingUsers: loading['sample/GET_USERS']
  }),
  {
    getPost,
    getUsers
  }
)(SampleContainer);
```
