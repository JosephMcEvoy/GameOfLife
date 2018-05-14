import React, { Component } from 'react';
import { connect } from 'react-redux';

class Board extends Component {
	renderBoard(){
		return this.props.cells.map((cell) => {
			return (
				<div className="grid-item" key={cell.id}>{cell.isAlive}</div>
			)
		})
	}

	render(){
		return(
			<div>
				<div className="container">
					<div className="align-items-center">
						<h1 className="header clearfix">ReactJS Game of Life</h1>
					</div>
					<div className="row">
						<div className="col-md-2"><button className="btn btn-primary">Run</button></div>
						<div className="col-md-2"><button className="btn btn-primary">Pause</button></div>
						<div className="col-md-2"><button className="btn btn-primary">Clear</button></div>
						<div className="col-md-2">Generators: 0</div>
					</div>
					
				</div>
				<div className="grid-container">
					{this.renderBoard()}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		cells: state.cells
	}
}

export default connect(mapStateToProps)(Board)