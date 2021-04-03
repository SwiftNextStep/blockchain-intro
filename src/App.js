import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Block from './components/Block';
import Blockchain from './components/Blockchain';
import Header from './components/Header';
import Sha256Hash from './components/Sha256Hash';

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
      </Switch>
    </Router>
  );
}

export default App;
