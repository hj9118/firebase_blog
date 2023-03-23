import { useState, useEffect } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Write = ({ isAuth }) => {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');

  const navigate = useNavigate();
  const postsCollectionRef = collection(db, 'posts');

  const createPost = async () => {
    if (title === '' || post === '') {
      alert('Fill the Fields');
      return false;
    } else {
      try {
        await addDoc(postsCollectionRef, {
          title,
          post,
          author: {
            name: auth.currentUser.displayName,
            id: auth.currentUser.uid,
            avatar: auth.currentUser.photoURL,
          },
        });
        console.log(auth);
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  });

  return (
    <div className='container'>
      <div className='bg-light p-5 rounded mt-3'>
        <h1>Create a Post</h1>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Title
          </label>
          <input
            type='text'
            placeholder='Title'
            className='form-control'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='posts' className='form-label'>
            Posts
          </label>
          <textarea
            placeholder='Posts...'
            className='form-control'
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
        <button className='btn btn-dark' onClick={createPost}>
          Submit Post
        </button>
      </div>
    </div>
  );
};

export default Write;
