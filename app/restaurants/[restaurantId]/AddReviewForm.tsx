"use client";

import { useState } from "react";

const AddReviewForm = () => {
  const [review, setReview] = useState("");
  const handleChange = (e: any) => {
    setReview(e.target.value);
  };
  return (
    <form onSubmit={() => window.alert(review)}>
      <label>leave review</label>
      <textarea rows={4} name="review" value={review} onChange={handleChange} />
      <button type="submit">add</button>
    </form>
  );
};

export default AddReviewForm;
