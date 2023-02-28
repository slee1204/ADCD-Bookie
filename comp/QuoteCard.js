import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  // max-width: 600px;
  height: 100%;
  // max-height: 360px;
`;

const QuoteMark = styled.div`
  font-family: "Racing Sans One", cursive;
  font-size: 5rem;
  width: 100%;
  margin: 0;
  height: fit-content;
  text-align: ${props => props.textAlign}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
  background: var(--main-background-color);
  border: 2px solid var(--border-color);
  QuoteContainer-shadow: 3px 3px 0px 1px var(--primaryYellow);
  border-radius: 10px;
  height: 100%;
`;

const Bar = styled.div`
  width: .7rem;
  height: 100%;
  background: var(--primaryYellow);
  border-radius: 22px 0px 0px 22px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  justify-content: flex-start;
`;

const Content = styled.div`
  width: 100%;
  text-align: ${props => props.textAlign}
`;

export default function QuoteCard({
  quote = "Lorem ipsum dolor sit amet consectetur. Blandit quam lacinia erat euismod mi bibendum elementum. Integer laoreet quam est hac parturient in.",
  author = "author",
  category = "category",
}) {
  return (
    <Card>
      <QuoteMark textAlign="left">“</QuoteMark>
      <Container>
        <Bar />
        <QuoteContainer>
          <Content>{quote}</Content>
          <Content textAlign="right">- {author}</Content>
          <Content textAlign="right">- {category}</Content>
        </QuoteContainer>
      </Container>
      <QuoteMark textAlign="right">”</QuoteMark>
    </Card>
  );
}
