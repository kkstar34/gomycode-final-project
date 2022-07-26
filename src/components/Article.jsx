import { Link } from "react-router-dom";


const Article = ({article})=> {



    return (
        // wow fadeInDown
        <div className="card--product ">
                            <div className="card--product__illustration">
                              <Link to={`/article/${article.id}`}> <img src={article.image} alt="products--images"/> </Link >
                            </div>

                            <div className="card--product__description">
                                <h3>{article.title}</h3>

                                <div className="prices">
                                    <p><strong>{article.price} F</strong> / unité</p>
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
    )
}

export default Article;