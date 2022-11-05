import Image from "next/image";
import styles from "./Card.module.css";
import cls from "classnames";
interface DefaultCardProps {
  imgUrl: string;
  size: string;
  id: string;
}

const Card = (props: DefaultCardProps) => {
  const {
    imgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",
    size = "medium",
    id,
  } = props;
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const scale = { scale: 1.1 };
  return (
    <div className={styles.container}>
      <Image
        src={imgUrl}
        alt="image"
        layout="fill"
        className={styles.cardImg}
      />
    </div>
  );
};

export default Card;
