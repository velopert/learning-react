import React from 'react';

export default function asyncComponent(getComponent) {
  class AsyncComponent extends React.Component {
    static Component = null;

    state = { Component: AsyncComponent.Component };

    constructor(props) {
      super(props);
      if (AsyncComponent.Component) return;
      getComponent().then(({ default: Component }) => {
        AsyncComponent.Component = Component;
        this.setState({ Component });
      });
    }

    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }

  // 서버 사이드 렌더링 / 코드 스플리팅 충돌 해결을 위한 함수
  AsyncComponent.getComponent = () => {
    return getComponent().then(({ default: Component }) => {
      AsyncComponent.Component = Component;
    });
  }

  return AsyncComponent;
}
