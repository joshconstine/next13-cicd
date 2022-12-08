import classes from "./WelcomeCard.module.css";
import Image from "next/image";
import SearchFrom from "./SearchForm";

const WelcomeCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.iconContainer}>
        <Image src="/static/logo-Icon.png" alt="lgoo" width={100} height={100} className={classes.logo} />
        <h1 className={classes.header}>Welcome...</h1>
      </div>
      <span className={classes.prompt}>
        Search the city you would like to eat in below
      </span>
      <div className={classes.iamgeContainer}>
        {" "}
        <Image
          src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Picture of the author"
          className={classes.image}
          width={139}
          height={135}
        />
        <Image
          src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Picture of the author"
          className={classes.image}
          width={139}
          height={135}
        />
        <Image
          src="https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Picture of the author"
          className={classes.image}
          width={139}
          height={135}
        />
        <Image
          src="https://images.pexels.com/photos/412681/pexels-photo-412681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Picture of the author"
          className={classes.image}
          width={139}
          height={135}
        />
      </div>
      <SearchFrom />
    </div>
  );
};

export default WelcomeCard;
