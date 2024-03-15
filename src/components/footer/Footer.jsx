import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>renn</div>
      <div className={styles.text}>
        renn creative web design @2024 copyright all rights reserved.
      </div>
    </div>
  );
};

export default Footer;