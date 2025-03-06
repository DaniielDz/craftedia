import PostItem from "./PostItem";
import styles from "../styles/PostsList.module.css"

function PostsList() {
    return ( 
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <PostItem />
            </li>
            <li className={styles.listItem}>
                <PostItem />
            </li>
            <li className={styles.listItem}>
                <PostItem />
            </li>
            <li className={styles.listItem}>
                <PostItem />
            </li>
        </ul>
     );
}

export default PostsList;