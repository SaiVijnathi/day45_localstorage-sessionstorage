import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUpForm from './components/SignUpForm';
import TopNavigation from './components/TopNavigation';
import Dashboard from './components/Dashboard';
import LogOut from './components/LogOut';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/signup' element={<SignUpForm/>}></Route>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/topnavigation' element={<TopNavigation/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/logout' element={<LogOut/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
