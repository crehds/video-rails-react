import { Link } from 'react-router-dom';
import useGeOnePost from '../../hooks/useGetOnePost';

function PostDetails() {
  const { post } = useGeOnePost();

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
