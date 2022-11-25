
import classes from "./RestaurantDetails.module.css";
import Image from "next/image";
import AddReviewForm from "./AddReviewForm";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  return fn as (arg: T) => R;
}

const RestaurantDetails = asyncComponent(
  async ({ restaurant }: { restaurant: any }) => {
    const comments = await prisma.comment.findMany({
      where:
      {
        restaurant_id: restaurant.id
      }
    })

    return (
      <article className={classes.details}>
        <header>
          <h1>{restaurant.name}</h1>
          <p>{restaurant.type}</p>
        </header>

        <p>{restaurant.description}</p>
        <div>
          <h3>Reviews</h3>
          <div>
            {comments?.map((review, i: number) => {
              return (
                <div
                  key={i}
                  style={{
                    width: "300px",
                    backgroundColor: "white",
                    border: "1px solid #d5bdaf",
                    borderRadius: "15px",
                    padding: "15px",
                    margin: "15px 0px",
                  }}
                >
                  <p>{'Josh'}</p>
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
