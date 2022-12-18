
import { unstable_getServerSession } from "next-auth/next";
import { PrismaClient, Users } from '@prisma/client'
import DeleteButton from "../restaurants/[restaurantId]/DeleteButton";
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
      usersComments?.map((review, i: number) => {
        const elementId = `comment-${review.id}`
        return (
          <div
            key={i}
            id={elementId}
            style={{
              width: "300px",
              backgroundColor: "white",
              border: "1px solid #d5bdaf",
              borderRadius: "15px",
              padding: "15px",
              margin: "15px 0px",
            }}
          >
            <p>{'Josh'}</p>
            <p>{review.text}</p>
            <DeleteButton id={review.id} elementId={elementId} />
          </div>
        );
      })
    }

  </>
    ;
};

export default Profile;
