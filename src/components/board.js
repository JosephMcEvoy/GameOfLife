import React, { Component } from 'react';
import { connect } from 'react-redux';

class Board extends Component {
	/*recalculateBoard(){
		for (var i = 0; i < this.props.cells.length; i++) {
			if this.props.cells[i-1].isAlive === 0 && // one before
				this.props.cells[i+1].isAlive ===  // one in front
				this.props.cells[i+1].isAlive ===  // one in front

		};
	}*/
	constructor(props){
		super(props);
		this.state = {
			cells: this.props.cells
		}
	}

	recalculateBoard(cells, rowSize){
		let neighborTotal = 0;
		// Any live cell with fewer than two live neighbors dies, as if caused by under population.
		// Any live cell with two or three live neighbors lives on to the next generation.
		// Any live cell with more than three live neighbors dies, as if by overpopulation.
		// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
		function relativeNeighbors(cells){
			for (var i = 0; i < cells.length; i++) {
				const relativeNeighbors = [];
				if (cells[i - 1]) {relativeNeighbors.push(cells[i - 1].isAlive)};
				if (cells[i + 1]) {relativeNeighbors.push(cells[i + 1].isAlive)};
				if (cells[i - rowSize]) {relativeNeighbors.push(cells[i - rowSize].isAlive)};
				if (cells[i - rowSize - 1]) {relativeNeighbors.push(cells[i - rowSize - 1].isAlive)};
				if (cells[i - rowSize + 1]) {relativeNeighbors.push(cells[i - rowSize + 1].isAlive)};
				if (cells[i + rowSize]) {relativeNeighbors.push(cells[i + rowSize].isAlive)};
				if (cells[i + rowSize - 1]) {relativeNeighbors.push(cells[i + rowSize - 1].isAlive)};
				if (cells[i + rowSize + 1]) {relativeNeighbors.push(cells[i + rowSize + 1].isAlive)};

				relativeNeighbors.forEach(neighbor => {
					if (neighbor === 1 ) {
						neighborTotal += 1;
					}
				});		

				console.log("Current iteration:", i, ". This cell is", cells[i].isAlive ? "alive." : "dead.");
				console.log("Neighbors: ", relativeNeighbors);
				console.log("Total neighbors: ", neighborTotal);

				neighborTotal = 0;
			}
		}
		relativeNeighbors(cells, 10);
	}

	renderBoard(){
		this.recalculateBoard(this.state.cells, Math.sqrt(this.state.cells.length));
		console.log(this.props.cells);
		return this.props.cells.map((cell, i, arr) => {
			return (
				<div className={cell.isAlive ? "cell is-alive" : "cell is-dead"} key={cell.id} id={cell.id}></div>
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
					<div className="row buttons-container">
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