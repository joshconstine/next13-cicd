import classes from "./layout.module.css";
import supabase from "../../lib/supabase";
import Link from "next/link";

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
