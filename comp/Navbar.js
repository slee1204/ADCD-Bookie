import { colors } from "@/Variables/variables";
import styled from "styled-components";
import { useRouter } from "next/router";

const NavbarCont = styled.div`
  position: relative;
  height: 90px;
  width: 100%;
  background-color: ${colors.primary.yellow};
  justify-content: center;
  align-items: center;
`;

const Comps = styled.div`
  margin: auto 7.5rem;
  background-color: transparent;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 50%;
  background-color: transparent;
  cursor: pointer;
`;

export default function Navbar() {
  const router = useRouter();
  const logo = "logo.svg";

  return (
    <NavbarCont id="navbar">
      <Comps>
        <Logo src={logo} onClick={() => router.push("/")} />
      </Comps>
    </NavbarCont>
  );
}
