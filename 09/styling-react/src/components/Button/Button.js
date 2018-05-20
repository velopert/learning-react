import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({children, ...rest}) => {
  return (
    <div className={cx('button')} {...rest}>
      {children}
    </div>
  );
};

export default Button;
