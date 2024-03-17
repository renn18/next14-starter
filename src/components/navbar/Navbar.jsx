import Link from 'next/link'
import React from 'react'
import Links from './links/Links'
import styles from "./navbar.module.css"
import { auth } from '@/lib/auth'

const Navbar = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">Renn</Link>
        <div>
          <Links session={session}></Links>
        </div>
    </div>
  )
}

export default Navbar