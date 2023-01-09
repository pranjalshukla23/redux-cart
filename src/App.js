import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import {Provider} from 'react-redux';
import store from './app/store';

function App() {
  return (
    <div className="App">
      {/*wrap the components with the redux features*/}
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
