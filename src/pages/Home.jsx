import { useState, useEffect } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Home = ({ isAuth }) => {
  const [postLists, setPostLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const postCollectionRef = collection(db, 'posts');
  const navigate = useNavigate();

  const getPosts = async () => {
    setLoading(false);
    const data = await getDocs(postCollectionRef);
    setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
    return <h3>Loading ... </h3>;
  }

  return (
    <div className='homepage'>
      {postLists.length === 0 ? (
        <>
          <h3 className='h2 text-center'>No post Added</h3>
          <div className='d-flex justify-content-center'>
            <button className='btn btn-dark align-center my-4' onClick={() => navigate('/write')}>Create new Post</button>
          </div>
        </>
      ) : (
        postLists.map((post) => {
          return (
            <div key={post.id} className='card mb-4 shadow shadow-sm'>
              <div className='card-body'>
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <div className='d-flex justify-content-end'>
                    <button
                      className='btn btn-danger btn-sm my-2 mx-2'
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}
                <h5 className='card-title mb-3 fw-bold'>{post.title}</h5>
                <p className='card-title mb-3'>{post.post}</p>
                <img
                  src={post.author.avatar}
                  width='40px'
                  className='rounded-circle me-2'
                />
                <span className='badge bg-dark'>{post.author.name}</span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
