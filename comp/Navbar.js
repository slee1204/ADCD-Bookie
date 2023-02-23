import { colors } from "@/Variables/variables";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { useState } from "react";

const NavbarCont = styled.div`
  position: relative;
  height: 90px;
  width: 100vw;
  background-color: ${colors.primary.yellow};
  justify-content: center;
  align-items: center;
`
const Comps = styled.div`
  margin: auto 7.5rem;
  background-color: transparent;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function Navbar() {

  const [searchInput, setSearchInput] = useState("");

  if (searchInput.length > 0) {
    data.filter((category) => {
      return category.match(searchInput);
    });
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const logo = "tobechanged.png"

  return <NavbarCont>
    <Comps>
      <img src={logo} />
      <SearchBar handleChange={handleChange} />
    </Comps>
  </NavbarCont>
}
