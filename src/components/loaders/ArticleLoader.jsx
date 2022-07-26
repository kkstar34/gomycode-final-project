import React from 'react'
import {Skeleton} from '@mui/material'

function ArticleLoader(props) {
  return (
      <>
    <div className="card--product wow fadeInDown">
                            <div className="card--product__illustration">
                              <a href="#ref"> <Skeleton variant="rectangular" width="100%"  height="20rem"/></a> 
                            </div>

                            <div className="card--product__description">
                                <h3><Skeleton animation="wave" /></h3>

                                <div className="prices">
                                    <Skeleton animation="wave" width="80%"    />
                                </div>

                                <div className="card--product__description--btns">
                                <Skeleton  animation="wave" width="100%" height="5rem" />
                                </div>
                            </div>
                        </div>
  </>

  )
}

export default ArticleLoader