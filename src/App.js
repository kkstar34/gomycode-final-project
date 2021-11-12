

import Nav from './components/Nav';
import Basket from './components/Basket';
import Header from './components/Header';

import { useState } from 'react';
import Article from './components/Article';
import Connexion from './components/Modals/Connexion';
import Footer from './components/Footer';

function App() {
  const [articles, setArticles] = useState([
    {},{},{},{},{},{},{},{}
  ])
  
  return (
    <div className="App">
        <Nav/>
        <Basket/>
        <Header/>
        <section className="" >  
            <div className="container">
                <div className="row">
                {articles.map((article, i )=> 
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" key={i}>
                    
                         <Article />
                    
                       
                    </div>
                  )}
                </div>
            </div>
        </section>

        <Connexion/>
        <Footer/>


      
    </div>
  );
}

export default App;
