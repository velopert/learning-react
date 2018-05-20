import React from 'react';

const Hello = ({name}) => {
  return (
    <div>Hello {name}</div>
  )
}

/* 또는 이런 식으로 { }를 생략할 수도 있습니다.
const Hello = ({name}) => (
  <div>Hello {name}</div>
)
*/

export default Hello;
