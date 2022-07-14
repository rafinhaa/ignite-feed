import { Header } from "./components/Header";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./app.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rafinhaa.png",
      name: "Rafinhaa",
      role: "Software Engineer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um",
      },
      {
        type: "paragraph",
        content:
          "projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2020-01-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "@Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um",
      },
      {
        type: "paragraph",
        content:
          "projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2020-01-02 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
