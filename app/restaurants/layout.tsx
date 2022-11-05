import classes from "./layout.module.css";
import supabase from "../../lib/supabase";

async function RestaurantsLayout({ children }: any) {
  const response = await supabase.from("restaurants").select("*");
  const { data } = response;

  return (
    <div className={classes.layout}>
      <aside className={classes.sidebar}>
        {data?.map((restaurant) => {
          return <div>{restaurant.name}</div>;
        })}
      </aside>
      {children}
    </div>
  );
}

export default RestaurantsLayout;
