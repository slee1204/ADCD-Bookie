import { useState } from "react";
import { useRouter } from "next/router";
import Card from "@/comp/Card";
import axios from "axios";
import Button from "@/comp/Button";

export default function Dashboard() {

  const [search, setSearch] = useState("")
  const [bookData, setBookData] = useState([]);

  const apiKey = "AIzaSyDwqGo8hs4GSZ-NDeHRIGbVeL66zKGNDlM"

  const searchBook = (e) => {
    if (e.key === "Enter") {
      axios.get(`https:www.googleapis.com/books/v1/volumes?q=subject:${search}&key=${apiKey}&maxResults=40`)
        .then(res => {
          setBookData(res.data.items)
        }).catch(err => {
          console.log(err)
        })
    }
  }

  return <div>
    <h1>For you</h1>
    <div className="search">
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
    </div>
  </div>
}