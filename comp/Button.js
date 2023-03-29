import styled from "styled-components";
import { colors } from "@/Variables/variables";

const styles = {
  border: "#000000",
  boxShadow: {
    default: colors.primary.yellow,
    hover: colors.primary.orange
  }
}

const ButtonCont = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 367px;
  height: 70px;
  min-height: 70px;
  border: 2px solid ${styles.border};
  border-radius: 10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  box-shadow: 3px 3px 0px 1px ${styles.boxShadow.default};
  cursor: pointer;

  :hover {
    font-weight: 600;
    box-shadow: 3px 3px 0px 1px ${styles.boxShadow.hover};
  }
`

export default function Button({
  text = "button text",
  handleClick = () => { }
}) {
  return <ButtonCont
    onClick={handleClick}
  >{text}</ButtonCont>
}