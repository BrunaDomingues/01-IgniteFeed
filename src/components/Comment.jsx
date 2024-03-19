import { ThumbsUp, Trash } from "phosphor-react";
import styles from './Comment.module.css';
import { Avatar } from "./Avatar";
import { useState } from "react";
export function Comment({content, onDeleteComment}) {
	const [likeCount, setLikeCount] = useState(0);
    function handleDeleteComment() {
        onDeleteComment(content);
    }
	function handleLikeComment(){
        setLikeCount((state)=>{
            return state + 1;
        });
        //atualizar info dependendo da informação anterior fazer assim
    }
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/BrunaDomingues.png" alt=""/>
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Diego Fernandes</strong>
							<time title="13 de julho às 22:34" dateTime="2023-07-13 22:34:00">Cerca de 1h atrás</time>
						</div>
						<button onClick={handleDeleteComment} title="Deletar comentário">
							<Trash size={24}/>
						</button>
					</header>
					<p>{content}</p>
					<footer>
						<button onClick={handleLikeComment}>
							<ThumbsUp />
							Aplaudir <span>20</span>
						</button>
					</footer>
				</div>
			</div>
		</div>
	)
}