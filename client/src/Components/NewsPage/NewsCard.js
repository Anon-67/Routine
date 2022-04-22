import React from "react";
import "./News.css"
import { Card } from "react-bootstrap";

function NewsCard({ article }) {
    return (
        <>
            {/* <div className="containter">
                <div className="content">
                    <div className="title">
                        <a href={article.link}>{article.title}</a>
                    </div>
                    <div className="body">Written by: {article.creator} - {article.source_id}</div>
                    <div className="body">{article.description}</div>
                </div>
                <div className="product-image">
                    {article.image_url ? {article.image_url} : "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png")}
                </div>
            </div> */}
            <Card>
                <Card.Img variant="top" src={article.image_url ? article.image_url : "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"} alt={article.title} />
                <Card.Body>
                    <Card.Text>
                        <div className="title">
                            <a href={article.link}>{article.title}</a>
                        </div>
                        <div className="body">Written by: {article.creator} - {article.source_id}</div>
                        <div className="body">{article.description}</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default NewsCard