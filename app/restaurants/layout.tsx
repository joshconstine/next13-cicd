import classes from "./layout.module.css";
import Link from "next/link";
import Card from "../../components/card";
import { PrismaClient } from '@prisma/client'
import React from "react";
import S3 from 'aws-sdk/clients/s3'
import Image from "next/image";
import { url } from "inspector";

interface IPhoto {
  id: Number
  url: String
  created_at: any
  user_id: Number
  restaurant_id: Number
  comment_id?: Number
}

const prisma = new PrismaClient()
async function RestaurantsLayout({ children }: any) {
  const data = await prisma.restaurant.findMany()
  const photoUrls = await prisma.photos.findMany()
  await prisma.$disconnect()

  return (
    <div className={classes.layout}>
      <aside className={classes.sidebar}>

        {
          data.map((restaurant) => {
            const imgSrc = photoUrls.map((photo: any) => {
              if (photo.restaurant_id === restaurant.id) return photo.url
              else return null
            }).find(elem => elem !== null)
            const imgUrl = imgSrc ? `${process.env.BUCKET_URL}/${imgSrc}` : ''
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
                  <Image width={200} height={200} src={imgUrl} alt='img' />
                  <Card
                    text={restaurant.name}
                    size="large"
                    id={restaurant.id}
                  />
                </Link>
              </div>
            );
          })
        }
      </aside>
      {children}
    </div>
  );
}

export default RestaurantsLayout;
