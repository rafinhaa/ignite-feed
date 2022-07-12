import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export const Comment = ({ content }) => {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/rafinhaa.png" hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafinhaa</strong>
              <time dateTime="2020-01-01">há 1 hora</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp /> Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
