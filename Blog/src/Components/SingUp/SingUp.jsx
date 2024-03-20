import { Link } from "react-router-dom"
import styles from "./SingUp.module.css"

export default function SingIn() {

    return(
        <div className={styles.singIn_wrapper} >
            <Link className={styles.singIn_link} to={`/articles`}>Back to home</Link>
           <h2 className={styles.singIn_title}>Sign In</h2>
           <div className={styles.singIn}>
           <div className={styles.singIn_menu}>
            <p className={styles.singIn_email}>Email</p>
            <input type="text" className={styles.singIn_inputEmail} placeholder="Your email"></input>
            <p className={styles.singIn_password}>password</p>
            <input type="text" className={styles.singIn_inputPassword} placeholder="Your passwordl"></input>
            <p className={styles.singIn_forgotPassword}>Forgot password?</p>
            <button className="btnSingIn">Sing In</button>
            <p className={styles.singIn_text}>Don't have an account?</p>
            <Link className={styles.singIn_link} to={`/singUp`}>Sign Up</Link>
            </div>
           </div>
        </div>
    )
}