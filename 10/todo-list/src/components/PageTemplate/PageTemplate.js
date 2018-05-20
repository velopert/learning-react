import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/* 페이지 템플릿을 위한 컴포넌트입니다. 페이지의 틀, 
  그리고 타이틀 / 콘텐츠 등의 속성이 설정되어 있습니다. */

const PageTemplate = ({children}) => {
  return (
    <div className={cx('page-template')}>
      <h1>일정 관리</h1>
      <div className={cx('content')}>
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;
