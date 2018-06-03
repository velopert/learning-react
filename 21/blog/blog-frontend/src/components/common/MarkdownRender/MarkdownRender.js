import React, { Component } from 'react';
import styles from './MarkdownRender.scss';
import classNames from 'classnames/bind';

import marked from 'marked';

// prism 관련 코드 불러오기
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
// 지원할 코드 형식들을 불러옵니다
// http://prismjs.com/#languages-list 참조
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-javascript.min.js'
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-css.min.js';


const cx = classNames.bind(styles);

class MarkdownRender extends Component {
  state = {
    html: ''
  }

  renderMarkdown = () => {
    const { markdown } = this.props;
   // 마크다운이 존재하지 않는다면 공백처리
   if(!markdown) {
      this.setState({ html : '' });
      return;
    }
    this.setState({
      html: marked(markdown, {
        breaks: true, // 일반 엔터로 새 줄 입력
        sanitize: true // 마크다운 내부 html 무시
      })
    });
  }

  constructor(props) {
    super(props);
    const { markdown } = props;
    // 서버사이드 렌더링에서도 마크다운 처리가 되도록 constructor 쪽에서도 구현합니다.
    this.state = {
      html: markdown ? marked(props.markdown, { breaks: true, sanitize: true }) : ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // markdown 값이 변경되면 renderMarkdown을 호출합니다.
    if(prevProps.markdown !== this.props.markdown) {
      this.renderMarkdown();
    }
    // state가 바뀌면 코드 하이라이팅
    if(prevState.html !== this.state.html) {
      Prism.highlightAll();
    }
  }

  
  render() {
    const { html } = this.state;

    // React 에서 html 을 렌더링 하려면 객체를 만들어서 내부에
    // __html 값을 설정해야합니다.
    const markup = {
      __html: html
    };

    // 그리고, dangerouslySetInnerHTML 값에 해당 객체를 넣어주면 됩니다.
    return (
      <div className={cx('markdown-render')} dangerouslySetInnerHTML={markup}/>
    );
  }
}

export default MarkdownRender;
