import React, { useEffect, useState } from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import axios from 'axios';

function Widgets() {
    const [responseData, setResponseData] = useState([]);
    useEffect(()=>{
        axios.get('http://api.mediastack.com/v1/news?access_key=b1021b516097a964d63afd74bf74a60b&categories=technology&languages=en&sort=published_desc')
            .then((response)=>{setResponseData(response.data.data)})
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
            {responseData.slice(0,5).map((articles, index)=>{
                return (<div key={index}><a  href={articles.url}>{newsArticle(articles.title, articles.source)}</a></div>)
            })}
        </div>
    )
}

export default Widgets
