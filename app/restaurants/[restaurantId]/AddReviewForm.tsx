"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import classes from "./AddReviewForm.module.css";


const AddReviewForm = (props: any) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { restaurantId } = props;
  const [review, setReview] = useState("");
  const [commetMode, setCommetMode] = useState(false);
  const handleChange = (e: any) => {
    e.preventDefault();
    setReview(e?.target?.value);
  };
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation()
    const postData = async () => {
      const data = {
        user_id: 1,
        text: review,
        restaurant_id: restaurantId,
        rating_id: 1,
      };

      const response = await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData().then((data) => {
      alert(data.message);
    });

  };
  return (
    <div>
      {commetMode && (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>
            <textarea
              className={classes.textArea}
              rows={4}
              name="review"
              value={review}
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            style={{
              background: "#d6ccc2",
              borderRadius: "999px",
              boxShadow: "#403D39 0 10px 20px -10px",
              boxSizing: "border-box",
              color: "black",
              cursor: "pointer",
              fontSize: "16px",
              outline: "none",
              border: "none",
              padding: "8px 18px",
              width: "120px",
            }}
          >
            Submit
          </button>
        </form>
      )}
      {!commetMode && (
        <button
          style={{
            background: "#d6ccc2",
            borderRadius: "999px",
            boxShadow: "#403D39 0 10px 20px -10px",
            boxSizing: "border-box",
            color: "black",
            cursor: "pointer",
            fontSize: "16px",
            outline: "none",
            border: "none",
            padding: "8px 18px",
          }}
          onClick={() => {
            session ? setCommetMode(true) : router.push("/login");
          }}
        >
          Add Review
        </button>
      )}
    </div>
  );
};

export default AddReviewForm;
