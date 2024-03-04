import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
			<div className={styles.profile}>
				<img className={styles.avatar} src="https://github.com/BrunaDomingues.png" />
				<strong>Bruna Domingues Leite</strong>
				<span>WebDeveloper</span>
			</div>
			<footer>
				<a href="#">
					<PencilLine size={20}/>
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}