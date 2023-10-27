import { useEffect, useState } from 'react';
import { API_URL } from '../../constants/api';
import { Post } from '../../interface/post';

function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const handlePosts = async () => {
    try {
      const response = await fetch(`${API_URL}/posts`);
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (err) {
      console.error(err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handlePosts();
  }, []);
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
}

export default PostsList;
