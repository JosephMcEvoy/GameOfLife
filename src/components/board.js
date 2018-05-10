import React, { Component } from 'react';

export default class Board extends Component {
	render(){
		return(
			<div className="container">
				<div className="align-items-center">
					<h1 className="header clearfix">ReactJS Game of Life</h1>
				</div>
				<div className="row">
					<div className="col-md-2"><btn className="btn btn-primary">Run</btn></div>
					<div className="col-md-2"><btn className="btn btn-primary">Pause</btn></div>
					<div className="col-md-2"><btn className="btn btn-primary">Clear</btn></div>
				</div>
			</div>
		)
	}
}