import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import "./News.css"


function NewsPage() {
    const [articles, setArticles] = useState([])
    // const [feed, setFeed] = useState([])

    // useEffect(() => {
    //     fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0b56cebed0664261aea020a97a1c704a")
    //         .then(r => r.json())
    //         .then(r => setArticles(r.articles))
    // }, [])


    // const articleMap = articles.map((a, index) => {
    //     if (a.content && a.urlToImage) {
    //         return (
    //             <NewsCard key={index} article={a} />
    //         )
    //     } else {
    //         return null
    //     }
    // })


    // useEffect(() => {
    // fetch("https://getpocket.com/users/BigDog0321/feed/all", {
    //     type: "GET",
    //     headers: {
    //         username: "BigDog0321",
    //         password: "Spring2011"
    //     }
    // })
    //     .then(r => r.json())
    //     .then(r => console.log(r))
    // }, [])





    return (
        <div className="card-container">
            This isnt free
        </div>

    )
}

export default NewsPage