import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = ({categories})=> {

    const [show, setShow] = useState(false);
    const [showNavigation, setshowNavigation] = useState(false);
    const toggleSearch = () => {
        setShow(!show);
    }

    
    const toggleNavigation = () => {
        console.log('toggleNavigation')
        setshowNavigation(!showNavigation);
    }

    return (
        <nav className="navigation ">
            <div className="container">
                <div className="navigation--top">
                    <div className={show ? "navigation--top__shop search-show" : "navigation--top__shop"}>
                        <form action="">
                            <input type="text" placeholder="Rechercher un produit..."/>
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                        <i className="far fa-times-circle navigation--top__shop--i" onClick={toggleSearch}></i>
                    </div>
    
                    <div className="navigation--top__logo">
                        <Link to="/"> <img  src={process.env.PUBLIC_URL + '/images/Groupe-1.png'} alt="logo"/> </Link>
                    </div>
    
                    <div className="navigation--top__items">
                        <form action="" className="select--language">
                            <select name="langues" >
                                <option value="opt1">Français</option>
                                <option value="opt1">Anglais</option>
                                <option value="opt1">Chinois</option>
                            </select>
    
                            <select name="xof" >
                                <option value="opt1">XOF</option>
                                <option value="opt1">USD</option>
                                <option value="opt1">STR</option>
                            </select>
                        </form>
    
                        <div className="navigation--top__items--btns">
                            <button className="btn--white" data-toggle="modal" data-target="#exampleModal">
                                Connexion
                            </button>
        
                            <button className="btn--blue ms-2">
                                Inscription
                            </button>
                        </div>
    
                        <div className="navigation--top__items--responsive">
                            <ul >
                                <li className="navigation--top__items--responsivesearch" onClick={toggleSearch}><i className="fa fa-search"></i></li>
                                <li className="navigation--top__items--responsivebars"  onClick={toggleNavigation}><i className="fas fa-bars"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
               
                <div className={showNavigation ? "navigation--bottom disp--none show-navigation": "navigation--bottom disp--none"}>
    
                    <div className="navigation--bottom__sortie">
                        <i className="far fa-times-circle "  onClick={toggleNavigation}></i>
                    </div>
    
                    <ul className="navigation--bottom__list">
                    {categories.map((category, i) => {
                        return  <li key={i}>  <Link to={`/category/products/${category}`}> {category}</Link></li>
                    })
                    }
                    </ul>
    
                    <form action="" className="select--language">
                        <select name="langues" >
                            <option value="opt1">Français</option>
                            <option value="opt1">Anglais</option>
                            <option value="opt1">Chinois</option>
                        </select>
    
                        <select name="xof" >
                            <option value="opt1">XOF</option>
                            <option value="opt1">USD</option>
                            <option value="opt1">STR</option>
                        </select>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Nav;