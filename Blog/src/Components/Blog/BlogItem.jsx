import styles from './Blog.module.css'
import { Link } from 'react-router-dom'
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";

export default function Blog({id,image,text,title}) {

    return(

        <div className={styles.blogItem}>
             <div className={styles.link_home}>
        <Link className={styles.link} to={`/blog`}>
            <p className={styles.home}>home</p>
        </Link>
        <p className={styles.home_id}>/ Post {id}</p>
            </div>
            <p className={styles.title_item}>{title}</p>
            <img className={styles.image} src={image} alt={image}/>
            <div className={styles.comp}>
            <p className={styles.card_text}>{text}</p>
            <div className={styles.network}>
                <a href='https://www.facebook.com/'className={styles.facebook}>
                <SlSocialFacebook />
                </a>
                <a href='https://twitter.com/' className={styles.twitter}>
                <CiTwitter />
                </a>
                <a className={styles.other}>
                <BsThreeDots />
                </a>
                </div>
            </div>




          
            
            </div>


    )
}