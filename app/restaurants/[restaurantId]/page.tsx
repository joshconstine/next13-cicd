import supabase from "../../../lib/supabase";
import RestaurantDetails from "./RestaurantDetails";

async function RestaurantDetailsPage({ params }: any) {
  const response = await supabase
    .from("restaurants")
    .select("*")
    .eq("id", params.restaurantId);

  const restaurant = response.data ? response?.data[0] : null;
  return (
    <div>
      <RestaurantDetails restaurant={restaurant} />
    </div>
  );
}

export default RestaurantDetailsPage;
