import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

// 전달 받은 className, onClick 등의 값들이 rest 안에 들어 있습니다.
// JSX에서 ...을 사용하면 내부에 있는 값들을 props로 넣어줍니다.
const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({
  children, to, onClick, disabled, theme = 'default',
}) => {
  // to 값이 존재하면 Link를 사용하고, 그렇지 않으면 div를 사용합니다.
  // 비활성화되어 있는 버튼인 경우에도 div가 사용됩니다.
  const Element = (to && !disabled) ? Link : Div;

  // 비활성화되면 onClick은 실행되지 않습니다
  // disabled 값이 true가 되면 className에 disabled가 추가됩니다.
  return (
    <Element 
      to={to} 
      className={cx('button', theme, { disabled })} 
      onClick={disabled ? () => null : onClick}>
      {children}
    </Element>
  )
}
  
export default Button;