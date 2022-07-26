import React, { useEffect } from 'react'

import Basket from './Basket';

import Connexion from './Modals/Connexion';
import Footer from './Footer';
import NavDetails from './NavDetails';

import { useParams } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProcuct, fetchProcucts } from './../slices/product';
import Article from './Article';
import ArticleLoader from './loaders/ArticleLoader';
import ArticleDetailsLoader from './loaders/ArticleDetailsLoader';
import { fetchCategories } from '../slices/category';

export const ArticleDetails = () => {


    const articleId = useParams().id;
    const dispatch = useDispatch();

    const data = useSelector(state => state.product);
    
    const categoryData = useSelector(state => state.category);
    useEffect(() =>
    {
      dispatch(fetchProcuct(articleId))
      dispatch(fetchProcucts(4))
      dispatch(fetchCategories());
    }, [dispatch, articleId]);



   
    return (
        <div>
            <NavDetails categories={categoryData.categories}/>
            <Basket/>
        <main className="main">

        {
            data.loading ? <ArticleDetailsLoader/> : 

            <div className="container">
            <div className="article-detail">
                <div className="container">
                    <div className="row ">
                    {/* wow fadeInLeft */}
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-7  ">
                            <div className="article-detail--product">
                                <div className="article-detail--product__tall">
                                    <img src={data.product.image} alt="img" id="imageBox"/>
                                </div>
                            </div>
                            
                            {/* <div className="article-detail--product__small">
                                <div className="card-small">
                                    <img  src={process.env.PUBLIC_URL + '/images/jupe.png'} alt="img" onclick="myFunction(this) "/>
                                </div>
        
                                <div className="card-small">
                                    <img  src={process.env.PUBLIC_URL + '/images/jupe.png'} alt="img" onclick="myFunction(this) "/>
                                </div>
        
                                <div className="card-small">
                                    <img  src={process.env.PUBLIC_URL + '/images/jupe.png'} alt="img" onclick="myFunction(this) "/>
                                </div>
        
                                <div className="card-small">
                                    <img  src={process.env.PUBLIC_URL + '/images/jupe.png'} alt="img" onclick="myFunction(this) "/>
                                </div>
                            </div> */}
                        </div>
                        {/* wow fadeInRight */}
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 "  >
                            <div className="article-detail--description">
                                <h3 className="article-detail--description__title mb-3" >{data.product.title}</h3>    
                                <div className="article-detail--description__prize mb-3" > 
                                    <h3>{data.product.price} F / Unité</h3>
                                </div>

                                <p className="mb-5">{data.product.description}</p>

                                <p className="mb-5"><i>Vente en gros à partir de 7 unités*</i></p>
                            </div>
                
                          
                            <div className="article-detail--description__buttons">
                                <button className="btn--pink"><i className="fas fa-shopping-bag"></i>&nbsp; Ajouter au panier </button>
                                <button className="btn--blue"><a href="paiement.html">Acheter </a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        }
       

        <div className="articles--connexes">
            <div className="container">
                <h2>Articles connexes</h2>

                <div className="row">
                    {data.loading ?  
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
                     data.products.map((article)=> 
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" key={article.id}>
                         <Article article={article}/>
                    </div>
                  )}
                </div>
            </div>
        </div>
    </main>


            <Connexion/>
            <Footer/>

        </div>
    )
}

export default ArticleDetails;
