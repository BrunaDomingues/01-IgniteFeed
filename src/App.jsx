import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
      id: 1,
      author: {
          avatarUrl: 'https://github.com/BrunaDomingues.png',
          name: 'Bruna Domingues Leite',
          role: 'Web Developer'
      },
      content: [
          {type: 'paragraph', content: 'Fala galeraa 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2024-03-17 22:00:00')
  },
  {
      id: 2,
      author: {
          avatarUrl: 'https://github.com/maykbrito.png',
          name: 'Mayk Brito',
          role: 'Educator @Rocketseat'
      },
      content: [
          {type: 'paragraph', content: 'Fala galeraa 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa2. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2023-11-15 20:00:00')
  }
];

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return <Post
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            key={post.id}/>
          })}
        </main>
      </div>
    </div>
    )
}