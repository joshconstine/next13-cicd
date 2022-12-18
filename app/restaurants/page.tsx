import ReviewForm from './reviewForm'
export default function RestaurantPage() {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ReviewForm />
    </div>
  );
} 
