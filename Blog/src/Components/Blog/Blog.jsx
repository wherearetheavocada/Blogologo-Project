import { Link } from 'react-router-dom'
import styles from './Blog.module.css'


export default function Blog({id,image,data,title}) {

    return(
         <Link className={styles.link} to={`/blog/${id}`}>
        <div className={styles.card}>
            <img className={styles.img} src={image} alt={image}/>
            <div className={styles.card_component_text}>
            <p className={styles.data}>{data}</p>
            <p className={styles.title}>{title}</p>
            </div>
        </div>
        </Link>
    )
}