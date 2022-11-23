import { createContext, useContext } from 'react';

// 클라이언트 환경: null
// 서버 환경:{ done: false, promises: [] }
const PreloadContext = createContext(null);
export default PreloadContext;

// resolve는 함수 타입입니다.
export const Preloader = ({ resolve }) => {
  const preloadContext = useContext(PreloadContext);
  if (!preloadContext) return null; // context 값이 유효하지 않다면 아무것도 하지 않음
  if (preloadContext.done) return null; // 이미 작업이 끝났다면 아무것도 하지 않음

  // promises 배열에 프로미스 등록
  // 설령 resolve 함수가 프로미스를 반환하지 않더라도, 프로미스 취급을 하기 위하여
  // Promise.resolve 함수 사용
  preloadContext.promises.push(Promise.resolve(resolve()));
  return null;
};

// Hook 형태로 사용 할 수 있는 함수
export const usePreloader = resolve => {
  const preloadContext = useContext(PreloadContext);
  if (!preloadContext) return null;
  if (preloadContext.done) return null;

  // promises 배열에 프로미스 등록
  // 설령 resolve 함수가 프로미스를 반환하지 않더라도, 프로미스 취급을 하기 위하여
  // Promise.resolve 함수 사용
  preloadContext.promises.push(Promise.resolve(resolve()));
};
