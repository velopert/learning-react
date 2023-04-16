import React from 'react';

// 문자열로 styled 의 인자로 전달
const MyInput = styled('input')`
  background: gray;
`;
// 아예 컴포넌트 형식의 값을 넣어줌
const StyledLink = styled(Link)`
  color: blue;
`;

const Sample = ({ style }) => {
  return <div style={style}>Sample</div>;
};
