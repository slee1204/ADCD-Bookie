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
    router.push({ pathname: "/results", query: { genre: genre } });
  };

  //Fetch Quote API
  const [quote, setQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [quoteCategories, setQuoteCategories] = useState("");
  // const [quoteData, setQuoteData] = useState([]);

  const param = router.query["genre"];
  console.log(param);
  const getCategory = async () => {
    if (param == "Action" || param == "action") {
      setQuoteCategories("courage");
    } else if (param == "comedy" || param == "Comedy") {
      setQuoteCategories("funny");
    } else if (param == "drama" || param == "Drama") {
      setQuoteCategories("life");
    } else if (param == "horror" || param == "Horror") {
      setQuoteCategories("fear");
    } else if (param == "romance" || param == "Romance") {
      setQuoteCategories("love");
    } else if (param == "thriller" || param == "Thriller") {
      setQuoteCategories("fear");
    } else if (param == "animation" || param == "Animation") {
      setQuoteCategories("happy"); // not working
    } else if (param == "fiction" || param == "Fiction") {
      setQuoteCategories("imagination");
    } else if (param == "crime" || param == "Crime") {
      setQuoteCategories("movie"); // not working
    } else if (param == "mystery" || param == "Mystery") {
      setQuoteCategories("movie"); // not working
    } else if (param == "musical" || param == "Musical") {
      setQuoteCategories("amazing");
    } else if (param == "animation" || param == "Animation") {
      setQuoteCategories("dreams"); // not working
    } else if (param == "western" || param == "Western") {
      setQuoteCategories("friendship");
    } else if (param == "adventure" || param == "Adventure") {
      setQuoteCategories("experience");
    } else if (param == "documentary" || param == "Documentary") {
      setQuoteCategories("life");
    } else if (param == "family" || param == "Family") {
      setQuoteCategories("family");
    }
  };

  useEffect(() => {
    getCategory();
  }, [param]);

  const fetchQuoteData = async () => {
    let options = {
      method: "GET",
      headers: { "x-api-key": "XviNrEZZkmHOAI5VAkY6WKi51ccgbQZAJRfa1Q1a" },
    };
    const quoteResults = await axios.get(
      `https://api.api-ninjas.com/v1/quotes?category=${quoteCategories}&limit=10`,
      options
    );
    let arrayOfData = [];
    const res = quoteResults.data;
    arrayOfData.push(res[0])
    console.log(arrayOfData);
    try {
      for (var i = 0; i < arrayOfData.length; i++) {

        if (arrayOfData[i].quote !== undefined) {
          setQuote(arrayOfData[i].quote);
        }
        if (arrayOfData[i].author !== undefined) {
          setQuoteAuthor(arrayOfData[i].author);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuoteData();
  }, [quoteCategories]);

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
            <h1 className="h1">Discover Other Genres</h1>
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
          <h1>For you</h1>
          <div className={styles.carouselBotton}>
            {forYouData.map((o, i) => {
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
                  quote={quote}
                  quoteAuthor={quoteAuthor}
                  quoteCategory={quoteCategories}
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
                  subtitle={o.volumeInfo.subtitle}
                  categories={o.volumeInfo.categories}
                  description={o.volumeInfo.description}
                  publishedDate={o.volumeInfo.publishedDate}
                  pageCount={o.volumeInfo.pageCount}
                  quote={quote}
                  quoteAuthor={quoteAuthor}
                  quoteCategory={quoteCategories}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
