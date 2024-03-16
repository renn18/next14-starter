import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const postCard = ({post}) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/20528016/pexels-photo-20528016/free-photo-of-fajar-pantai-wanita-perempuan.jpeg" alt="" fill className={styles.img}/>
                <span className={styles.date}>01.01.2024</span>
            </div>
        </div>
        <div className={styles.buttom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
            <Link href={`/blog/${post.id}`} className={styles.link}>READ MORE</Link>
        </div>
    </div>
  )
}

export default postCard