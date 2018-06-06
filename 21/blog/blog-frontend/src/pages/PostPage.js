import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import AskRemoveModalContainer from 'containers/modal/AskRemoveModalContainer';

import Post from 'containers/post/Post';


const PostPage = ({ match }) => {
  const { id } = match.params;
  return (
    <PageTemplate>
      <Post id={id}/>
      <AskRemoveModalContainer/>
    </PageTemplate>
  );
};


export default PostPage;
