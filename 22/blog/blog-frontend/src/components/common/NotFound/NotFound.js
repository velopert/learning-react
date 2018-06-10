import React from 'react';
import styles from './NotFound.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const NotFound = ({onGoBack}) => (
  <div className={cx('not-found')}>
    <h2>
      존재하지 않는 페이지입니다.
    </h2>
    <Button onClick={onGoBack} theme="outline">
      돌아가기
    </Button>
  </div>
);

export default NotFound;
