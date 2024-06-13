import HomeLayout from "@/contianer/home/homeLayout";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
     <div className={styles.image_wrap}>
     </div>
     <HomeLayout />
     <img width={'100%'} src="./istockphoto-488120139-1024x1024.jpg" />
    </main>
  );
}
