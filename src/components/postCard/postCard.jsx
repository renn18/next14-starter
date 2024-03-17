import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const postCard = ({post}) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            {post.img && <div className={styles.imgContainer}>
                <Image src={post.img} alt="" fill className={styles.img}/>
                <span className={styles.date}>01.01.2024</span>
            </div>}
        </div>
        <div className={styles.buttom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
            <Link href={`/blog/${post.slug}`} className={styles.link}>READ MORE</Link>
        </div>
    </div>
  )
}

export default postCard