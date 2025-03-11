import PostItem from "./PostItem";
import styles from "../styles/PostsList.module.css";

function PostsList({ posts, onDelete }) {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.id} className={styles.listItem}>
          <PostItem post={post} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

export default PostsList;