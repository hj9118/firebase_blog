import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Todo from './pages/Todo';
import { PrivateRoute } from './routes/PrivateRoute';
import './style.scss';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
