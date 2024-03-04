import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Bruna Domingues Leite" 
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, facilis sunt recusandae accusantium repellendus doloremque non eum, ex, dignissimos nam repudiandae. Vero voluptatibus consectetur dolorum non soluta blanditiis sequi in."
          />
          <Post 
            author="Rodrigo Soares" 
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, facilis sunt recusandae accusantium repellendus doloremque non eum, ex, dignissimos nam repudiandae. Vero voluptatibus consectetur dolorum non soluta blanditiis sequi in."
          />
        </main>
      </div>
    </div>
  )
}