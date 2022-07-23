import React, { useEffect } from "react";
import Connexion from "./../components/Modals/Connexion";
import Basket from "./../components/Basket";
import Nav from "./../components/Nav";
import Footer from "./../components/Footer";
import HomeHeader from "./../components/HomeHeader";
import { useSelector, useDispatch } from "react-redux";
import Article from "./../components/Article";
import { fetchProcucts } from "../slices/product";
import ArticleLoader from './../components/loaders/ArticleLoader';
import { fetchCategories } from "../slices/category";

function Home() {
  const data = useSelector((state) => state.product);
  const categoryData = useSelector((state) => state.category);

  console.log(categoryData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProcucts());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <Nav categories={categoryData.categories}/>
      <Basket />
      <HomeHeader />

      <div className="features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="card--feature">
                <img
                  src="images/xbanner-02.jpg.pagespeed.ic.MQuZq6F18q.webp"
                  alt=""
                />

                <a href="shop.html">
                  <div className="card--feature__overlay">
                    <h3>Hommes</h3>
                    <div>
                      <p>Voir plus</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="card--feature ">
                <img
                  src="images/xbanner-01.jpg.pagespeed.ic.Uj5FE94mgU.webp"
                  alt=""
                />

                <a href="shop.html">
                  <div className="card--feature__overlay">
                    <h3>Femmes</h3>
                    <div>
                      <p>Voir plus</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="card--feature ">
                <img
                  src="images/xbanner-03.jpg.pagespeed.ic.1rqLomOaMb.webp"
                  alt=""
                />

                <a href="shop.html">
                  <div className="card--feature__overlay">
                    <h3>Accessoires</h3>
                    <div>
                      <p>Voir plus</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="header--parts" id="header--parts">
        <div class="left--part">
          <div class="left--part__sortie">
            <i class="far fa-times-circle"></i>
          </div>
          <div class="container-onglets">
            <div class="onglets active-onglet" data-anim="1">
              <p>Nouvel arrivage</p>
            </div>
            <div class="onglets" data-anim="2">
              <p>Top ventes</p>
            </div>
          </div>
        </div>

        <div class="right--part">
          <div class="container">
            <div class="filter">
              <p>
                <i class="far fa-chart-bar"></i> &nbsp; Filtre{" "}
              </p>
            </div>
          </div>
          <div class="contenu activeContenu" data-anim="1">
          <div className="container">
                

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

          <div class="contenu " data-anim="2"></div>

          <div class="text-center">
            <button class="btn--white">Voir plus</button>
          </div>
        </div>
      </section>

      <Connexion />
      <Footer />
    </>
  );
}

export default Home;
