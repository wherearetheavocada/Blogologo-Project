import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css'
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom'

export default function Header({ changeSearchQuery }) {
  const [searchInput, setSearchInput] = useState(false);

   
  const toggleFilters = () => {
    setSearchInput(true);
  };


    return(
        <div className={styles.header} >
            <div className={styles.logo}>
                <Link className={styles.logo_name} to={`/articles`}>BLOGOLOGO</Link>
            </div>
            <div className={styles.header_comp}>
            <div className={styles.searchinput}>
            {searchInput && <input type="text" className={styles.header_input}  placeholder="Search..." />}
      <button className={styles.search} type="button" onClick={toggleFilters}>
        <CiSearch className={styles.svg} />
      </button>
            </div>  
            <div className={styles.profile}>
                <div className={styles.profile_component}>
                    <p className={styles.profile_img}>AM</p>
                </div>
                <p className={styles.profile_name}>Artem Malkin</p>
            </div>
            </div>
        </div>
    )
}

