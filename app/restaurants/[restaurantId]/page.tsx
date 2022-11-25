import RestaurantDetails from "./RestaurantDetails";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function RestaurantDetailsPage({ params }: any) {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      id: Number(params.restaurantId)
    }
  });
  await prisma.$disconnect()

  return (
    <div>
      <RestaurantDetails restaurant={restaurant} />
    </div>
  );
}

export default RestaurantDetailsPage;
