import { faClose } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";
import { colors } from "@/Variables/variables";

const Book = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 258px;
  height: fit-content;
  border: 3.10748px solid var(--text-main-color);
  border-radius: 15px;
`;

const BookTitle = styled.h1`
font-weight: 700;
`

const BookSubtitle = styled.h2`
font-weight: 400;
font-color: var(--text-gray-color);
`
const BookAuthor = styled.h3`
font-weight: 400;
font-style: italic;
`



const Overlay = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 60vw;
height: 70vh;
justify-content: flex-start;
align-items: center;
display: flex;
flex-direction: column;
border: 2px solid var(--border-color);
padding: 3rem;
background-color: var(--main-background-color);
z-index: 9999;
border-radius: 10px;
overflow: scroll;
padding-top: 2rem;
`;
const ImageCont = styled.div``;
const InfoCont = styled.div`
gap: 2rem;

`;
const IconCont = styled.div`
  align-self: flex-end;
`;
const TextCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.5rem;
  margin-bottom: 0.7rem;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
`;

const Divider = styled.div`
width: 100%;
height: .5rem;
background: var(--primaryYellow);
order: 0;
align-self: stretch;
flex-grow: 0;
border-radius: 50px 50px 0px 0px;
`
const styles = {
  border: colors.text.black,
  boxShadow: {
    default: colors.primary.yellow,
    hover: colors.primary.orange,
  },
};

const HeadingBox = styled.div`
border: 2px solid ${styles.border};
width: fit-content;
padding: 0.2rem 0.4rem;
border-radius: 8px;
box-shadow: 2px 2px 0px 1px ${styles.boxShadow.default};
font-weight: 600;
font-style: italic;

`
const DescBox = styled.div`
width: 70%;
padding: 2rem 2rem 2rem 0;
`
const QuoteBox = styled.div`
`

export default function Card(props) {
  const [openBook, setOpenBook] = useState(false); // open overlay
  const [hideOverflow, setHideOverflow] = useState(false); // prevent scroll
  const handleOverlay = () => {
    if (!openBook && !hideOverflow){
    setOpenBook(true);
    setHideOverflow(true);
    document.body.style.overflow = 'hidden';

    } else if (openBook && hideOverflow){
      setOpenBook(false);
      setHideOverflow(false);
      document.body.style.overflow = 'auto';
    } else if (!openBook && !hideOverflow){
      setOpenBook(false);
      setHideOverflow(false);
      document.body.style.overflow = 'auto';
    } else if (openBook && !hideOverflow){
      setOpenBook(false);
      setHideOverflow(false);
      document.body.style.overflow = 'auto';
    }
  };
  
  
  return (
    <>
      <Book onClick={handleOverlay}>
        <div>
          <img src={props.src} />
        </div>
        <div>{props.title}</div>
        <div>{props.author}</div>
      </Book>
      {openBook && (
        <Overlay onClick={handleOverlay}>
          <IconCont>
            <Icon
              handleClick={handleOverlay}
              size="2x"
              icon={faClose}
            />
          </IconCont>
          <FlexBox>
            <Book>
              <div>
                <img src={props.src} />
              </div>
            </Book>
            <InfoCont>
              <BookTitle>{props.title}</BookTitle>
              <BookSubtitle>{props.subtitle}</BookSubtitle>
              <BookAuthor>Written By: {props.author}</BookAuthor>
              <TextCont>
                <HeadingBox>{props.categories}</HeadingBox>
                <HeadingBox>Published on {props.publishedDate}</HeadingBox>
                <HeadingBox>{props.pageCount} pages</HeadingBox>
              </TextCont>

              <div>
                <HeadingBox>Description: </HeadingBox>
                <DescBox>{props.description}</DescBox>
              </div>
              
            </InfoCont>
            
          </FlexBox>
          <Divider />
              <QuoteBox>
                <div>"{props.quote}"</div>
                <div>- by {props.quoteAuthor}</div>
                <div>{props.quoteCategory}</div>
              </QuoteBox> 
        </Overlay>
      )}
    </>

    // <>
    //   {props.
    //     book.map((item, index) => {props.
    //       // let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
    //       let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

    //       return (
    //         <div key={props.index}>
    //           <div className="card" onClick={props.() => {props. setShow(true); setBookItem(item) }}>
    //             <img src={props.thumbnail} alt="Harry Potter" />
    //             <div className="bottom">
    //               <h3 className="title">{props.item.volumeInfo.title}</h3>
    //               {props./* <p className="amount">&#36;{props.amount}</p> */}
    //             </div>
    //           </div>
    //           <Modal show={props.show} item={props.bookItem} onClose={props.() => setShow(false)} />
    //         </div>
    //       )

    //     })
    //   }

    // </>
  );
}
