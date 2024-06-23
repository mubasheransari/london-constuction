import HomeLayout from "@/contianer/home/homeLayout";
import styles from "./page.module.css";
import Scroll from "@/component/scroll/scroll";
import ImageSlider from "@/component/imageswiper/imagesSwiper";

export default function Home() {
  
  return (
    <main className={styles.main}>
     <div className={styles.image_wrap}>
     </div>
      <HomeLayout />
    </main>
  );
}
