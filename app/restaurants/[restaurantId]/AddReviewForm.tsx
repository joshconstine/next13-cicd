"use client";

const AddReviewForm = () => {
  return (
    <form onSubmit={() => window.alert("hello")}>
      <label>leave review</label>
      <textarea rows={4} />
      <button type="submit">add</button>
    </form>
  );
};

export default AddReviewForm;
