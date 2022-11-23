import React from 'react';

const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map(name => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
