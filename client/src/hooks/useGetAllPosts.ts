import { useCallback, useEffect, useState } from 'react';
import { Post } from '../interface/post';
import { API_URL } from '../constants/api';

function useGetAllPosts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  const handlePosts = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setPosts([]);
    handlePosts();
  }, [handlePosts]);

  return { loading, error, posts };
}

export default useGetAllPosts;
