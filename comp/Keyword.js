import styled from "styled-components";
import { colors } from "@/Variables/variables";

const styles = {
  border: "#000000",
  boxShadow: {
    default: colors.primary.yellow,
    hover: colors.primary.orange
  }
}
const InputCont = styled.input`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0.5rem;
  border: 2px solid ${styles.border};
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  box-shadow: 3px 3px 0px 1px ${styles.boxShadow.default};
  cursor: pointer;
  flex: none;
order: 0;
flex-grow: 0;

  :hover {
    font-weight: 600;
    box-shadow: 3px 3px 0px 1px ${styles.boxShadow.hover};
  }
`
export default function Keyword({ value = "keyword", handleChange = () => { }, handleClick = () => { } }) {
  return (
    <InputCont
      onChange={handleChange}
      onClick={handleClick}
      value={value}
      type="button"
    />
  );
}
