import { colors } from "@/Variables/variables";
import styled from "styled-components";

const InputCont = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 350px;
  height: 52px;
  background: ${colors.backgroundWhite};
  border: 2px solid ${colors.black};
  border-radius: 10px;
  padding-left: 1rem;
`;

export default function Input({
  type = "text",
  placeholder = "placeholder text",
  handleChange = ()=> {}
}) {
  return <InputCont type={type} placeholder={placeholder} onChange={handleChange} />;
}
