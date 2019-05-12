import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState(''); // input 상태
  const onChange = e => setValue(e.target.value); // input 변경 이벤트
  const onSubmit = e => {
    // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
    // 이를 방지하기 위하여 이 함수를 호출합니다.
    e.preventDefault();
    // onInsert 호출 후 input 값 초기화
    onInsert(value);
    setValue('');
  };
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
