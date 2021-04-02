import './App.css';
import Block from './components/Block';
import BlockchainBlock from './components/BlockchainBlock';
import Sha256Hash from './components/Sha256Hash';

function App() {
  return (
    <>
      <Sha256Hash />
      <Block />
      <BlockchainBlock />
    </>
  );
}

export default App;
