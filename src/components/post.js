import React from 'react';
import Parser from 'html-react-parser';
import './post.css';

function Post(props) {
    
    return (
        <div className="card">
            <div className="card__header">
                <img src={props.element.post_thumbnail.URL} alt="" />   
            </div>
            <div className="card__body">
                <span className="card__tag">123</span>
                <h2 className="card__heading">
                    {props.element.title}
                </h2>
                <p className="card__lead">
                    {Parser(props.element.excerpt)}
                </p>
            </div>
        </div>
    )

}


export default Post;