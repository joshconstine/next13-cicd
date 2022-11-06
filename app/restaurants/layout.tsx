import classes from "./layout.module.css";
import supabase from "../../lib/supabase";
import Link from "next/link";
import Card from "../../components/card";

async function RestaurantsLayout({ children }: any) {
  const response = await supabase.from("restaurants").select("*");
  const { data } = response;

  return (
    <div className={classes.layout}>
      <aside className={classes.sidebar}>
        {data?.map((restaurant) => {
          return (
            <div
              key={restaurant.id}
              style={{
                paddingTop: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                href={`/restaurants/${restaurant.id}`}
                style={{
                  fontSize: "22px",
                  paddingTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ paddingBottom: "10px" }}>{restaurant.name}</div>
                <Card
                  imgUrl={restaurant.img_url}
                  size="large"
                  id={restaurant.id}
                />
              </Link>
            </div>
          );
        })}
      </aside>
      {children}
    </div>
  );
}

export default RestaurantsLayout;
