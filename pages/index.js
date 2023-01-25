import { Inter } from "@next/font/google";
import React from "react";
import { useRouter } from "next/router";
import Button from "@/comp/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const router = useRouter();

  return (
    <>
      <div className="header">
        <h1>Welcome to Bookie</h1>
        <h2>Find a book you like.</h2>
      </div>
      <Button text="Get started" handleClick={() => router.push("/onboarding")} />
    </>
  );
};
