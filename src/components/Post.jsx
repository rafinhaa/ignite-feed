import styles from "./Post.module.css";

import { Comment } from "./Comment";

export const Post = ({ author, content }) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/rafinhaa.png"
            alt="author"
          />
          <div className={styles.authorInfo}>
            <strong>Rafinhaa</strong>
            <span>Engineer Development</span>
          </div>
        </div>
        <time
          title="11 de Maio de 2022 ás 08:13"
          dateTime="2022-05-11 08:13:00"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um
        </p>
        <p>projeto que fiz no NLW Return, evento da Rocketseat. O nome do</p>
        <p>
          projeto é DoctorCare 🚀 👉 <a href="#">jane.design/doctorcare</a>{" "}
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>{" "}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
