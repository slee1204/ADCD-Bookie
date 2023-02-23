import { Inter } from "@next/font/google";
import React from "react";
import { useRouter } from "next/router";
import Button from "@/comp/Button";
import styled from "styled-components";
import { FlexBox, Container } from "@/Variables/variables";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const Layout = styled(FlexBox)`
  height: 100vh;  
  justify-content: center;
`

export default function Home() {
  const router = useRouter();

  return (<>
    <Head>
      <title>Welcome to Bookie</title>
      <meta name="author" content="Anna Jeong, Sue Lee" />
      <meta property="og:title" content="MDIA 3190 Final Project" />
      <meta property="og:description" content="A book recommendation app; Find a book you like" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Layout>
      <Container
        alignItems="center"
        justifyContent="center"
        height="70%">
        <h1>Welcome to Bookie</h1>
        <h2>Find a book you like.</h2>
      </Container>
        <Button
          text="Get started"
          handleClick={() => router.push("/onboarding")}
        />
    </Layout>
  </>
  );
}
