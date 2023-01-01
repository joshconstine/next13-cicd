
import classes from "./RestaurantDetails.module.css";
import Image from "next/image";
import AddReviewForm from "./AddReviewForm";
import { PrismaClient } from '@prisma/client'
import { ReactElement } from "react";
import DeleteButton from "./DeleteButton";
import FileUplod from "../../components/FileUpload";
import SingleComment from "../../../components/comments/singleComment";
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

    await prisma.$disconnect()

    return (
      <article className={classes.details}>
        <header>
          <h1>{restaurant.name}</h1>
          <p>{restaurant.type}</p>
          <FileUplod restaurantId={restaurant.id} />
        </header>

        <p>{restaurant.description}</p>
        <div>
          <h3>Reviews</h3>
          <div>
            {comments?.map((comment, i: number) => {

              return (
                <SingleComment comment={comment} />
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
