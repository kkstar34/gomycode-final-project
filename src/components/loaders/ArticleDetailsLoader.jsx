import React from 'react'
import {Skeleton} from '@mui/material'
function ArticleDetailsLoader() {
  return (
    <div className="container">
            <div className="article-detail">
                <div className="container">
                    <div className="row ">

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-7  wow fadeInLeft">
                            <div className="article-detail--product">
                                <div className="article-detail--product__tall">
                                <Skeleton variant="rectangular" width="100%"  height="100%"/>
                                </div>
                            </div>
                            
                            {/* <div className="article-detail--product__small">
                                <div className="card-small">
                                    <img  src={process.env.PUBLIC_URL + '/images/jupe.png'} alt="img" onclick="myFunction(this) "/>
                                </div>
        
                                <div className="card-small">
                                    <img  src={process.env.PUBLIC_URL + '/images/jupe.png'} alt="img" onclick="myFunction(this) "/>
                                </div>
        
                                <div className="card-small">
                                    <img  src={process.env.PUBLIC_URL + '/images/jupe.png'} alt="img" onclick="myFunction(this) "/>
                                </div>
        
                                <div className="card-small">
                                    <img  src={process.env.PUBLIC_URL + '/images/jupe.png'} alt="img" onclick="myFunction(this) "/>
                                </div>
                            </div> */}
                        </div>
                    
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 wow fadeInRight"  >
                            <div className="article-detail--description">
                                <h3 className="article-detail--description__title mb-3" ><Skeleton animation="wave" /></h3>    
                                <div className="article-detail--description__prize mb-3" > 
                                    <h3><Skeleton animation="wave" /></h3>
                                </div>

                                <p className="mb-5"><Skeleton animation="wave" /></p>
                            </div>
                
                            <br/>
                            <div className="article-detail--description__buttons">
                                <Skeleton variant="rectangular" height="100px"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
  )
}

export default ArticleDetailsLoader