import HomeLayout from "@/contianer/home/homeLayout";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
     <div className={styles.image_wrap}>
      <img width={'100%'} src='https://www.lilyhomes.com.au/wp-content/uploads/2020/03/jasper.jpg' />
      <p className={styles.tag_line}>Building Your Dreams into Reality</p>
     </div>
     <HomeLayout />
     <img width={'100%'} src="./istockphoto-488120139-1024x1024.jpg" />
    </main>
  );
}
