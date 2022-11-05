// import RestaurantDetails from "./RestaurantDetails";
import supabase from "../../../lib/supabase";

async function RestaurantDetailsPage({ params }: any) {
  const response = await supabase
    .from("restaurants")
    .select("*")
    .eq("id", params.restuarantId);

  console.log(response);

  return <div>single restaurant</div>;
}

export default RestaurantDetailsPage;
