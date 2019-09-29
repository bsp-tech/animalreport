import React, { Component } from 'react'

export default class AfterHelp extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-light pt-3 container ">
		<div className="container-fluid">
			<div className="mx-auto text-center alert bg-primary text-light">
				<h4 className="text-center font-weight-bold ">
					Yardım edildikdən sonrakı vəziyyət
				</h4>
			</div>
		</div>
		<div className="container-fluid">
			<div>
				<label>Report date:</label>
				<span>01-09-2019</span>
			</div>
			<div>
				<label>Help date:</label>
				<span>01-09-2019</span>
			</div>
		</div>
		<div className="container-fluid mb-1">
				<div className="card">
						<div className="card-body">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas molestias sapiente vero omnis. Facilis aut, minima ut optio commodi voluptas cupiditate, autem sit dolor eius, error sequi quisquam architecto nihil.
							</div>
						</div>
				</div>
		<div className="container-fluid">
			<img src="img/animal.png" alt="img" className="w-100 img-fluid card"/>
		</div>

		<div className="container-fluid mt-1">
			<div className="card embed-responsive embed-responsive-4by3">
				<iframe title="video" className="embed-responsive-item " src="https://www.youtube.com/embed/wMuNjnNyaiA"
					allowFullScreen></iframe>
			</div>
		</div>
	</section>
            </React.Fragment>
        )
    }
}
