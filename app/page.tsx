"use client";
import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { DatePicker } from "../components/datePicker";
import dayjs from "dayjs";
import { DateRangePicker } from "../components/datePicker/DateRangePicker";

export default function Home() {
  const { data: session } = useSession();
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [dateRange, setDateRange] = useState([
    dayjs("11/10/2022"),
    dayjs("11/20/2022"),
  ]);
  const [dateRangeSeletorToggle, setDateRangeSeletorToggle] = useState(true);

  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <DatePicker
          selectedDate={selectedDate}
          onChange={(day) => {
            setSelectedDate(day);
          }}
        />
        <DateRangePicker
          dates={dateRange}
          // isStartDate={dateRangeSeletorToggle}
          onChange={(day) => {
            dateRangeSeletorToggle
              ? setDateRange([day, dateRange[1]])
              : setDateRange([dateRange[0], day]);
            setDateRangeSeletorToggle(!dateRangeSeletorToggle);
          }}
        />
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
  // return (
  //   <div
  //     className="container"
  //     style={{
  //       padding: "50px 0 100px 0",
  //       display: "flex",
  //       flexDirection: "column",
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <h1>Welcome to Foodie </h1>
  //     <Link
  //       href={`/restaurants`}
  //       style={{
  //         fontSize: "22px",
  //         paddingTop: "20px",
  //         display: "flex",
  //         flexDirection: "column",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <button
  //         style={{
  //           background: "#d6ccc2",
  //           borderRadius: "999px",
  //           boxShadow: "#403D39 0 10px 20px -10px",
  //           boxSizing: "border-box",
  //           color: "black",
  //           cursor: "pointer",
  //           fontSize: "16px",
  //           outline: "none",
  //           border: "none",
  //           padding: "8px 18px",
  //         }}
  //       >
  //         Restaurants
  //       </button>
  //     </Link>
  //   </div>
  // );
}
