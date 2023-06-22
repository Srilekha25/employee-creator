import React from 'react'

import styles from "./Header.module.scss"
import BackButton from '../BackButton/BackButton'

const Header = () => {
  return (
    <div className={styles.container__title_backgroundColor}>
          <BackButton/>
          <h1>Employee Details</h1>
        </div>
  )
}

export default Header