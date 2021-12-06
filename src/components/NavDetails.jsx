import React from 'react'

const NavDetails = () => {
    return (
        <div>
             <nav className="navigation ">
        <div className="container">
            <div className="navigation--top">
                <div className="navigation--top__shop">
                    <form action="">
                        <input type="text" placeholder="Rechercher un produit..."/>
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                    <i className="far fa-times-circle navigation--top__shop--i"></i>
                </div>

                <div className="navigation--top__logo">
                    <a href="index.html"><img src={process.env.PUBLIC_URL + '/images/Groupe-1.png'} alt="logo"/></a>
                </div>

                <div className="navigation--top__items">
                    <form action="" className="select--language">
                        <select name="langues" id="select--language">
                            <option value="opt1">Français</option>
                            <option value="opt1">Anglais</option>
                            <option value="opt1">Chinois</option>
                        </select>

                        <select name="xof" id="select--language">
                            <option value="opt1">XOF</option>
                            <option value="opt1">USD</option>
                            <option value="opt1">STR</option>
                        </select>
                    </form>

                    <div className="box-user">
                        <div className="userIcon"><img src={process.env.PUBLIC_URL + '/icones/Ellipse 1.png'}    alt="user"/></div>
                        <span className="d-none d-lg-block">Karim Kouyaté</span>
                        <i className="fas fa-chevron-down d-none d-lg-block"></i>
                        
                        
                        <div className="sub-menu">
                            <ul>
                                <li>
                                    <a href="profil.html" className="link-menu">Profil</a>
                                    
                                </li>
                                <li>
                                    <a href="password.html" className="link-menu">Mot de passe</a>
                                    
                                </li>
                                <li>
                                    <a href="orders.html" className="link-menu">Mes commandes</a>
                                    
                                </li>
                                <li>
                                    <a href="#" className="link-menu">Se déconnecter</a>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="navigation--top__items--responsive">
                        <ul >
                            <li className="navigation--top__items--responsivesearch"><i className="fa fa-search"></i></li>
                            <li className="navigation--top__items--responsivebars"><i className="fas fa-bars"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
          
            <div className="navigation--bottom disp--none">

                <div className="navigation--bottom__sortie">
                    <i className="far fa-times-circle "></i>
                </div>

                <ul className="navigation--bottom__list">
                    <li> <a href="shop.html">Catégories</a> </li>
                    <li> <a href="shop.html">Vêtements</a> </li>
                    <li> <a href="shop.html">Accéssoires</a> </li>
                    <li> <a href="shop.html">Chaussures</a> </li>
                </ul>

                <form action="" className="select--language">
                    <select name="langues" id="select--language">
                        <option value="opt1">Français</option>
                        <option value="opt1">Anglais</option>
                        <option value="opt1">Chinois</option>
                    </select>

                    <select name="xof" id="select--language">
                        <option value="opt1">XOF</option>
                        <option value="opt1">USD</option>
                        <option value="opt1">STR</option>
                    </select>
                </form>
            </div>
        </div>
    </nav>
        </div>
    )
}

export default NavDetails
