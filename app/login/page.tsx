"use client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const handleSignIn = () => {
    signIn("google");
  };
  if (status === "authenticated") {
    router.push("/profile");
  }

  return (
    <>
      Not signed in <br />
      <button onClick={handleSignIn}>Sign in</button>
    </>
  );
};

export default Login;
