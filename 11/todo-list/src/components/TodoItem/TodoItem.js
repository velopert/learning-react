import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.done !== nextProps.done;
  }

  render() {
    const {done, children, onToggle, onRemove} = this.props;
    /* 위 코드에선 비구조화 할당을 통하여 this.props 안에 있는
       done, children, onToggle, onRemove 에 대한 레퍼런스를 만들어주었습니다. */
    return (
      <div className={cx('todo-item')} onClick={onToggle}>
        <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
        <div className={cx('text', { done })}>{children}</div>
        <div className={cx('delete')} onClick={(e) => {
          onRemove();
          e.stopPropagation();
          }
        }>[지우기]</div>
      </div>
    );
  }
}

export default TodoItem;
