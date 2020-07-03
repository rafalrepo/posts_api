import React from 'react';
import Parser from 'html-react-parser';
import './style.css';

function Post({element}) {

    const truncate = (text) => {
        return text.length > 30 ? text.substring(0, 40) + "..." : text;
    }
        
    return (
        <div className="post">
            <img src={element.post_thumbnail !== null ? element.post_thumbnail.URL : ''} alt="" />   
            <div className="post__body">
                <span>123</span>
                <h2>
                    {truncate(element.title)}
                </h2>
                <div className="post__lead">
                    {Parser(element.excerpt)}
                </div>
                <div className="post__author">
                    <img src={element.author.avatar_URL} alt="" /> 
                    <h3>{element.author.first_name} {element.author.last_name}</h3>
                </div>
            </div>
        </div>
    )

}


export default Post;