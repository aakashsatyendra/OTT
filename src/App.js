import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
