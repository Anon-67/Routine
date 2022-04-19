import React from "react";
import "./News.css"

function NewsCard({ article }) {
    return (
        <div className="containter">
            <div className="content">
                <div className="title">
                    <a href={article.url}>{article.title}</a>
                </div>
                <div className="body">Written by: {article.author} - {article.source.name}</div>
                <div className="body">{article.description}</div>
            </div>
            <div className="product-image">
                <img src={article.urlToImage} alt={article.title} />
            </div>
        </div>
    )
}

export default NewsCard