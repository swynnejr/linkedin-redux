import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
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
            {newsArticle("Full Stack Developers in high demand", "Top news - 9,342 readers")}
            {newsArticle("Coronavirus: TX updates", "Top news - 853 readers")}
            {newsArticle("Tesla hits new highs", "Cars & Auto - 6,124 readers")}
            {newsArticle("Is REDUX too good?", "Programming - 429 readers")}
            {newsArticle("Bitcoin Breaks $50k AGAIN", "Crypto - 6,514 readers")}
        </div>
    )
}

export default Widgets
