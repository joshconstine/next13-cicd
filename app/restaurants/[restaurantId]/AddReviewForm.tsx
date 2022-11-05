"use client";

import { useState } from "react";

const AddReviewForm = () => {
  const [review, setReview] = useState("");
  const handleChange = (e: any) => {
    setReview(e.target.value);
  };
  return (
    <form onSubmit={() => window.alert(review)}>
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
