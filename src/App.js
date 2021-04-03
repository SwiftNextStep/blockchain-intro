import './App.css';
import Block from './components/Block';
import Blockchain from './components/Blockchain';
import Header from './components/Header';
import Sha256Hash from './components/Sha256Hash';

function App() {
  return (
    <>
      <Header />
      <Sha256Hash />
      <Block />
      <Blockchain />
    </>
  );
}

export default App;
