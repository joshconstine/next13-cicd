import classes from "./RestaurantDetails.module.css";
import Image from "next/image";

function RestaurantDetails({ restaurant }: any) {
  console.log(restaurant.img_url);
  return (
    <article className={classes.details}>
      <header>
        <h1>{restaurant.name}</h1>
      </header>
      <div
        style={{
          position: "relative",
          width: "500px",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Image src={restaurant.img_url} alt="image" layout="fill" />
      </div>
    </article>
  );
}

export default RestaurantDetails;
