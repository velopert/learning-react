import React from 'react';
import { Route } from 'react-router-dom';
import {
  Home,
  About,
  Posts
} from 'pages';
import Menu from 'components/Menu';
import AsyncSplitMe from 'components/AsyncSplitMe';

const App = () => {
  return (
    <div>
      <Menu/>
      <Route exact path="/" component={Home}/>
      <Route path="/about/:name?" component={About}/>
      <Route path="/posts" component={Posts}/>
    </div>
  );
};

export default App;
