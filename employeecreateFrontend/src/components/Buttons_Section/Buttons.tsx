import React from 'react'
import styles from "./Buttons.module.scss";

const Buttons = () => {
  return (
    <div className={styles.container__submit_button}>
            <button
              role="submit"
              type="submit"
              className={styles.container__button_submit}
            >
              Submit
            </button>
            <button role="clear" type="reset" className={styles.container__button_clear}>
              Clear
            </button>
          </div>
  )
}

export default Buttons