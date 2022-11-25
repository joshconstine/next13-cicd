import classes from "./layout.module.css";
import Link from "next/link";
import Card from "../../components/card";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function RestaurantsLayout({ children }: any) {
  const data = await prisma.restaurant.findMany()
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
                <Card
                  text={restaurant.name}
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
