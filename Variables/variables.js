import styled from "styled-components";

export const colors = {
  primary: {
    yellow: "#F0AA21",
    orange: "#F97C3F",
    blue: "#53C1EC",
  },
  backgroundWhite: "#FEFDFB",
  black: "#000000"
};

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir || "column"};
`;

export const Container = styled(FlexBox)`
  justify-content: ${(props)=> props.justifyContent};
  align-items: ${(props)=> props.alignItems};
  height: ${(props)=> props.height};
`;