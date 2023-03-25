import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { genres } from "@/public/data/genres";

import Card from "@/comp/Card";
import styles from "../styles/Results.module.css";
import Genre from "@/comp/Genre";
import Head from "next/head";
import QuoteCard from "@/comp/QuoteCard";

export default function Test() {

  //책만
  const router = useRouter();
  const [genre, setGenre] = useState("");
  const [forYouData, setForYouData] = useState([]);
  const [popularData, setPopularData] = useState([]);

  const fetchBookData = async () => {
    const bookApiKey = "AIzaSyAQ69YB558lrwgkjXDixSDKwzUv8HaW9e0";
      
      if (Object.keys(genre).length !== 0) {
        const forYouResults = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&key=${bookApiKey}`
        );
        const forYouBooks = forYouResults.data.items.filter(
          (book) => book.volumeInfo && book.volumeInfo.imageLinks !== undefined
        );
        setForYouData(forYouBooks);
      }

      const popularResults = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:""&key=${bookApiKey}`
      );
      const popularBooks = popularResults.data.items.filter(
        (book) =>
          book.volumeInfo.imageLinks !== undefined &&
          book.volumeInfo.averageRating !== undefined &&
          book.volumeInfo.averageRating > 3
      );
      setPopularData(popularBooks);
    };

    // //장르설정하기
    useEffect(() => {
      setGenre(router.query.genre);
    }, [router.query.genre]);

    // //책 가져오기 한번만
    useEffect(() => {
      fetchBookData();
    }, [genre]);

    //장르 선택하기
    const chooseGenre = (genre) => {
      router.push({ pathname: "/genres", query: { genre: genre } });
    };


    //명언
    const [quote, setQuote] = useState("");
    const [quoteAuthor, setQuoteAuthor] = useState("");
    const [quoteCategories, setQuoteCategories] = useState("");
    const [quoteData, setQuoteData] = useState([]);

    const param = router.query['genre'];

    const getCategory = () => {
      if (param == "Action" || param == "action") {
        setQuoteCategories("courage")
      } else if (param == "comedy" || param == "Comedy"){
        setQuoteCategories("funny")
      } else if (param == "drama" || param == "Drama"){
        setQuoteCategories("life")
      } else if (param == "horror" || param == "Horror"){
        setQuoteCategories("fear")
      } else if (param == "romance" || param == "Romance"){
        setQuoteCategories("love")
      } else if (param == "thriller" || param == "Thriller"){
        setQuoteCategories("fear")
      } else if (param == "animation" || param == "Animation"){
        setQuoteCategories("happy") // not working
      } else if (param == "fiction" || param == "Fiction"){
        setQuoteCategories("imagination")
      } else if (param == "crime" || param == "Crime"){
        setQuoteCategories("movie") // not working
      } else if (param == "mystery" || param == "Mystery"){
        setQuoteCategories("movie") // not working
      } else if (param == "musical" || param == "Musical"){
        setQuoteCategories("amazing")
      } else if (param == "animation" || param == "Animation"){
        setQuoteCategories("dreams") // not working
      } else if (param == "western" || param == "Western"){
        setQuoteCategories("friendship")
      } else if (param == "adventure" || param == "Adventure"){
        setQuoteCategories("experience")
      } else if (param == "documentary" || param == "Documentary"){
        setQuoteCategories("life")
      } else if (param == "family" || param == "Family"){
        setQuoteCategories("family")
      }
    }

    const fetchQuoteData = async () => {
      getCategory();
      let options = {
        method: 'GET',
        headers: { 'x-api-key': 'XviNrEZZkmHOAI5VAkY6WKi51ccgbQZAJRfa1Q1a' }
      }
      const quoteResults = await axios.get(
        `https://api.api-ninjas.com/v1/quotes?category=${quoteCategories}`, options
      );
      axios.all([quoteResults]).then(
        axios.spread((...allData)=>{
          const forYouQuote = allData[0].data;

          setQuoteData(forYouQuote);
          setQuote(forYouQuote[0].quote);
          setQuoteAuthor(forYouQuote[0].author);
          setQuoteCategories(forYouQuote[0].category);

          console.log(forYouQuote)
        })
      )
    };
    

    useEffect(() => {
      fetchQuoteData();
    }, [quoteCategories]);



    // const quoteAPI = `https://api.api-ninjas.com/v1/quotes?category=${genre}}`;

    // const getBookInfo = axios.get(fetchBookData);
    // const getQuoteInfo = axios.get(quoteAPI, options);
    // axios.all([getBookInfo, getQuoteInfo]).then(
    //   axios.spread((...allData)=>{

        // const allDataBook = {
        // title: allData[0].data.items[0].volumeInfo.title,
        // bookAuthor: allData[0].data.items[0].volumeInfo.authors,
        // src: allData[0].data.items[0].volumeInfo.imageLinks.thumbnail,
        // subtitle: allData[0].data.items[0].volumeInfo.subtitle,
        // categories: allData[0].data.items[0].volumeInfo.categories,
        // description: allData[0].data.items[0].volumeInfo.description,
        // publishedDate: allData[0].data.items[0].volumeInfo.publishedDate,
        // }
        // const allDataQuote = {
        //   quote: allData[1].data[0].quote,
        //   quoteAuthor: allData[1].data[0].author,
        //   quoteCategory: allData[1].data[0].category,
        // }

        // const allDataBook = allData[0]
        // const allDataQuote = allData[1]


        // setBookInfo(allDataBook)
        // setQuoteInfo(allDataQuote)

  //       console.log(allDataBook)
  //       console.log(allDataQuote)

  //     })
  //   )
  // }
  
  
  return(
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
          <h1>For you</h1>
          <div className={styles.carousel}>
            {forYouData.map((o, i) => {
              return (
                <div>
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
                </div>
              );
            })}
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


    {/* Book Info: <br/>
      {bookInfo.title} <br/>
      {bookInfo.bookAuthor} <br/>
      <img src ={bookInfo.src} /> <br/>
      {bookInfo.subtitle} <br/>
      {bookInfo.categories} <br/>
      {bookInfo.description} <br/>
      {bookInfo.publishedDate} <br/>

      Quote Info: <br/>
      {quoteInfo.quote} <br/>
      {quoteInfo.quoteAuthor} <br/>
      {quoteInfo.quoteCategory} <br/> */}
      {/* <div className={styles.carousel}>
        {openOverlay ? (
          <div>
            {forYouData.map((o, i) => (
              <Card
                key={i}
                title={o.volumeInfo.title}
                author={o.volumeInfo.authors}
                src={o.volumeInfo.imageLinks.smallThumbnail}
                subtitle={o.volumeInfo.subtitle}
                categories={o.volumeInfo.categories}
                description={o.volumeInfo.description}
                publishedDate={o.volumeInfo.publishedDate}
              />
            ))}
            {quoteData.map((o, i) => (
              <QuoteCard
                key={i}
                quote={o.quote}
                quoteAuthor={o.author}
                quoteCategory={o.category}
              />
            ))

            }
             */}
              {/* <QuoteCard

                quote={quoteInfo.quote}
                quoteAuthor={quoteInfo.author}
                quoteCategory={quoteInfo.category}
              /> */}
            
          {/* </div>
        ) : (
          <div className={styles.carousel}>
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
                onClick={() => setOpenOverlay(!openOverlay)}
              />
              )
            })}
          </div>
        )}
      </div> */}
