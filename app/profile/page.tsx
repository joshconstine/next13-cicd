import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

const Profile = async () => {
  const session = await unstable_getServerSession();

  return <>Profile</>;
};

export default Profile;
