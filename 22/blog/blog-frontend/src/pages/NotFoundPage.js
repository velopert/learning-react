import React from 'react';
import NotFound from 'components/common/NotFound';

const NotFoundPage = ({history, staticContext}) => {
  // staticContext는 서버쪽에서만 존재합니다.
  if (staticContext) {
    staticContext.isNotFound = true;
  }
  return (
    <NotFound onGoBack={history.goBack}/>
  );
};

export default NotFoundPage;
