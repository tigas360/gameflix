import React from 'react';
import Logo from '../../assets/images/Logo.png';
import LinkButton from '../buttons';
import './menu.css'
import { Link } from 'react-router-dom';

interface MenuProps{
    title?:string;
    image?:string;
}
const Menu:React.FC<MenuProps> = (props) =>{
    /*function getTitle(){
        if(props.title){
            return props.title;
        }
        return <h3>No title</h3>
    }*/
    return(
        <header>
            <nav className="TopMenu">
                <Link to="/">
                     <img className="Logo" alt="artflix logo" src={Logo}/>
                </Link>
                <LinkButton link="/registry" title="Cadastrar"/>
            </nav>
        </header>
    );
}
export default Menu;