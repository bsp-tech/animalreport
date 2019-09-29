import React, { Component } from 'react'

export default class AlreadyHelped extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="container p-2">
			<form>
				<div className="bg-light rounded b-1 p-2">
					<div className="row justify-content-center">
						<div className="col-md-8">
							<div className="row">
								<div className="col-12">
									<div className="text-center alert bg-info text-light">
										Please, talk and show us about what kind of procedures you did to help animal and current situation of animal.
									</div>
								</div>
							<div className="col text-center">
										<h5 className="p-2 p-md-3">
											Record video
										</h5>
										<div className="p-2 p-md-3">
											<label id="recorded-video" htmlFor="record-video" className="recorded-video rounded d-flex w-100 justify-content-center align-items-center bg-success text-light">
												<i className="fas fa-video"></i>&ensp;RECORD
											</label>
											<input id="record-video" className="d-none" type="file" accept="video/*" name="video"/>
											<video id="recorded-video-player" className="d-none">
												<source  id="recorded-video-player-src" type="video/mp4"/>
											</video>
											<canvas id="recorded-video-canvas" className="d-none"></canvas>
										</div>
									</div>
								<div className="col text-center">
									<h5 className="p-2 p-md-3">
										Capture image
									</h5>
									<div className="p-2 p-md-3">
										<label id="captured-image" htmlFor="capture-image" className="rounded d-flex w-100 justify-content-center align-items-center bg-success text-light captured-image">
											<i className="fas fa-camera"></i>&ensp;CAPTURE
										</label>
										<input id="capture-image" className="d-none" type="file" accept="image/*" name="image"/>
									</div>
								</div>
							</div>
						</div>
                    </div>
                    <div className="row justify-content-center">
                            <div className="col-md-4">
                                    <div className="mt-3">
                                        <h5 className="p-2 p-md-3 text-center">
                                            Current situation of animal
                                        </h5>
                                        <div className="row text-center p-2 p-md-3">
                                            <div className="col">
                                                <input id="level_not_so_bad" type="radio" name="level" required/>&ensp;
                                                <label htmlFor="level_not_so_bad">Getting better</label>
                                            </div>
                                            <div className="col">
                                                <input id="level_urgent" type="radio" name="level" required/>&ensp;
                                                <label htmlFor="level_urgent">Normal</label>
                                            </div>
                                            <div className="col">
                                                <input id="level_urgent" type="radio" name="level" required/>&ensp;
                                                <label htmlFor="level_urgent">Good</label>
                                            </div>
                                            <div className="col">
                                                <input id="level_urgent" type="radio" name="level" required/>&ensp;
                                                <label htmlFor="level_urgent">Very good</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </div>
					<div className="row justify-content-center">
						<div className="col-md-6 mt-3 text-center">
							<div className="form-group p-2 p-md-3">
								<h5>
									Contact number
									<small className="text-muted"></small>
								</h5>
								<input type="tel" className="form-control" name="number" placeholder="Contact number for details"/>>
							</div>
							<div className="form-group p-2 p-md-3">
								<h5>
									Description
									<small className="text-muted"></small>
								</h5>
								<textarea className="form-control" rows="3"></textarea>
							</div>
							<div className="mt-3 p-2 p-md-3">
								<button type="submit" className="btn btn-danger text-light btn-lg btn-block">
									<i className="fas fa-hands-helping"></i>&ensp;SEND
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</section>
            </React.Fragment>
        )
    }
}
