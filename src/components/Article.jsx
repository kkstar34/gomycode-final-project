

const Article = ()=> {



    return (
        <div className="card--product wow fadeInDown">
                            <div className="card--product__illustration">
                               <a href="details--articles.html"><img src="images/jupe.png" alt="products--images"/></a> 
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
    )
}

export default Article;