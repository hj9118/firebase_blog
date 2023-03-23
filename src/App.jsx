import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import Home from './pages/Home';
import Login from './pages/Login';
import Write from './pages/Write';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const userLogout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
    });
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <nav className='navbar navbar-expand-lg justify-content-center navbar-light bg-dark text-center py-4'>
          <Link to='/' className='nav-link text-white mx-2'>
            Home
          </Link>

          {!isAuth ? (
            <Link to='/login' className='nav-link text-white mx-2'>
              Login
            </Link>
          ) : (
            <>
              <Link to='/write' className='nav-link text-white mx-2'>
                Write
              </Link>
              <button className='btn btn-light' onClick={userLogout}>
                Logout
              </button>
            </>
          )}
        </nav>
        <div className='container mt-5'>
          <Routes>
            <Route path='/' element={<Home isAuth={isAuth} />} />
            <Route path='/write' element={<Write isAuth={isAuth} />} />
            <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
