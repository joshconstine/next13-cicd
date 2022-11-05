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
            <div key={restaurant.id}>
              <Link href={`/restaurants/${restaurant.id}`}>
                {restaurant.name}
                <Card
                  imgUrl={restaurant.img_url}
                  size="medium"
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
