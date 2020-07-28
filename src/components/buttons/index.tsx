import React from 'react';

interface LinkButtonProps{
    title?:string,
    link?:string
}

const LinkButton:React.FC<LinkButtonProps> = (props) =>{
    return(
        <a href={props.link} className="LinkButton">
            {props.title}
        </a>
    );
}
export default LinkButton;