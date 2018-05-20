import React, { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /* 위 코드에는 비구조화 할당(destructuring assignment) 문법이 사용되었습니다.
      다음 코드와 같은 의미입니다:
      const scrollHeight = this.box.scrollHeight;
      const clientHeight = this.box.cliengHeight;
    */
    this.box.scrollTop = scrollHeight - clientHeight;
  }

  
  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    }

    return (
      <div 
        style={style}
        ref={(ref) => { this.box=ref }}>
        <div style={innerStyle}/>
      </div>
    );
  }
}

export default ScrollBox;
