import React, { useState } from "react"
import Modal from "./Modal";

export default function Card({book}){

    const [show, setShow] = useState(false);
    const [bookItem, setBookItem] = useState();

    return(
        <>
            {
                book.map((item, index)=>{
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    if(thumbnail != undefined && amount != undefined){
                        return(
                        <>
                            <div className="card" key={index} onClick={()=>{ setShow(true); setBookItem(item)}}>
                                <img src={thumbnail} alt="Harry Potter" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">&#36;{amount}</p>
                                </div>
                            </div>
                            <Modal show={show} item={bookItem} onClose={()=>setShow(false)} /> 
                        </>
                        )    
                    }
                    
                })
            }
            
        </>
    )
}