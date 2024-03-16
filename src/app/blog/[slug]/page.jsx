import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/postUser';

const getData = async(slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  
    if(!res.ok) {
      throw new Error("Something went wrong");
    }
  
    return res.json();
  }

const SinglePostPage = async ({params}) => {

  const {slug} = params;

  const post = await getData(slug);
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image className={styles.img} src="https://images.pexels.com/photos/20528016/pexels-photo-20528016/free-photo-of-fajar-pantai-wanita-perempuan.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.detail}>
            <Image className={styles.avatar} src="https://images.pexels.com/photos/20528016/pexels-photo-20528016/free-photo-of-fajar-pantai-wanita-perempuan.jpeg" alt="" width={50} height={50} />
            <PostUser userId = {post.userId}/>
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>01.01.2024 </span>
            </div>
            </div>

            <div className={styles.content}>
                {post.body}
            </div>
        </div>
    </div>
  );
};

export default SinglePostPage;