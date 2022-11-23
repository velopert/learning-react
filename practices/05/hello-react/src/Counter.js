import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0
  };
  render() {
    const { number, fixedNumber } = this.state; // state 를 조회 할 때에는 this.state 로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick 을 통하여 버튼이 클릭됐을 때 호출 할 함수를 지정합니다.
          onClick={() => {
            // this.setState(prevState => {
            //   return {
            //     number: prevState.number + 1
            //   };
            // });
            // // 위 코드와 아래 코드는 완전히 똑같은 기능을 하는 코드입니다.
            // // 아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
            // this.setState(prevState => ({
            //   number: prevState.number + 1
            // }));
            this.setState(
              {
                number: number + 1
              },
              () => {
                console.log('방금 setState 가 호출되었습니다.');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
