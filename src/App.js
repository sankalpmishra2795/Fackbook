import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar'
import { Provider } from 'react-redux'
import store from './redux/Store'
function App() {
  return (
    < Provider store ={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      </Provider>
  );
}

export default App;
