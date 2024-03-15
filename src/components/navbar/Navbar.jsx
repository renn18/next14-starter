import Link from 'next/link'
import React from 'react'
import Links from './links/Links'
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">Renn</Link>
        <div>
          <Links></Links>
        </div>
    </div>
  )
}

export default Navbar