import styled from "styled-components";
import { colors } from "@/Variables/variables";
import { useEffect, useState } from "react";

const styles = {
  border: colors.text.black,
  boxShadow: {
    default: colors.primary.yellow,
    hover: colors.primary.orange,
  },
};

const Image = styled.img`
  width: 150px;
`

const KeywordCont = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction:column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 160px;
  height: fit-content;
  // max-height: 60px;
  padding: 0.5rem;
  border: 2px solid ${styles.border};
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  box-shadow: 3px 3px 0px 1px ${styles.boxShadow.default};
  cursor: pointer;
  flex: 0.7 0 160px;
  order: 0;
  flex-grow: 0;

  :hover {
    font-weight: 700;
    box-shadow: 3px 3px 0px 1px ${styles.boxShadow.hover};
  }
`;

export default function Genre({
  text = "",
  handleClick = () => {},
  src = "",
  alt = ""
}) {
  const [image, setImage] = useState(false);

  useEffect(() => {
    if (src) {
      setImage (true)
    } else setImage(false)
  }, []);

  return (
    <KeywordCont onClick={handleClick}>
      {image && <Image src={src} alt={alt} />}
      <div>{text}</div>
    </KeywordCont>
  );
}
