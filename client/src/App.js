import './App.css';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Success from './components/Success';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
     <Success/>
     <Error/>
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
