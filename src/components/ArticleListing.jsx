import React, { useEffect } from 'react'
import Article from './Article';
import Connexion from './Modals/Connexion';
import Footer from './Footer';
import Header from './Header';
import Basket from './Basket';
import Nav from './Nav';
import { useSelector, useDispatch } from 'react-redux';
import loadArticles from './../redux/actions/loadArticles';
import axios from 'axios';

const ArticleListing = () => {

    const dispatch = useDispatch();

  useEffect(() => {

  
    async  function fetchData() 
    {
      const articles = await axios.get('https://fakestoreapi.com/products');

      return  await articles.data;

    }
    



     fetchData().then((data) => {dispatch(loadArticles(data))});

    
    

      // 


    
  }, [])

  const articles = useSelector(state => state.allProducts.articles)


  console.log(articles);
    return (
       <>
 <Nav/>
        <Basket/>
        <Header/>
        <section className="" >  
            <div className="container">
                <div className="row">
                {articles.map((article)=> 
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" key={article.id}>
                    
                         <Article article={article}/>
                    
                       
                    </div>
                  )}
                </div>
            </div>
        </section>

        <Connexion/>
        <Footer/>
       </>

        
    )
}

export default ArticleListing
