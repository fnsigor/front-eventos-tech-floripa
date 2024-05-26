import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        Desenvolvido por <address>@fnsigor</address>
    </footer>
  )
}

export default React.memo(Footer)