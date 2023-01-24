import Head from 'next/head'
import { Inter } from '@next/font/google'
import axios from 'axios'
import React, { useState } from 'react'
import Card from '@/comp/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [keyword, setKeyWord] = useState("")
    const [bookData, setBookData] = useState([]);
    const searchBook=(e)=>{
        
            if(e.key === "Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q=subject:'+keyword+'&key=AIzaSyAILo6V3o56v_azR9rm8GZVzrBMgLogWDQ&maxResults=40&orderBy=relevance')
            .then(res=>{
            setBookData(res.data.items)
            for (let i = 0; i < res.data.items.length; i++){
            console.log(res.data.items[i].volumeInfo.categories)}
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
                        placeholder="Enter Genre of Book" 
                        value={keyword}
                        onChange={e=>setKeyWord(e.target.value)}
                        onKeyDown={searchBook}
                        />
                        <button
                        
                        >Search</button>
                    </div>
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