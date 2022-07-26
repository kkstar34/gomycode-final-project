import { useEffect, useState } from "react";
import { fetchCart } from "../slices/cart";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from './../slices/cart';


const Basket = ()=> {

    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const toggleBasket = ()=> {
        setShow(!show);
    }
    const data = useSelector(state => state.cart);
    useEffect(() => {
        dispatch(fetchCart());
      }, [dispatch]);

      


    const deleteProductFromCart = (productId) => {
        let newData = data;
        const index = newData.cart[0].products.findIndex(p => p.id === productId);
        // newData.cart[0].products.splice(index, 1);
        console.log(index);
       
        // dispatch(deleteProduct(data));
    }
      

    
    return  (
        <>
        <div className="basket wow fadeInLeft" onClick={toggleBasket}>
        <div className="position-relative">
            <p>
                <i className="fas fa-shopping-bag"></i>
            </p>
            <span>{data.cart.length > 0 ? data.cart[0].products.length : 0}</span>
        </div>
    </div>

    <div className={show ? `basket--responsive basket-show` : `basket--responsive`}>
        <div className="basket--responsive__title">
            <div className="d-flex">
                <i className="fas fa-shopping-bag"></i>
                <p>{data.cart.length > 0 ? data.cart[0].products.length : 0} Articles</p>
            </div>

            <div className="basket--sortie" onClick={toggleBasket}>
                <i className="far fa-times-circle"></i>
            </div>
        </div>

        {!!data.cart.length  && data.cart[0].products.map((item, i) => {
            return  <div className="basket--responsive__items" key={i}>
          
            <div className="plus--minus">
                <form>
                    <input type="button" value="+" className="plus--minus__btn" />
                    <div className="plus--minus__input"> {item.quantity}</div>
                    <input type="button" value="-" className="plus--minus__btn"/>
                </form>
            </div>
          

            <div className="basket--articles">
                <div className="basket--articles__illustration">
                    <img src={item.image}alt="img--articles"/>
                </div>

                <div className="basket--articles__description">
                    <p>{item.description.substring(0, 12)}</p>
                    <h4>${item.price} </h4>
                    <p>{item.quantity} unités</p>
                </div>
            </div>

            <div className="basket--articles__sortie">
                <i className="far fa-times-circle" onClick={()=>deleteProductFromCart(item.id)}></i>
            </div>
        </div>
        })}
       

        <div className="basket--responsive__bottom">
            <p><a href="paiement.html">Avez-vous un coupon ?</a></p>

            <div className="basket--responsive__bottom--total">
                <p>Mon panier</p>
                <span>${data.cart.length>0 ?data.cart[0].products.reduce((acc, item) => acc + item.price, 0) : 0}</span>
            </div>
        </div>
    </div>
    </>
    )
}

export default Basket;