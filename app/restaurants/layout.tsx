import classes from "./layout.module.css";
import supabase from "../../lib/supabase";

async function RestaurantsLayout({ children }: any) {
  const restaurants = await supabase.from("restaurants").select("*");
  console.log(restaurants);

  return (
    <div className={classes.layout}>
      <aside className={classes.sidebar}>hello</aside>
      {children}
    </div>
  );
}

export default RestaurantsLayout;
