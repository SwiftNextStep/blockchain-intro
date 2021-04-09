import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Block from './components/Block';
import Blockchain from './components/Blockchain';
import Distributed from './components/Distributed';
import Header from './components/Header';
import Sha256Hash from './components/Sha256Hash';
import Transactions from './components/Transactions';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/sha256'>
          <Sha256Hash />
        </Route>
        <Route path='/block'>
          <Block />
        </Route>
        <Route path='/blockchain'>
          <Blockchain />
        </Route>
        <Route path='/distributed'>
          <Distributed />
        </Route>
        <Route path='/transactions'>
          <Transactions />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
