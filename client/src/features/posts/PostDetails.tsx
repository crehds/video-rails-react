import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../constants/api';
import { Post } from '../../interface/post';

function PostDetails() {
  const [post, setPost] = useState<Post | null>(null);
  const { id } = useParams();

  const fetchCurrentPost = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/posts/${id}`);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    fetchCurrentPost();
  }, [fetchCurrentPost]);

  return (
    <div>
      {!post && <h1>Loading...</h1>}
      {post && (
        <>
          <h2>{post.body}</h2>
          <p>{post.title}</p>
        </>
      )}

      <Link to='/'>Back to Posts</Link>
    </div>
  );
}
export default PostDetails;
