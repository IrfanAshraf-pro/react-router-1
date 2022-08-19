import './App.css';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar';
import ErrorPage from './components/pages/ErrorPage';
import Post from './components/pages/Post';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';


function App() {
  const isLoggedIn=true
  const data = {
    'user':'User not logged In'
  }
  return (
    <>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/post/:category' element={<Post />} />
          <Route path='/post/:category/:id' element={<Post />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to='/login' replace state={data} />} />
          <Route path="/login" element={<Login/>}/>
          <Route path='/hello' element={<h1>Hello g kai hal nai g</h1>} />
          <Route path='/logout' element={<Logout />} />

          <Route path='*' element={<ErrorPage />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
