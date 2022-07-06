import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";
import styles from "./app.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="John"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui cumque modi sunt accusamus dolore hic rem culpa. Maiores, illum voluptates! Quisquam officiis illo commodi deleniti quasi maiores ab rem in."
          />
          <Post
            author="Jane"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, tenetur dicta quis totam nemo nostrum, repellendus et qui fugit quibusdam expedita quisquam a? Ipsum sunt consequatur repellat, libero magnam impedit!"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
