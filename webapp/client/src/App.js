//import './App.css';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import UserCheck from './views/UserCheck';
import Stats from './views/Stats';
import Predict from './views/Predict';
import Analysis from './views/Analysis';

const App = () => {
  return (
    <div className="App">
      <Route exact path='/' render={() => (
        <UserCheck />
      )} />
      <Route path='/home' render={() => (
        <Home />
      )} />
      <Route path='/stats' render={() => (
        <Stats />
      )} />
      <Route path='/predict' render={() => (
        <Predict />
      )} />
      <Route path='/analysis' render={() => (
        <Analysis />
      )} />
    </div>
  );
}

export default App;
