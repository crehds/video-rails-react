import { useParams } from 'react-router-dom';
import { Post } from '../interface/post';
import { useCallback, useEffect, useState } from 'react';
import { API_URL } from '../constants/api';

function useGeOnePost() {
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

  return { post };
}

export default useGeOnePost;
