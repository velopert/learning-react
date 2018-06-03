import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';

const PostPage = () => {
  return (
    <PageTemplate>
      <PostInfo/>
      <PostBody/>
    </PageTemplate>
  );
};

export default PostPage;
