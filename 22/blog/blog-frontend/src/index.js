import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import { matchPath } from 'react-router';
import 'styles/base.scss';


const render = async () => {
  if(process.env.NODE_ENV === 'development') {
    // 개발 모드에서는 바로 렌더링을 합니다
    return ReactDOM.render(<Root />, document.getElementById('root'));
  }

  // 프로덕션 모드에서는 일치하는 라우트를 찾아 미리 불러온 다음 렌더링을 합니다
  const getComponents = [];
  const { pathname } = window.location;

  routes.forEach(
    route => {
      // 일치하는 라우트를 찾고, getComponent를 호출하여 getComponents에 넣습니다.
      const match = matchPath(pathname, route);
      if(!match) return;
      const { getComponent } = route.component;
      if(!getComponent) return;
      getComponents.push(getComponent());
    }
  );
  // getComponents가 끝날 때까지 기다립니다
  await Promise.all(getComponents);
  // render가 아닌 hydrate를 사용합니다(설명 참조).
  ReactDOM.hydrate(<Root />, document.getElementById('root'));
}

render(); // render 호출
// registerServiceWorker();
