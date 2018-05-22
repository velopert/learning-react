import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as counterActions from './modules/counter';
import * as postActions from './modules/post';

class App extends Component {

  cancelRequest = null

  handleCancel = () => {
    if(this.cancelRequest) {
      this.cancelRequest();
      this.cancelRequest = null;
    }
  }

  loadData = async () => {
    const { PostActions, number } = this.props;
    try {
      const p = PostActions.getPost(number);
      this.cancelRequest = p.cancel;
      const response = await p;
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.loadData();
    window.addEventListener('keyup', (e) => {
      if(e.key === 'Escape') {
        this.handleCancel();
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // 이전 number와 현재 number가 다르면 요청을 시작합니다
    if(this.props.number !== prevProps.number) {
      this.loadData();
    }
  }

  render() {
    const {CounterActions, number, post, error, loading} = this.props;

    return (
      <div>
        <h1>{number}</h1>
        { 
          (() => {
            if(loading)
              return (<h2>로딩중...</h2>);
            if(error) 
              return (<h2>오류 발생!</h2>)
            return (
              <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            )
          })()
        }
        <button onClick={CounterActions.increment}>+</button>
        <button onClick={CounterActions.decrement}>-</button>
      </div>
    );
  }

}

export default connect(
  (state) => ({
    number: state.counter,
    post: state.post.data,
    loading: state.pender.pending['GET_POST'],
    error: state.pender.failure['GET_POST']
  }), 
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(App);
