import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date){
    return date.toLocaleDateString();
}

function Comment(props){
    return (
        <div className="comment">
            <div className="user-info">
                <img className="avatar" src={props.author.avatarUrl} alt={props.author.name} />
                <div className="user-name">{props.author.name}</div>
            </div>
            <div className="comment-text">{props.text}</div>
            <div className="comment-date">{formatDate(props.date)}</div>
        </div>
    )
}

const comment = {
    date: new Date(),
    text: "갑작스럽게 떠나는 여행을 좋아한다.",
    author: {
        name: "silvery",
        avatarUrl:
        "http://silvery92.dothome.co.kr/portfolio/assets/images/aboutImg01.jpg"
    },
};

ReactDOM.render(
    <Comment date={comment.date} text={comment.text} author={comment.author} />
    , document.getElementById('root'));