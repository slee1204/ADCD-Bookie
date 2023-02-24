import { Inter } from "@next/font/google";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "@/comp/Button";
import styled from "styled-components";
import { FlexBox, Container } from "@/Variables/variables";
import Head from "next/head";
import axios from "axios";


const inter = Inter({ subsets: ["latin"] });

const Layout = styled(FlexBox)`
  height: 100vh;
  justify-content: center;
`;

export default function Home() {
  const router = useRouter();

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // const apiKey = "vX4NrS8rBEKQFAhv62aqYQ==AfpJIs9bXgwLjoh3";
  const category = "fear";
  const limit = "5";
  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  let options = {
    method: 'GET',
    headers: { 'x-api-key': 'XviNrEZZkmHOAI5VAkY6WKi51ccgbQZAJRfa1Q1a' }
  }
  
  const quoteAPI = async () => {
    // const res = await axios.get (url, options)
    // const data = await res.data
    // console.log(data)

    let arrayofQuotes = [];
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
    } catch (error) {
      console.log(error);
    }
  }

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
      <Layout>
        <Container alignItems="center" justifyContent="center" height="70%">
          <div className="quote-box">
            <p id="quote">{quote}</p>
            <small id="author">- {author}</small>
          </div>
        </Container>
        <Button
          text="New Quote"
          handleClick={() => {quoteAPI()}}
        />
      </Layout>
    </>
  );
}