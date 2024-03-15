import Image from 'next/image'
import styles from './singlePost.module.css'

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image className={styles.img} src="https://images.pexels.com/photos/20528016/pexels-photo-20528016/free-photo-of-fajar-pantai-wanita-perempuan.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Title</h1>
            <div className={styles.detail}>
            <Image className={styles.avatar} src="https://images.pexels.com/photos/20528016/pexels-photo-20528016/free-photo-of-fajar-pantai-wanita-perempuan.jpeg" alt="" width={50} height={50} />
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Author</span>
                <span className={styles.detailValue}>Muhammad Putra Pratama</span>
            </div>
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>01.01.2024 </span>
            </div>
            </div>

            <div className={styles.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facilis consequuntur maiores praesentium non dignissimos sapiente eos harum ad inventore totam ipsa nisi delectus at optio, voluptas obcaecati dolore molestias?
            </div>
        </div>
    </div>
  );
};

export default SinglePostPage;