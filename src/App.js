import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import Home from './Home/Home'
import Watchlist from './watchlist/Watchlist'
import MovieDetail from './mainview/MovieDetail';
function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path='/' element={<Signup />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/watchlist' element={<Watchlist />}/>
                <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
