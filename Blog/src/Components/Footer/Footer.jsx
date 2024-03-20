import styles from './footer.module.css'

export default function Footer(){

    return(
        <div className={styles.footer}>
            <div className={styles.footer_el}>
                <p className={styles.footer_text}>©2022 Blogolog</p>
                <div className={styles.footer_them}>  
                    <p className={styles.footer_them_text}>Dark theme</p>
                    <label className={styles.switch}>
                        <input type="checkbox"  />
                        <span className={styles.slider}></span>
                    </label>
                </div>
            </div>
        </div>
    )
}