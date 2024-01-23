import React from 'react'
import styles from "../styleSheet/Header.module.css"
import NavBar from '../components/NavBar'
import Search from "../components/Search"

function Header() {
  return (
    <>
    <header className={`${styles.bgImg}`}>
        <NavBar />
        <center className={`${styles.containt}`}>
          <div>
            <div>
              <img
                className={`${styles.titleLogo}`}
                src="/images/zomato-logo.avif"
                alt=""
              />
            </div>

            <h1 className={`text-white m-2 p-2`}>
              Find the best Restaurants, cafes, and bars
            </h1>
            <div>
              <Search />
            </div>
          </div>
        </center>
      </header>
      
    </>
  )
}

export default Header
