import HomeLayout from "@/contianer/home/homeLayout";
import styles from "./page.module.css";
import Scroll from "@/component/scroll/scroll";
import GalleryLayout from "@/contianer/gallery/galleryLayout";

export default function Home() {
  
  return (
    <main className={styles.main}>
     <div className={styles.image_wrap}>
     </div>
     <p id="box"></p>
     <Scroll />
      <HomeLayout />
      <GalleryLayout />
     <img width={'100%'} src="./istockphoto-488120139-1024x1024.jpg" />
    </main>
  );
}
