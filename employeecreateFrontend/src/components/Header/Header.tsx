import React from 'react'
import { Link } from 'react-router-dom'

import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.container__title_backgroundColor}>
          &#60; <Link to="/" role="back">Back</Link>
          <h1>Employee Details</h1>
        </div>
  )
}

export default Header