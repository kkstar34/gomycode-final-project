import React, { useEffect } from 'react'
import Nav from './Nav';
import Basket from './Basket';
import Header from './Header';
import Connexion from './Modals/Connexion';
import Footer from './Footer';
import NavDetails from './NavDetails';
import axios from 'axios';
import { useParams } from 'react-router';
import selectProduct from './../redux/actions/selectProduct';
import { useDispatch, useSelector } from 'react-redux';

export const ArticleDetails = () => {


    const articleId = useParams().id;
    const dispatch = useDispatch();

    useEffect(() => {
       


        async function fetchData(){
            const articles = await axios.get(`https://fakestoreapi.com/products/${articleId}`);

            return  await articles.data;

        }


        fetchData().then((data) => {dispatch(selectProduct(data));});
        
    }, [])


    const article = useSelector(state => state.product);


    console.log(article);
    return (
        <div>
            <NavDetails/>
            <Basket/>
        



            <main className="main">
        <div className="container">
            <div className="article-detail">
                <div className="container">
                    <div className="row ">

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-7  wow fadeInLeft">
                            <div className="article-detail--product">
                                <div className="article-detail--product__tall">
                                    <img src={article.image} alt="img" id="imageBox"/>
                                </div>
                            </div>
                            
                            <div className="article-detail--product__small">
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
                            </div>
                        </div>
                    
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 wow fadeInRight"  >
                            <div className="article-detail--description">
                                <h3 className="article-detail--description__title mb-3" >{article.title}</h3>    
                                <div className="article-detail--description__prize mb-3" > 
                                    <h3>{article.price} F / Unité</h3>
                                </div>

                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

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

        <div className="articles--connexes">
            <div className="container">
                <h2>Articles connexes</h2>

                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="card--product wow fadeInDown">
                            <div className="card--product__illustration">
                                <a href="details--articles.html">  
                                    <img src={process.env.PUBLIC_URL + '/images/jupe.png'} alt="products--images"/>
                                </a>
                            </div>

                            <div className="card--product__description">
                                <h3>Jupe volante</h3>

                                <div className="prices">
                                    <p><strong>3500 F</strong> / unité</p>
                                    <p><strong>1500 F</strong> / a partir de 5 unités</p>
                                </div>

                                <div className="card--product__description--btns">
                                    <button className="btn--blue ">
                                        <a href="details--articles.html">
                                            Achetez 
                                        </a>
                                    </button>

                                    <button className="btn--white">
                                       +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="card--product wow fadeInDown">
                            <div className="card--product__illustration">
                                <a href="details--articles.html">  
                                    <img src={process.env.PUBLIC_URL + '/images/jupe.png'} alt="products--images"/>
                                </a>
                            </div>

                            <div className="card--product__description">
                                <h3>Jupe volante</h3>

                                <div className="prices">
                                    <p><strong>3500 F</strong> / unité</p>
                                    <p><strong>1500 F</strong> / a partir de 5 unités</p>
                                </div>

                                <div className="card--product__description--btns">
                                    <button className="btn--blue ">
                                        <a href="details--articles.html">
                                            Achetez 
                                        </a>
                                    </button>

                                    <button className="btn--white">
                                       +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="card--product wow fadeInDown">
                            <div className="card--product__illustration">
                                <a href="details--articles.html">  
                                    <img  src={process.env.PUBLIC_URL + '/images/jupe.png'} alt="products--images"/>
                                </a>
                            </div>

                            <div className="card--product__description">
                                <h3>Jupe volante</h3>

                                <div className="prices">
                                    <p><strong>3500 F</strong> / unité</p>
                                    <p><strong>1500 F</strong> / a partir de 5 unités</p>
                                </div>

                                <div className="card--product__description--btns">
                                    <button className="btn--blue ">
                                        <a href="details--articles.html">
                                            Achetez 
                                        </a>
                                    </button>

                                    <button className="btn--white">
                                       +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="card--product wow fadeInDown">
                            <div className="card--product__illustration">
                                <a href="details--articles.html">  
                                    <img  src={process.env.PUBLIC_URL + '/images/jupe.png'} alt="products--images"/>
                                </a>
                            </div>

                            <div className="card--product__description">
                                <h3>Jupe volante</h3>

                                <div className="prices">
                                    <p><strong>3500 F</strong> / unité</p>
                                    <p><strong>1500 F</strong> / a partir de 5 unités</p>
                                </div>

                                <div className="card--product__description--btns">
                                    <button className="btn--blue ">
                                        <a href="details--articles.html">
                                            Achetez 
                                        </a>
                                    </button>

                                    <button className="btn--white">
                                       +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
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
