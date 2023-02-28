import { colors } from "@/Variables/variables";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useRouter } from "next/router";


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

const Logo = styled.img`
  height: 50%;
  background-color: transparent;
  cursor: pointer;
`

export default function Navbar() {

  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  if (searchInput.length > 0) {
    data.filter((category) => {
      return category.match(searchInput);
    });
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const logo = "LOGO.svg"

  return <NavbarCont>
    <Comps>
      <Logo src={logo} onClick={()=> router.push("/")} />
      <SearchBar handleChange={handleChange} />
    </Comps>
  </NavbarCont>
}
