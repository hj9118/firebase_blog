import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Todo from './pages/Todo';
import { PrivateRoute } from './routes/PrivateRoute';
import './style.scss';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/todo'
          element={
            <PrivateRoute>
              <Todo />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
