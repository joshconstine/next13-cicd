import classes from "./RestaurantDetails.module.css";
import Image from "next/image";
import AddReviewForm from "./AddReviewForm";

function RestaurantDetails({ restaurant }: any) {
  const reviews = [
    {
      user: "Josh Constine",
      message: "this place has amazing beer",
    },
    {
      user: "Alyssia Constine",
      message: "chips and salsa are amazing",
    },
  ];

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
      <div>
        <h3>Reviews</h3>
        <div>
          {reviews.map((review) => {
            return (
              <div
                style={{
                  width: "300px",
                  backgroundColor: "white",
                  border: "1px solid grey",
                  borderRadius: "15px",
                  padding: "15px",
                  margin: "15px 0px",
                }}
              >
                <p>{review.user}</p>
                <p>{review.message}</p>
              </div>
            );
          })}
        </div>
        <AddReviewForm />
      </div>
    </article>
  );
}

export default RestaurantDetails;
