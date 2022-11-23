import React from 'react';
import './App.css';

function App() {
  const name = '리액트';
  return (
    <>
      {/* 주석은 이렇게 작성합니다. */}
      <div
        className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성 할 수 있습니다.
      >
        {name}
      </div>
      // 하지만 이런 주석이나 /* 이런 주석은 페이지에 그대로 나타나게 됩니다. */
      <input />
    </>
  );
}

export default App;
