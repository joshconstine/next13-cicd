import classes from "./layout.module.css";
import Link from "next/link";
import Card from "../../components/card";
import { PrismaClient } from '@prisma/client'
import React from "react";
import S3 from 'aws-sdk/clients/s3'
import Image from "next/image";


const prisma = new PrismaClient()
async function RestaurantsLayout({ children }: any) {

  const data = await prisma.restaurant.findMany()
  await prisma.$disconnect()
  const s3 = new S3({
    region: 'us-west-1',
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,

  })
  const getPhotoUrl = (): string => {

    const restaurantPhotosKey = encodeURIComponent('restaurants/1') + '/'
    s3.listObjects({ Bucket: 'foodly-storage-bucket', Prefix: '' }, (err, data) => {
      if (err) {
        console.log('error', err)
        return ''
      } else {
        const image = data.Contents?.find(elem => (elem?.Size && elem?.Size > 0))
        console.log('----------------')
        console.log(process.env.BUCKET_URL + '/' + encodeURIComponent(image?.Key ? image.Key : ''))
        return process.env.BUCKET_URL + '/' + encodeURIComponent(image?.Key ? image.Key : '')

      }

    })
    return ''
  }
  return (
    <div className={classes.layout}>
      <aside className={classes.sidebar}>

        {
          data.map((restaurant) => {
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
                  <Image width={200} height={200} src={getPhotoUrl()} alt='img' />
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
