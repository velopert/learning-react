import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import AskRemoveModalContainer from 'containers/modal/AskRemoveModalContainer';

import Post from 'containers/post/Post';
import * as postActions from 'store/modules/post';
import { bindActionCreators } from 'redux';


const PostPage = ({ match }) => {
  const { id } = match.params;
  return (
    <PageTemplate>
      <Post id={id}/>
      <AskRemoveModalContainer/>
    </PageTemplate>
  );
};


PostPage.preload = (dispatch, params) => {
  const { id } = params;
  const PostActions = bindActionCreators(postActions, dispatch);
  return PostActions.getPost(id);
}

export default PostPage;
