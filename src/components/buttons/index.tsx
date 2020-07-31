import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps{
    title?:string,
    link:string,
    style?:CSSProperties,
    className?: string;
}


const LinkButton:React.FC<LinkButtonProps> = (props) =>{

    // let getCssClass=()=>{
    //     return props.className;
    // }
    return(
        <Link to={props.link} className={props.className||"LinkButton"}  style={props.style}>
            {props.title}
        </Link>
    );
}
export default LinkButton;