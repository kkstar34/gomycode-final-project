const Header = ({name})=> {
    return (
        <header className="header-shop wow fadeInLeft">
            <div className="container">
                <img src={process.env.PUBLIC_URL + '/images/Untitled-4.jpg'}  alt="header-shop"/>

                <div className="header-shop__text">
                    <h3>{name}</h3>
                </div>
            </div>
        </header>
    )
}

export default Header;