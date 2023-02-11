import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={`${styles.loader_box} ${styles.first}`}></div>
      <div className={`${styles.loader_box_alt} ${styles.second}`}></div>
      <div className={`${styles.loader_box_alt} ${styles.third}`}></div>
      <div className={`${styles.loader_box} ${styles.fourth}`}></div>
    </div>
  );
};

export default Loader;
