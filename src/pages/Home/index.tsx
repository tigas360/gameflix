import React from 'react';
import PageDefault1 from '../templates/PageDefault1';
import '../../effects.css';
import LinkButton from '../../components/buttons';

const Home = () => {

  return (
    <>
        <PageDefault1>
            <h3>pagina principal</h3>
            <div className="main-box">
               
               <div className="bar left delay"/>
               <div className="bar top"/>
               <LinkButton link="/" title="Effect" className="LinkButton"/>
            </div>
        </PageDefault1>
    </>
  );
}
export default Home;
