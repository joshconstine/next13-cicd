"use client";
import { unstable_getServerSession } from "next-auth/next";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Profile = () => {
  // const session = await unstable_getServerSession();
  const session = useSession();
  const router = useRouter();
  if (!session) {
    router.push("/login");
  }

  return <>Profile</>;
};

export default Profile;
