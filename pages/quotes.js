import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "@/comp/Button";
import Card from "@/comp/Card";
import Head from "next/head";
import axios from "axios";
import styles from "../styles/Quotes.module.css";
import QuoteCard from "@/comp/QuoteCard";


export default function Quotes() {
  const router = useRouter();

  const param = router.query['0'];

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [category, setCategory] = useState("");

  // const apiKey = "vX4NrS8rBEKQFAhv62aqYQ==AfpJIs9bXgwLjoh3";
  // const category = "fear";
  const limit = "5";
  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  let options = {
    method: 'GET',
    headers: { 'x-api-key': 'XviNrEZZkmHOAI5VAkY6WKi51ccgbQZAJRfa1Q1a' }
  }

  const getCategory = () => {
    if (param == "Action" || param == "action") {
      setGenre("courage")
    } else if (param == "comedy" || param == "Comedy"){
      setGenre("funny")
    } else if (param == "drama" || param == "Drama"){
      setGenre("life")
    } else if (param == "horror" || param == "Horror"){
      setGenre("happy")
    } else if (param == "romance" || param == "Romance"){
      setGenre("love")
    } else if (param == "thriller" || param == "Thriller"){
      setGenre("fear")
    } else if (param == "animation" || param == "Animation"){
      setGenre("happy")
    } else if (param == "fiction" || param == "Fiction"){
      setGenre("imagination")
    } else if (param == "crime" || param == "Crime"){
      setGenre("movie")
    } else if (param == "mysetery" || param == "Mysetery"){
      setGenre("movie")
    } else if (param == "musical" || param == "Musical"){
      setGenre("amazing")
    } else if (param == "animation" || param == "Animation"){
      setGenre("dreams")
    } else if (param == "western" || param == "Western"){
      setGenre("friendship")
    } else if (param == "adventure" || param == "Adventure"){
      setGenre("experience")
    } else if (param == "documentary" || param == "Documentary"){
      setGenre("life")
    } else if (param == "family" || param == "Family"){
      setGenre("family")
    }
    setCategory(genre)
  }

  useEffect(() => {
    getCategory();
    }, [param]);


  const quoteAPI = async () => {
    // const res = await axios.get (url, options)
    // const data = await res.data
    // console.log(data)
    // setQuery();
    let arrayofQuotes = [];
    // setQuery();
    try {
      const data = await axios.get(url, options);
      console.log(data);
      arrayofQuotes = data.data[0];
    } catch (error)
    {
      console.log(error);
    }

    try {
      setQuote(arrayofQuotes.quote);
      setAuthor(arrayofQuotes.author);
      setCategory(arrayofQuotes.category)
      console.log(category)
    } catch (error) {
      console.log(error);
    }

  };


  useEffect(() => {
    quoteAPI();
  }, []);


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
            <div>
              <h1>For you</h1>
              <div className={styles.carousel}>
                <Card />
              </div>
            </div>
          </div>

          <div className={styles.quoteCont}>
            <QuoteCard 
              quote={quote}
              author={author}
              category={category}
            />
          </div>
          

        <Button
          text="New Quote"
          handleClick={() => {quoteAPI()}}
        />
        </div>
      </main>
    </>
  );
  
}



  // let query1 = router.query.query;

  // const setQuery = () => {
  // console.log(router)
  // if (query1 == "0=Action" || "0=action") {
  //   setCategory("courage")
  // } else if (query1 == "comedy" || "Comedy"){
  //   setCategory("funny")
  // } else if (query1 == "Drama"){
  //   setCategory("life")
  // } else if (query1 == "Horror"){
  //   setCategory("fear")
  // } else if (query1 == "Romance"){
  //   setCategory("love")
  // } else if (query1 == "Thriller"){
  //   setCategory("fear")
  // } else if (query1 == "Animation"){
  //   setCategory("happy")
  // } else if (query1 == "Fiction"){
  //   setCategory("imagination")
  // } else if (query1 == "Crime"){
  //   setCategory("movie")
  // } else if (query1 == "Mystery"){
  //   setCategory("movie")
  // } else if (query1 == "Musical"){
  //   setCategory("amazing")
  // } else if (query1 == "Western"){
  //   setCategory("friendship")
  // } else if (query1 == "Adventure"){
  //   setCategory("experience")
  // } else if (query1 == "Documentary"){
  //   setCategory("life")
  // } else if (query1 == "Family"){
  //   setCategory("family")
  // }
  // };