import React, { Component } from 'react';
import LoginModalContainer from 'containers/modal/LoginModalContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import { inform } from 'lib/shouldCancel';

class Base extends Component {
  initialize = () => {
    const { BaseActions } = this.props;
    if(localStorage.logged === "true") {
      BaseActions.tempLogin();
    }
    BaseActions.checkLogin();
  }


  componentDidMount() {
    this.initialize();
    inform();
  }

  render() {
    return (
      <div>
        <LoginModalContainer/>
        { /* 전역적으로 사용되는 컴포넌트들이 있다면
        여기서 렌더링합니다. */}
      </div>
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(Base);
