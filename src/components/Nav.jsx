const Nav = ()=> {


    return (
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
                        <a href="index.html"><img src="icones/Groupe-1.png" alt="logo"/></a>
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
    
                        <div className="navigation--top__items--btns">
                            <button className="btn--white" data-toggle="modal" data-target="#exampleModal">
                                Connexion
                            </button>
        
                            <button className="btn--blue">
                                Inscription
                            </button>
                        </div>
    
                        <div className="navigation--top__items--responsive">
                            <ul >
                                <li className="navigation--top__items--responsivesearch"><i className="fa fa-search"></i></li>
                                <li className="navigation--top__items--responsivebars"><i className="fas fa-bars"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
               
                <div className="navigation--bottom">
    
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
    )
}

export default Nav;