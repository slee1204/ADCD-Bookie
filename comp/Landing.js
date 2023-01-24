import axios from "axios";
import React, {useState} from "react";
import Card from "./Card";


export default function Landing(){
    
    const [search, setSearch] = useState("")
    const [bookData, setBookData] = useState([]);
    const searchBook=(e)=>{
        if(e.key === "Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAILo6V3o56v_azR9rm8GZVzrBMgLogWDQ&maxResults=40')
            .then(res=>{
                setBookData(res.data.items)
            }).catch(err=>{
                console.log(err)
            })
        }
    }


    return(
        <>
            <div className= 'header'>
                <div className="row1">
                    <h1>Welcome to Bookie</h1>
                </div>
                <div className="row2">
                    <h2>Find your book</h2>
                    <div className="search">
                        <input 
                            type="text" 
                            placeholder="Enter Your Book Name" 
                            value={search}
                            onChange={e=>setSearch(e.target.value)}
                            onKeyDown={searchBook}
                        />
                        <button
                            onClick={searchBook}
                        >Search</button>
                    </div>
                    <img />
                </div>

            </div>

            <div className="container">
                {
                    <Card book={bookData} />
                }
            </div>
        </>
    )
}