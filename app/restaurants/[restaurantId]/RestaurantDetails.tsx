import classes from "./RestaurantDetails.module.css";
import Image from "next/image";
import AddReviewForm from "./AddReviewForm";
import supabase from "../../../lib/supabase";

function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  return fn as (arg: T) => R;
}

const RestaurantDetails = asyncComponent(
  async ({ restaurant }: { restaurant: any }) => {
    const response = await supabase
      .from("comments")
      .select("*")
      .eq("restaurant_id", restaurant.id);
    const comments = response.data ? response?.data : null;

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
            {comments?.map((review) => {
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
                  <p>{review.username}</p>
                  <p>{review.text}</p>
                </div>
              );
            })}
          </div>
          <AddReviewForm restaurantId={restaurant.id} />
        </div>
      </article>
    );
  }
);

export default RestaurantDetails;
