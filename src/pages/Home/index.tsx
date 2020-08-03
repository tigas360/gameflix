import React from 'react';
import PageDefault1 from '../templates/PageDefault1';
import '../../effects.css';
import LinkButton from '../../components/buttons';

const Home = () => {

  return (
    <>
        <PageDefault1>
          <div className="full-content row">
            <div className="panel row border-color-orange-sdw border-color-orange round-5">
              <h3>pagina principal</h3>

              <div className="main-box">
                <div className="bar left delay"/>
                <div className="bar top"/>
                <LinkButton link="/" title="Effect" className="LinkButton"/>
              </div>
            </div>
            <div className="panel row border-color-blue border-color-blue-sdw round-5">
                <h3>Painel 2</h3>
            </div>
            <div className="panel row border-color-green border-color-green-sdw round-5">
                <h3>Painel 3</h3>
            </div>
            <div className="panel row border-color-red-sdw border-color-red round-5">
                <h3>Painel 4</h3>
            </div>
            <div className="panel row border-color-blueice border-color-blueice-sdw round-5">
                <h3>Painel 5</h3>
            </div>
            <div className="panel row border-color-snow border-color-snow-sdw round-5">
                <h3>Painel 6</h3>
            </div>
            <div className="panel row border-color-violet border-color-violet-sdw round-5">
                <h3>Painel 7</h3>
            </div>
            <div className="panel row border-color-blacksaber border-color-blacksaber-sdw round-5">
                <h3>Painel 8</h3>
            </div>
          </div>
        </PageDefault1>
    </>
  );
}
export default Home;
