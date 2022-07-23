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
import { fetchCategories, fetchCategory } from './../slices/category';
import { useParams } from 'react-router';
import ArticleLoader from './loaders/ArticleLoader';

const ArticleListing = () => {

    const dispatch = useDispatch();
    const categorySlug = useParams().slug

  useEffect(() => {

  
   dispatch(fetchCategory(categorySlug));
   dispatch(fetchCategories());

    
  }, [dispatch, categorySlug])

  const articles = useSelector(state => state.category.articles)
  const categoryData = useSelector(state => state.category)


  
    return (
       <>
        <Nav categories={categoryData.categories}/>
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

              {categoryData.loading ?  
                    <>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" >
                            <ArticleLoader/> 
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" >
                            <ArticleLoader/> 
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" >
                            <ArticleLoader/> 
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" >
                            <ArticleLoader/> 
                        </div>
                    </>      
                     : 
                     categoryData.articles.map((article)=> 
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
