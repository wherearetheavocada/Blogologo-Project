import { Link } from 'react-router-dom'
import styles from './Articles.module.css'


export default function Blog({id,image,data,title}) {

    return(
         <Link className={styles.link_articles} to={`/articles/${id}`}>
        <div className={styles.card}>
            <div className={styles.blok_img}>
            <img className={styles.img} src={image} alt={image}/>
            </div>
            </div>
            <div className={styles.card_component_text}>
            <p className={styles.data}>{data}</p>
            <p className={styles.title}>{title}</p>
            </div>
        
        </Link>
    )
}