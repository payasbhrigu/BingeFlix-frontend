import { useContext } from 'react';
import './App.scss';
import { AuthContext } from './authContext/AuthContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Watch from './pages/watch/Watch';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Router>
         <Switch>
           <Route exact path="/">
               {user ? <Home type={'movies'}/> : <Redirect to='/register'/>}
           </Route>
           <Route path="/login">
              {!user ? <Login/> : <Redirect to='/'/>}              
           </Route>
           <Route path="/register">
              {!user ? <Register/> : <Redirect to='/'/>}              
           </Route>
           {user && (
            <>
              <Route path="/movies">
                <Home type={'movies'}/>
              </Route>
              <Route path="/series">
                <Home type={'series'}/>
              </Route>
              <Route path="/watch">
                <Watch/>
              </Route>
            </>
           )}
        </Switch>
      </Router>
      {/* <Home/>  */}
      {/* // <Login/> */}
    </div>
  );
}

export default App;
