import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const NewsAPI = (props) => {
function NewsAPI() {
    //Note the second argument is an empty array. We are only 
    const [responseData, setResponseData] = useState([]);
    useEffect(()=>{
        axios.get('https://newsapi.org/v2/top-headlines?' +
                  'country=us&' +
                  'apiKey=351c2c8de7864a768021f65bacc2eea3')
            .then((response)=>{setResponseData(response.data.articles)})
    }, []);
    console.log(responseData);
    return(
        <div>
            {/* <ResponseData api={responseData} /> */}
            {responseData.map((articles, index)=>{
                return (<div key={index}>{articles.title}</div>)
            })}
        </div>
    )
}

export default NewsAPI;

// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=351c2c8de7864a768021f65bacc2eea3';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })