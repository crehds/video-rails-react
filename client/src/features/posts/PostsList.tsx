import { Link } from 'react-router-dom';
import useGetAllPosts from '../../hooks/useGetAllPosts';

function PostsList() {
  const { loading, error, posts } = useGetAllPosts();
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>

            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
}

export default PostsList;
