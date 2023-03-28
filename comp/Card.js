import { faClose } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";

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

const Overlay = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  position: absolute;
  border: solid 1px black;
  height: fit-content;
  padding: 2rem;
  background-color: var(--main-background-color);
`;
const ImageCont = styled.div``;
const InfoCont = styled.div``;
const IconCont = styled.div`
  align-self: flex-end;
`;
const TextCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.5rem;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
`;

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
              <h1>{props.title}</h1>
              <h2>{props.subtitle}</h2>
              <h3>{props.author}</h3>
              <TextCont>
                <div>Genres: </div>
                <div>{props.categories}</div>
              </TextCont>
              <TextCont>
                <div>Published Date: </div>
                <div>{props.publishedDate}</div>
              </TextCont>
              <TextCont>
                <div>Publisher: </div>
                <div>{props.publisher}</div>
              </TextCont>
              <TextCont>
                <div>Page Count: </div>
                <div>{props.pageCount}</div>
              </TextCont>
              <div>
                <div>Description: </div>
                <div>{props.description}</div>
              </div>
              
            </InfoCont>
          </FlexBox>
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
