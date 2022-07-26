import React from 'react'

function HomeHeader() {
  return (
    <header className="header wow fadeInLeft">
        <div className="header--text">
            <h1>Bénéficiez de vos articles préférés en gros et en détails</h1>
            <p>Achetez et faite vous livrer vos colis en Côte d'Ivoire, au Burkina Faso, au Libéria et en Sierra Léonne  </p>
            
            <button className="btn--pink">
                <a href="#header--parts">
                    Achetez maintenant
                </a>
            </button>
        </div>
    </header>
  )
}

export default HomeHeader