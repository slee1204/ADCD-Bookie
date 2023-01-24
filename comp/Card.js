import React, { useState } from "react"
import Modal from "./Modal";

export default function Card({book = []}){

    const [show, setShow] = useState(false);
    const [bookItem, setBookItem] = useState();
    // console.log(book)
    return(
        <>
            {
                book.map((item, index)=>{
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    
                        return(
                        <div key = {index}>
                            <div className="card"  onClick={()=>{ setShow(true); setBookItem(item)}}>
                                <img src={thumbnail} alt="Harry Potter" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    {/* <p className="amount">&#36;{amount}</p> */}
                                </div>
                            </div>
                            <Modal show={show} item={bookItem} onClose={()=>setShow(false)} /> 
                        </div>
                        )    
                    
                    
                })
            }
            
        </>
    )
}