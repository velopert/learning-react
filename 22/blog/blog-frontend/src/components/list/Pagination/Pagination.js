import React from 'react';
import styles from './Pagination.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Pagination = ({page, lastPage, tag}) => {
  const createPagePath = (page) => {
    return tag ? `/tag/${tag}/${page}` : `/page/${page}`;
  }

  return (
    <div className={cx('pagination')}>
      <Button disabled={page === 1} to={createPagePath(page -1)}>
        이전 페이지
      </Button>
      <div className={cx('number')}>
        페이지 {page}
      </div>
      <Button disabled={page===lastPage} to={createPagePath(page+1)}>
        다음 페이지
      </Button>
    </div>
  );
};

export default Pagination;
