import React from 'react'
import styles from "../styleSheet/NavBar.module.css"
import {Link} from "react-router-dom"
function NavBar() {
  return (
    <>
     <nav className={`nav d-flex justify-content-around p-3 ${styles.nav}`}>
        <div className="title-name d-flex ">
          <Link to={'/'} className={`text-white m-2 ${styles.title}`}>Zomato App</Link>
        </div>
        <div>
          <Link className={`${styles.btn} m-1 btn bg-info `}>
            Login
          </Link>
          <Link className={`btn bg-success m-1  text-white ${styles.btn}`}>
            Create an account
          </Link>
        </div>
      </nav>

      
    </>
  )
}

export default NavBar
