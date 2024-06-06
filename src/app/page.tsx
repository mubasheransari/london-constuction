import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
     <p className={styles.image_wrap}>
      <img width={'100%'} src='https://www.lilyhomes.com.au/wp-content/uploads/2020/03/jasper.jpg' />
      <p className={styles.tag_line}>Building Your Dreams into Reality</p>
     </p>
    </main>
  );
}
