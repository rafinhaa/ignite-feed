import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/rafinhaa.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafinhaa</strong>
              <time datetime="2020-01-01">há 1 hora</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp /> <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
