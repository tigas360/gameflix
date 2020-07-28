import React from 'react';
import PageDefault1 from '../templates/PageDefault1';

const Page404 = () =>{
    return(
        <>
            <PageDefault1>
                <h2>Você está no limbo, não existe nada aqui.</h2>
                <br/>
                <a href="/" className="LinkButton">
                Me tire daqui!
                </a>
            </PageDefault1>
        </>
    );
}
export default Page404;