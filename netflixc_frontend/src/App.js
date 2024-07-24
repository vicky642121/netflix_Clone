import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Body/>
      <Toaster position='top-center'/>
    </div>
  );
}

export default App;
