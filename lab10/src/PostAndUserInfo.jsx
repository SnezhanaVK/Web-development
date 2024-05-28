import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostAndUserInfo = () => {
  const [id, setId] = useState('');
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      fetchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // Эффект будет запущен при изменении id

  const fetchData = async () => {
    try {
      const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${postResponse.data.userId}`);

      setPost(postResponse.data);
      setUser(userResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <button type="submit">Fetch Data</button>
      </form>
      {post && user && (
        <div>
          <h2>Post</h2>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
          <h2>User</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default PostAndUserInfo;