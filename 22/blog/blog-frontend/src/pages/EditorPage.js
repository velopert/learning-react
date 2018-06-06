import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeaderContainer from 'containers/editor/EditorHeaderContainer';
import EditorPaneContainer from 'containers/editor/EditorPaneContainer';
import PreviewPaneContainer from 'containers/editor/PreviewPaneContainer';

const EditorPage = () => {
  return (
    <EditorTemplate
      header={<EditorHeaderContainer/>}
      editor={<EditorPaneContainer/>}
      preview={<PreviewPaneContainer/>}
    />
  );
};

export default EditorPage;
