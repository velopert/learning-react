import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// 인풋과 버튼이 함께 있는 컴포넌트입니다. 
/*
  value: 인풋 값
  onChange: 인풋 변경 이벤트
  onInsert: 추가버튼 클릭 이벤트
*/
const TodoInput = ({value, onChange, onInsert}) => {
  
  // 엔터키가 눌리면 onInsert 를 실행합니다.
  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      onInsert();
    }
  }

  return (
    <div className={cx('todo-input')}>
      <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
      <div className={cx('add-button')} onClick={onInsert}>추가</div>
    </div>
  );
};

export default TodoInput;
