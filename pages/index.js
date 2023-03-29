import React from "react";
import { useRouter } from "next/router";
import Button from "@/comp/Button";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const src = "landing.svg";

  return (
    <>
      <Head>
        <title>Welcome to Bookie</title>
        <meta name="author" content="Anna Jeong, Sue Lee" />
        <meta property="og:title" content="MDIA 3190 Final Project" />
        <meta
          property="og:description"
          content="A book recommendation app; Find a book you like"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.em}>WELCOME TO</div>
              <img className={styles.logo} src="/LOGO.svg" alt="bookie logo" />
              <div className={styles.textCont}>
                <p>
                  Find your{" "}
                  <span className={styles.em}>next favourite book</span> today!
                </p>
                <p>
                  Explore a world of new reading possibilities by selecting your favourite book categories on our personalized recommendation website.
                </p>
              </div>
            </div>
            <Button
              text="Get started"
              handleClick={() => router.push("/onboarding")}
            />
          </div>
          <div className={styles.landingImg}>
            <img src={src} alt="Bookie landing illustration" />
          </div>
        </div>
      </main>
    </>
  );
}
