const Inscription = () => {
    return (
        <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalLabel">Inscription</h2>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p data-toggle="modal" data-target="#exampleModal">Vous avez un compte ? <a href="#">Connectez-vous</a></p>
                    
                    
                    <form action="">
                        <div className="row mt-4">
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="buttons--connexion">
                                    <button className="btn-google">
                                       
                                        <i className="fab fa-google-plus-g"></i>
                                        S'inscrire avec google
                                    </button>
                                </div>
                            </div>
                           
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="buttons--connexion">
                                    <button className="btn-facebook">
                                        <i className="fa fa-facebook"></i> &nbsp;
                                        S'inscrire avec facebook
                                    </button>
                                </div>
                            </div>
                        </div>

                        <p className="p--divider">ou</p>
                      
                        
                        <div className="mt-4 input--connexion">
                            <input type="text" name="" id="" placeholder="Prénoms"/>
                            <input type="text" name="" id="" placeholder="Nom" />
                            <input type="email" placeholder="Adresse email" />
                            <input type="password" placeholder="Mot de passe" />
                            <select name="" id="">
                                <option value="">Pays</option>
                            </select>
                            <select name="" id="">
                                <option value="">Ville</option>
                            </select>
                            <button type="submit" className="btn--blue w-100">S'inscrire</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Inscription;