const Basket = ()=> {
    return  (
        <>
        <div className="basket wow fadeInLeft">
        <div className="position-relative">
            <p>
                <i className="fas fa-shopping-bag"></i>
            </p>
            <span>1</span>
        </div>
    </div>

    <div className="basket--responsive">
        <div className="basket--responsive__title">
            <div className="d-flex">
                <i className="fas fa-shopping-bag"></i>
                <p>3 Articles</p>
            </div>

            <div className="basket--sortie">
                <i className="far fa-times-circle"></i>
            </div>
        </div>

        <div className="basket--responsive__items">
          
            <div className="plus--minus">
                <form>
                    <input type="button" value="+" className="plus--minus__btn" />
                    <div className="plus--minus__input"> 1 </div>
                    <input type="button" value="-" className="plus--minus__btn"/>
                </form>
            </div>
          

            <div className="basket--articles">
                <div className="basket--articles__illustration">
                    <img src="images/jupe.png" alt="img--articles"/>
                </div>

                <div className="basket--articles__description">
                    <p>Jupe volante</p>
                    <h4>2000 F</h4>
                    <p>3 unités</p>
                </div>
            </div>

            <div className="basket--articles__sortie">
                <i className="far fa-times-circle"></i>
            </div>
        </div>

        <div className="basket--responsive__bottom">
            <p><a href="paiement.html">Avez-vous un coupon ?</a></p>

            <div className="basket--responsive__bottom--total">
                <p>Mon panier</p>
                <span>1002000frs</span>
            </div>
        </div>
    </div>
    </>
    )
}

export default Basket;