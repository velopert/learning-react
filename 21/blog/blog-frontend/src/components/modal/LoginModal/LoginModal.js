import React from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';

const cx = classNames.bind(styles);

const LoginModal = ({
  visible, password, error, onCancel,  onLogin,  onChange, onKeyPress
}) => (
  <ModalWrapper visible={visible}>
    <div className={cx('form')}>
      <div onClick={onCancel} className={cx('close')}>&times;</div>
      <div className={cx('title')}>로그인</div>
      <div className={cx('description')}>관리자 비밀번호를 입력하세요</div>
      <input autoFocus type="password" placeholder="비밀번호 입력" value={password} onChange={onChange} onKeyPress={onKeyPress}/>
      { error && <div className={cx('error')}>로그인 실패</div> }
      <div className={cx('login')} onClick={onLogin}>로그인</div>
    </div>
  </ModalWrapper>
);

export default LoginModal;
