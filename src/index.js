import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date){
    return date.toLocaleDateString();
}

function Avatar(props){
    return (
        <img src={props.user.avatarUrl} alt={props.user.name} />
    )
}

function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div>{props.user.name}</div>
        </div>
    )
}

function Comment(props){
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{formatDate(props.date)}</div>
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

ReactDOM.render(<Comment date={comment.date} text={comment.text} author={comment.author} />, document.getElementById('root'));