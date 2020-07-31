import React from 'react';
import PageDefault1 from '../templates/PageDefault1';
import LinkButton from '../../components/buttons';

const Page404 = () =>{
    return(
        <>
            <PageDefault1>
                <h2>Você está no limbo, não existe nada aqui.</h2>
                <br/>
                <LinkButton link="/"  title="Voltar"/>
            </PageDefault1>
        </>
    );
}
export default Page404;