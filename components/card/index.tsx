import styles from "./Card.module.css";
import { motion } from "framer-motion";
import cls from "classnames";
interface DefaultCardProps {
  text: string;
  size: string;
  id: number;

}

const Card = (props: DefaultCardProps) => {
  const {
    size = "medium",
    text,
    id,
  } = props;
  const classMap: any = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };
  // const handleOnError = () => {
  //   setImgSrc(
  //     "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
  //   );
  // };
  const scale = { scale: 1.1 };
  return (
    <div className={styles.container}>
      {/* <motion.div
        className={cls(styles.imgMotionWrapper, classMap[size])}
        whileHover={{ ...scale }}
      > */}
      {text}
      {/* </motion.div> */}
    </div>
  );
};

export default Card;
