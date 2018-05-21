import { combineReducers } from 'redux';
import ReducerCells from './reducer_cells';

const rootReducer = combineReducers({
	cells: ReducerCells
});

export default rootReducer;
