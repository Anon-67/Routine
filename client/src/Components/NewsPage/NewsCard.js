import React from "react";
import "./News.css"

function NewsCard({ article }) {
    return (
        <div className="containter">
            <div className="content">
                <div className="title">
                    <a href={article.link}>{article.title}</a>
                </div>
                <div className="body">Written by: {article.creator} - {article.source_id}</div>
                <div className="body">{article.description}</div>
            </div>
            <div className="product-image">
                {article.image_url ? (<img src={article.image_url} alt={article.title} />) : (<img src="https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png" alt={article.title} />)}
            </div>
        </div>
    )
}

export default NewsCard