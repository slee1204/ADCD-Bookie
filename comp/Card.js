import React, { useState } from "react"
import styled from "styled-components";

const CardCont = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 258px;
height: 335px;
border: 3.10748px solid var(--text-main-color);
border-radius: 15px;
`

export default function Card({ title = "", author = "", src = "" }) {

  return (
    <CardCont>
      <div>
        <img src={src} />
      </div>
      <div>{title}</div>
      <div>{author}</div>
    </CardCont>

    // <>
    //   {
    //     book.map((item, index) => {
    //       // let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
    //       let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

    //       return (
    //         <div key={index}>
    //           <div className="card" onClick={() => { setShow(true); setBookItem(item) }}>
    //             <img src={thumbnail} alt="Harry Potter" />
    //             <div className="bottom">
    //               <h3 className="title">{item.volumeInfo.title}</h3>
    //               {/* <p className="amount">&#36;{amount}</p> */}
    //             </div>
    //           </div>
    //           <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
    //         </div>
    //       )


    //     })
    //   }

    // </>
  )
}