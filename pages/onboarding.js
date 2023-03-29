import { useEffect, useState } from "react";
import axios from "axios";
import Genre from "@/comp/Genre";
import Button from "@/comp/Button";
import { useRouter } from "next/router";
import styles from "../styles/Onboarding.module.css";
import Head from "next/head";
import genres from "@/public/data/genres.json"

export default function Onboarding() {
  const [genre, setGenre] = useState("fiction");
  const router = useRouter();

  const apiKey = "AIzaSyAQ69YB558lrwgkjXDixSDKwzUv8HaW9e0";

  useEffect(() => {
    console.log(genre);
    // showGenres()
  }, []);

  const chooseGenre = (genre) => {
    setGenre(genre);
    console.log(genre)
    axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&key=${apiKey}&maxResults=20`
    );
    router.push({pathname: "/results", query: {genre: genre}});
  };

  // const showRecommendations = async () => {
  //   // const apiKey = "AIzaSyAQ69YB558lrwgkjXDixSDKwzUv8HaW9e0";
  //   const results = await axios.get(
  //     `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&key=${apiKey}&maxResults=40`
  //   );
  //   console.log(results.data);
  //   router.push({pathname: "/results", query: {genre: genre}});
  // };

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
        <div className={styles.container}>
          <h1>Choose Your Favourite Genre</h1>
          <div className={styles.flexContainer}>
            {genres &&
              genres.map((o, i) => (
                <Genre
                  key={i}
                  handleClick={() => chooseGenre(o.query)}
                  text={o.title}
                  src={o.src}
                  alt={o.title + " Genre Icon"}
                />
              ))}
          </div>
        </div>
      </main>
    </>
  );
}
