import "./Post.css";

export default function Post({ post }) {
  const { title, body, userId, id } = post;

  return (
    <div className="post">
      <h3>Title: {title} </h3>
      <p>
        <small>userId: {userId} </small>
      </p>
      <p>
        <small>postId: {id} </small>
      </p>
      <p>{body}</p>
    </div>
  );
}
