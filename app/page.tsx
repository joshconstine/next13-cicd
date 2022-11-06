import Link from "next/link";
export default function Home() {
  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      <h1>Welcome to Foodie </h1>
      <Link
        href={`/restaurants`}
        style={{
          fontSize: "22px",
          paddingTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Restaurants
      </Link>
    </div>
  );
}
