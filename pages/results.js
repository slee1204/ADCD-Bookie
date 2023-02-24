import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Card from "@/comp/Card";
import axios from "axios";
import styles from "../styles/Results.module.css";
import { genres } from "@/public/data/genres";
import Genre from "@/comp/Genre";
import Head from "next/head";

export default function Results() {
  const router = useRouter();
  const [genre, setGenre] = useState("");
  const [forYouData, setForYouData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const maxNum = 10;

  const fetchData = async () => {
    const apiKey = "AIzaSyAQ69YB558lrwgkjXDixSDKwzUv8HaW9e0";

    if (Object.keys(genre).length !== 0) {
      const forYouResults = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&key=${apiKey}`
      );
      const forYouBooks = forYouResults.data.items.filter(
        (book) => book.volumeInfo && book.volumeInfo.imageLinks !== undefined
      );
      setForYouData(forYouBooks);
    }

    const popularResults = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=subject:""&key=${apiKey}`
    );
    const popularBooks = popularResults.data.items.filter(
      (book) =>
        book.volumeInfo.imageLinks !== undefined &&
        book.volumeInfo.averageRating !== undefined &&
        book.volumeInfo.averageRating > 3
    );
    setPopularData(popularBooks);
  };

  useEffect(() => {
    setGenre(router.query.genre);
  }, [router.query.genre]);

  useEffect(() => {
    fetchData();
  }, [genre]);

  const chooseGenre = (genre) => {
    router.push({ pathname: "/genres", query: { genre: genre } });
  };

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
          <h1>For you</h1>
          <div className={styles.carousel}>
            {forYouData.map((o, i) => {
              return (
                <Card
                  key={i}
                  title={o.volumeInfo.title}
                  author={o.volumeInfo.authors}
                  src={o.volumeInfo.imageLinks.smallThumbnail}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.container}>
          <h1>Popular</h1>
          <div className={styles.carousel}>
            {popularData.map((o, i) => {
              return (
                <Card
                  key={i}
                  title={o.volumeInfo.title}
                  author={o.volumeInfo.authors}
                  src={o.volumeInfo.imageLinks.smallThumbnail}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.container}>
          <h1>Discover Other Genres </h1>
          <div className={styles.carousel}>
            {genres &&
              genres.map((o, i) => (
                <Genre
                  key={i}
                  handleClick={() => chooseGenre(o.query)}
                  text={o.title}
                />
              ))}
          </div>
        </div>
        {/* 
    <div>
      <input
        type="text"
        placeholder="Enter keyword of Book"
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={searchBook}
      />
      <Button text="Search" handleClick={searchBook} />
    </div>
    <div className="container">
      <Card book={bookData} />
    </div> */}
      </main>
    </>
  );
}
