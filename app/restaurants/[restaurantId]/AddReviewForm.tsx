"use client";

import { useState } from "react";
import supabase from "../../../lib/supabase";
const AddReviewForm = (props: any) => {
  const { restaurantId } = props;
  const [review, setReview] = useState("");
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
    <form onSubmit={handleSubmit}>
      <label>
        <textarea
          rows={4}
          name="review"
          value={review}
          onChange={handleChange}
          style={{
            height: "150px",
            width: "300px",
            fontSize: " 16px",
            padding: "12px 20px",
            boxSizing: "border-box",
            borderRadius: "15px",
            border: "1px solid grey",
            resize: "none",
          }}
        />
      </label>
      <button type="submit">add review</button>
    </form>
  );
};

export default AddReviewForm;
