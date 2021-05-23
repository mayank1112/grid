import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { HomeContainer } from './containers/HomeContainer/HomeContainer';
import './App.css';

const App = () => (
  <BrowserRouter>
    <nav>
      <ol>
        <Link to='/'>Home</Link>
      </ol>
    </nav>
    <Switch>
      <Route path='/' exact component={HomeContainer} />
    </Switch>
  </BrowserRouter>
);

export default App;
