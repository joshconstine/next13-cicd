// import RestaurantDetails from "./RestaurantDetails";
import supabase from "../../../lib/supabase";

async function RestaurantDetailsPage({ params }: any) {
  const response = await supabase
    .from("restaurants")
    .select("*")
    .eq("id", params.restaurantId);

  const restaurant = response.data ? response?.data[0] : null;

  return <div>{restaurant.name}</div>;
}

export default RestaurantDetailsPage;
