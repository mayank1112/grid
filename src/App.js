import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Home } from './containers/Home/Home';
import { Features } from './containers/Features/Features';

const App = () => (
  <BrowserRouter>
    <nav>
      <ol><Link to='/'>Home</Link></ol>
      <ol><Link to='/features/1'>Feature 1</Link></ol>
    </nav>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/features/:id' component={Features} />
    </Switch>
  </BrowserRouter>
);

export default App;
