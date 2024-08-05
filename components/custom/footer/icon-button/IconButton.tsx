import Image from "next/image";
import styles from "./IconButton.module.scss";

interface IconButtonProps {
  src: string;
  imgsrc: any;
}

const IconButton: React.FC<IconButtonProps> = ({ src, imgsrc }) => {
  return (
    <a href={src} className={styles.iconButton}>
      <Image
        width={24}
        height={24}
        className={styles.iconImage}
        alt="icon"
        src={imgsrc}
      />
    </a>
  );
};

export default IconButton;
