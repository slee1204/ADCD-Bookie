import styled from "styled-components";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

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

  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    // do something with the search searchInput
    console.log(searchInput);
  };

  return <SearchBarCont>
    <Input
      type="search"
      placeholder="Search here..."
      onChange={handleInputChange}
      value={searchInput}>
    </Input>
    {/* <SearchIcon icon={faSearch} size="1x"/> */}
  </SearchBarCont>
}
