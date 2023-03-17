import styled from "styled-components";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import axios from "axios";
import Card from "./Card";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SearchBarCont = styled.div`
  display: flex;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 12px 15px;
  width: 350px;
  height: 48px;
  border: 2px solid var(--border-color);
  border-radius: 10px;
`

const Input = styled.input`
  width: 100%;
  border: none;
`

const SearchIcon = styled(Icon)`
width: 20px;

`


export default function SearchBar() {
  
  const r = useRouter();

  const [searchInput, setSearchInput] = useState("");
  const [bookData, setBookData] = useState([]);



  const searchBook=(e)=>{
    let cat = "";
    if(e.key === "Enter"){
      axios.get('https://www.googleapis.com/books/v1/volumes?q=subject:'+searchInput+'&key=AIzaSyAILo6V3o56v_azR9rm8GZVzrBMgLogWDQ&maxResults=40&orderBy=relevance')
      .then(res=>{
      setBookData(res.data.items)
      for (let i = 0; i < res.data.items.length; i++){
      cat = res.data.items[i].volumeInfo.categories
      // console.log(cat)
    }
      }).catch(err=>{
      console.log(err)
      })
      r.push({ pathname: "/quotes", query: `0=`+searchInput})
      setSearchInput("")
  }

  }





  // const handleInputChange = (e) => {
  //   setSearchInput(e.target.value);
  // };

  const handleSearch = () => {
    // do something with the search searchInput
    console.log(searchInput);
  };

  return <SearchBarCont>
    <Input
      type="text"
      placeholder="Search here..."
      onChange={e=>setSearchInput(e.target.value)}
      value={searchInput}
      onKeyDown={searchBook}>
    </Input>

    {/* <SearchIcon icon={faSearch} size="1x"/> */}
  </SearchBarCont>
}
