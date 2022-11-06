"use client";

import { useState } from "react";
import supabase from "../../../lib/supabase";
import classes from "./AddReviewForm.module.css";

const AddReviewForm = (props: any) => {
  const { restaurantId } = props;
  const [review, setReview] = useState("");
  const [commetMode, setCommetMode] = useState(false);
  const handleChange = (e: any) => {
    setReview(e.target.value);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("comments")
      .insert([
        { username: "guest", text: review, restaurant_id: restaurantId },
      ]);
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
            setCommetMode(true);
          }}
        >
          Add Review
        </button>
      )}
    </div>
  );
};

export default AddReviewForm;
