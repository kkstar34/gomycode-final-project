const Connexion = () => {
  return(

  <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title" id="exampleModalLabel">
            Connexion
          </h2>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p data-toggle="modal" data-target="#exampleModal3">
            Vous n'avez pas de compte ? <a href="#">Inscrivez-vous</a>
          </p>

          <form action="">
            <div className="row mt-4">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="buttons--connexion">
                  <button className="btn-google">
                    <i className="fab fa-google-plus-g"></i>
                    Connexion avec google
                  </button>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-6">
                <div className="buttons--connexion">
                  <button className="btn-facebook">
                    <i className="fab fa-facebook-f"></i> &nbsp; Connexion avec
                    facebook
                  </button>
                </div>
              </div>
            </div>

            <p className="p--divider">ou</p>

            <div className="mt-4 input--connexion">
              <input type="email" placeholder="Adresse email" />
              <input type="password" placeholder="Mot de passe" />
              <button type="submit" className="btn--blue w-100">
                Se connecter
              </button>
              <p className="mt-4 mb-4">
                <a href="">Mot de passe oublié</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
};


export default Connexion;