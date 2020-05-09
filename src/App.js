import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SideBar from './app/Components/SideBar';
import Home from './app/Components/Home';
import Statistics from './app/Components/Statistics';
import Players from './app/Components/Players';

function App() {
  return (
    <React.Fragment>
      <SideBar >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/statistics' component={Statistics} />
          <Route exact path='/players' component={Players} />
        </Switch>
      </SideBar>
    </React.Fragment>
  );
}

export default App;
