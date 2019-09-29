import React, { Component } from 'react'
import {Link} from "../Router/index"

export default class AnimalReportsPage extends Component {
    render() {
        return (
           <React.Fragment>
                <section className = "bg-light m-3 rounded shadow-lg">
        <div className="m-1"> 
            <iframe title="utility" className = "w-100" height="315" src="https://www.youtube.com/embed/3_6pbh9uBbo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="row pt-1 px-3 pb-3">
            <div className="col-6">
                <div className="row">
                    <div className="col-lg-6 my-2">
                        <Link to="#" className = "text-decoration-none">
                            <div className="btn-sm text-center py-3 w-100 btn-primary" data-toggle="modal" data-target="#exampleModalLong">Place and Contact</div>
                        </Link>
                    </div>
                    <div className="col-lg-6 my-2">
                        <Link to="#" className = "text-decoration-none">
                            <div className="btn-sm text-center py-3 w-100 btn-primary"> Help ( 2 <i className="fas fa-user-alt"></i> in help )</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-lg-6 my-2">
                        <Link to="/alreadyhelped" className = "text-decoration-none">
                            <div className="btn-sm text-center py-3 w-100 btn-primary">I already helped</div>
                        </Link>
                    </div> 
                    <div className="col-lg-6 my-2 text-center pt-3 font-weight-bold">
                        <p><span>100</span>m away</p>
                    </div>
                </div>
            </div>
        </div>
        <hr className = "p-0 bg-dark mx-5"/>
        <div className="row">
            <div className="col-2 text-center pl-4 pt-4">
                <Link to="#" className = "text-decoration-none pl-2">
                    <i className="fas fa-share-alt-square fa-5x text-primary"></i>
                </Link>
            </div>
            <div className="col-7 pl-5">
                <h4 className = "text-center">Comment</h4>
                <p className = "text-muted text-center">
                    Gelmishem filan yere, mashin vurub tecili komek lazimdir
                    . Lorem ipsum dolor sit amet consectetur.
                    </p>
            </div>
            <div className="col-3 text-center pr-5 pt-4">
                <Link to="/afterhelp"><i className="fas fa-check text-success fa-3x"></i></Link><br/>
                <p className="">Already helped</p>

            </div>
        </div>

        {/* pop up */}
        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                    <div className="row py-3">
                        <div className="col-6"><i className="fas fa-map-marker-alt">  </i><span> Baki</span></div>
                        <div className="col-6"><i className="fas fa-phone">  </i><span> 050-XXX-XX-XX</span></div>
                    </div>
                    <div className="row">
                        <div className="col-12 w-100">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe title="utility" className = "w-100" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=baki&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                    <Link to="https://www.utilitysavingexpert.com">Utility Saving Expert</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
    </section>
           </React.Fragment>
        )
    }
}
