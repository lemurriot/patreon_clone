import React from 'react';
import Nav from './Nav';
import Body from './Body';
import UserForm from './UserForm';
import SignIn from './SignIn';
import LogIn from './LogIn';
import CreatorsList from './CreatorsList';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Body} />
        <Route path='/signin' component={UserForm}/>
        <Route path='/login' component={UserForm}/>
        <Route path='/creators' component={CreatorsList}/>
      </Switch>


    </div>

  );
}

export default App;
