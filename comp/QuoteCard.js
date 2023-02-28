import React from "react"
import styled from "styled-components";

const QuoteContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 20px;
width: 100%;
max-width: 600px;
`

const QuoteMark1 = styled.div`
font-family: 'Racing Sans One', cursive;
font-size: 5rem;
text-align: left;
width: 100%;
line-height: 1;
margin-bottom: -10px;
`

const QuoteMark2 = styled.div`
font-family: 'Racing Sans One', cursive;
font-size: 5rem;
text-align: right;
width: 100%;
line-height: 1;
margin-top: 20px
`

const QuoteBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 35px 30px;
gap: 15px;
background: #FFFFFF;
border: 2px solid #131313;
box-shadow: 3px 3px 0px 1px #FFC149;
border-radius: 10px;
height: 100%;
`

const Bar = styled.div`
width: 10px;
height: 100%;
background: #FFC149;
border-radius: 22.1px 0px 0px 22.1px;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
`
const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;
gap: 30px;
max-width: 520px;
flex: none;
order: 1;
flex-grow: 0;
width: 100%;
`

const QuoteSentence = styled.p`
width: 90%;
max-width: 520px;
overflow-wrap: break-word;
height: auto;
`

const QuoteAuthor = styled.p`
width: 90%;
max-width: 520px;
overflow-wrap: break-word;
height: auto;
text-align: right;
`

export default function QuoteCard({ 
  quote = "Lorem ipsum dolor sit amet consectetur. Blandit quam lacinia erat euismod mi bibendum elementum. Integer laoreet quam est hac parturient in.", 
  author = "a friend",
  category = "category"
}) {

  return (
    <QuoteContainer>
      <QuoteMark1>“</QuoteMark1>
        <QuoteBox>

            <Bar />
            <Box>
              <QuoteSentence>{quote}</QuoteSentence>
              <QuoteAuthor>- {author}</QuoteAuthor>
              <QuoteAuthor>- {category}</QuoteAuthor>
            </Box>

        </QuoteBox>
      <QuoteMark2>”</QuoteMark2>
    </QuoteContainer>

)}