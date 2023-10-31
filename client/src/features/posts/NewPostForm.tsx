import { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants/api';

function NewPostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const newPostData = { title, body };
      const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPostData)
      });
      if (response.ok) {
        const post = await response.json();
        navigate(`/posts/${post.id}`);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>Create a new Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='titleInput'>
            <p>Title</p>
            <input
              id='titleInput'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor='bodyInput'>
            <p>Body</p>
            <textarea
              id='bodyInput'
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button type='submit'>Create Post</button>
        </div>
      </form>
    </div>
  );
}
export default NewPostForm;
