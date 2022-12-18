
import { unstable_getServerSession } from "next-auth/next";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { PrismaClient, Users } from '@prisma/client'
import { userAgent } from "next/server";
const prisma = new PrismaClient()




const Profile = async () => {
  const session: any = await unstable_getServerSession();
  // const user: IUser = await getUserData(session.user.email)
  const user: Users | null = await prisma.users.findUnique({
    where: {
      email: session.user.email
    }
  });
  await prisma.$disconnect()

  return <> Profile
    <h1>{user?.user_name}</h1></>;
};

export default Profile;
