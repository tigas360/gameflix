import React from 'react';
import Menu from '../../../components/menu';
import Footer from '../../../components/Footer';
import './pageDefault1.css';

const PageDefault1: React.FC<{}> = ({children})=> {
    return( 
        <>
            <Menu/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
}
export default PageDefault1;