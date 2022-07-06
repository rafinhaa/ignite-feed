import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1506878206813-92402b8ded23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGV2ZWxvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=50"
        alt="avatar"
      />
      <div className={styles.profile}>
        <strong>Rafinhaa</strong>
        <span>Software Engineer</span>
      </div>
      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
};
