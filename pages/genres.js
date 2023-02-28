import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/comp/Card";
import Head from "next/head";
import styles from "../styles/Genres.module.css"
import { genres } from "@/public/data/genres";
import Genre from "@/comp/Genre";

export default function Genres() {
  const [genre, setGenre] = useState("");
  const [bookData, setBookData] = useState([]);
  const router = useRouter();
  const maxResults = 40;

  const fetchData = async () => {
    const apiKey = "AIzaSyAQ69YB558lrwgkjXDixSDKwzUv8HaW9e0";

    if (Object.keys(genre).length !== 0) {
      const results = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&key=${apiKey}&maxResults=${maxResults}`
      );
      const clearBookData = results.data.items.filter(
        (book) => book.volumeInfo && book.volumeInfo.imageLinks !== undefined
      );
      setBookData(clearBookData);
    }
  };

  const chooseGenre = (genre) => {
    setGenre(genre.charAt(0).toUpperCase() + genre.slice(1))
  }

  useEffect(() => {
    const chosenGenre = router.query.genre;
    const capitalizedGenre =
      chosenGenre.charAt(0).toUpperCase() + chosenGenre.slice(1);
    setGenre(capitalizedGenre);
  }, [router.query.genre]);

  useEffect(() => {
    fetchData();
  }, [genre]);

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
          <div>
            <h1>Browse Other Genres</h1>
            <div className={styles.carousel}>
              {genres.map((o, i) => (
                <Genre
                  key={i}
                  handleClick={() => chooseGenre(o.query)}
                  text={o.title}
                />
              ))}
            </div>
          </div>
          <div>
            <h1>{genre}</h1>
            <div className={styles.wrap}>
              {bookData.map((o, i) => {
                return (
                  <Card
                  key={i}
                  title={o.volumeInfo.title}
                  author={o.volumeInfo.authors}
                  src={o.volumeInfo.imageLinks.smallThumbnail}
                  subtitle={o.volumeInfo.subtitle}
                  categories={o.volumeInfo.categories}
                  description={o.volumeInfo.description}
                  publishedDate={o.volumeInfo.publishedDate}
                  pageCount={o.volumeInfo.pageCount}
                />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
