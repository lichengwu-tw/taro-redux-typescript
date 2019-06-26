import { combineReducers } from 'redux';
import accountReducers from '@/redux/reducers/accountReducers';

const root = combineReducers({
    accountReducers,
});
export default root;
