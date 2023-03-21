import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();
  console.log(currentUser);

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate('/todo');
    }
  }, [currentUser]);

  return (
    <div className='login'>
      <div className='wrapper'>
        <h1>NoName Project</h1>
        <button onClick={handleLogin}>Login with Google</button>
      </div>
    </div>
  );
};

export default Login;
