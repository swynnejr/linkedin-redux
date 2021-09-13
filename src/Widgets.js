import React, { useEffect, useState } from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import axios from 'axios';

function Widgets() {
    const [responseData, setResponseData] = useState([]);
    useEffect(()=>{
        axios.get('https://newsapi.org/v2/top-headlines?' +
                  'country=us&' +
                  'apiKey=351c2c8de7864a768021f65bacc2eea3')
            .then((response)=>{setResponseData(response.data.articles)})
    }, []);
    console.log(responseData);

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h6>{heading}</h6>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {responseData.slice(0,4).map((articles, index)=>{
                return (<div key={index}><a  href={articles.url}>{newsArticle(articles.title, articles.author)}</a></div>)
            })}
        </div>
    )
}

export default Widgets
