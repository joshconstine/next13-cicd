
import { unstable_getServerSession } from "next-auth/next";
import { PrismaClient, Users } from '@prisma/client'
import DeleteButton from "../restaurants/[restaurantId]/DeleteButton";
import SingleComment from "../../components/comments/singleComment";
const prisma = new PrismaClient()




const Profile = async () => {
  const session: any = await unstable_getServerSession();
  const user: Users | null = await prisma.users.findUnique({
    where: {
      email: session.user.email
    }
  });
  const usersComments = await prisma.comment.findMany({
    where: {
      user_id: user?.id
    }
  })
  await prisma.$disconnect()

  return <> Profile
    <h1>{user?.user_name}</h1>

    {
      usersComments?.map((comment, i: number) => {
        return (
          <SingleComment comment={comment} />
        )
      })
    }

  </>
    ;
};

export default Profile;
