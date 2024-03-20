import { Link } from 'react-router-dom'
import styles from './Blog.module.css'

export default function BlogHeader({onFilterClick,onSortClick }) {

    return(
        <div className={styles.BlogHeader}>
        <p className={styles.card_title}>Blog</p>
        <div className={styles.blog_choice}>
            <div className={styles.blog_choice_articles}>
                <Link className={styles.link} to={`/articles`}>Аrticles</Link>
                </div>
            <div className={styles.blog_choice_news}>
            <Link className={styles.link} to={`/blog/`}>News</Link></div>
        </div>
        <div className={styles.selection}>
            <div className={styles.data_selection}>
                <button className={styles.data_data} onClick={() => onFilterClick('data')}>Data</button>
                <button className={styles.data_week} onClick={() => onFilterClick('week')}>Week</button>
                <button className={styles.data_monath} onClick={() => onFilterClick('monath')}>Monath</button>
                <button className={styles.data_year} onClick={() => onFilterClick('year')}>Year</button>
            </div>
            <div className={styles.sort_selection}>
            <select className={styles.selector}>
                <option className={styles.selectors} value="1">Sort by: Title</option>
                <option className={styles.selectors} value="2" onClick={() => onSortClick('A-Z')}>Sort: Title (A-Z)</option>
                <option className={styles.selectors} value="3" onClick={() => onSortClick('Z-A')}>Sort: Title (Z-A)</option>
            </select>
            </div>
        </div>
        </div>
    )
}