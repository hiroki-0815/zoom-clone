import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUPPage = () => {
  return (
    <main className="flex h-screen justify-center items-center w-full">
      <SignUp />
    </main>
  );
};

export default SignUPPage;
