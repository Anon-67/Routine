import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import "./News.css"


function NewsPage() {
    const [articles, setArticles] = useState([])
    // const [feed, setFeed] = useState([])

    // useEffect(() => {
    //     fetch("https://newsdata.io/api/1/news?apikey=pub_665612df13c9d045d5d229d0edbe057cf68b&q=business&country=us&language=en&category=business,science,technology,top,world")
    //         .then(r => r.json())
    //         .then(r => setArticles(r.results))
    // }, [])


    // const articleMap = articles.map((a, index) => { 
    //         return (
    //             <NewsCard key={index} article={a} />
    //         )
    // })



    return (
        <div className="card-container">
            {/* {articleMap} */}
        </div>

    )
}

export default NewsPage