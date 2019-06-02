import React, { Component } from 'react';

class HistorySample extends Component {
  // 뒤로가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  // 홈으로 이동
  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    console.log(this.props);
    // 이걸 설정하고 나면 페이지에 변화가 생기려고 할 때 마다 정말 나갈거냐고 질문
    this.unblock = this.props.history.block('정말 떠나실건가요?');
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트 되면, 그만 물음
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
