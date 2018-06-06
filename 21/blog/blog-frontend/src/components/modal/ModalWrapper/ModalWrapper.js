import React, { Component } from 'react';
import styles from './ModalWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class ModalWrapper extends Component {
  state = {
    animate: false
  }

  startAnimation = () => {
    // animate 값을 true로 설정 후
    this.setState({
      animate: true
    });
    // 250ms 이후 다시 false로 설정
    setTimeout(() => {
      this.setState({
        animate: false
      });
    }, 250)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.visible !== this.props.visible) {
      this.startAnimation();
    }
  }
  

  render() {
    const { children, visible } = this.props;
    const { animate } = this.state;

    // visible 값과 animate 값이 둘 다 false일 때만
    // null을 리턴합니다.
    if(!visible && !animate) return null;
    
    // 상태에 따라 애니메이션 설정
    const animation = animate && (visible ? 'enter' : 'leave');


    return (
      <div>
        <div className={cx('gray-background', animation)}/>
        <div className={cx('modal-wrapper')}>
          <div className={cx('modal', animation)}>
            { children } 
          </div>
        </div>
      </div>
    );
  }
}

export default ModalWrapper;
