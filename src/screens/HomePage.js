import React, { Component } from 'react'
import {Link} from "../Router/index"

export default class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
            <img src="img/inne.jpg" className="img-fluid mx-auto d-block" alt=""/>
            <div className="container">
        
                <p className="text-center mt-4 font-weight-bold">
                    Tariximiz boyu tərəfdarlarımız heyvanların həyatını yaxşılaşdırmaq üçün kampaniyalar keçirdilər
                    hökumətləri, beynəlxalq qurumları, şirkətləri, icmaları və ayrı-ayrı insanları heyvanları qorumağa ciddi
                    yanaşmağa inandırdılar.
                </p>
        
                <div className=" text-center pt-5">
                    <Link to="/animal-report" className="btn btn-primary m-1 p-4 text-light">
                        Report Animal
                    </Link>
        
                    <Link to="/animal-reports" className="btn btn-primary m-1 p-4 text-light">
                        Explore Reports
                    </Link>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
