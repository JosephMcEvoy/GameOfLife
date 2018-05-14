import { combineReducers } from 'redux';
import CellReducer from './reducer_cells';

const rootReducer = combineReducers({
	cells: CellReducer
});

export default rootReducer;
