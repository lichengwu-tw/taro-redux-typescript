import { handleActions } from 'redux-actions';

const createReducers = (func: (key: any) => any, initialState: any) => {
    const reducerMap = {};
    const on = (actionCreator: any, handler: any, errorHandler: any) => {
        const actionType = actionCreator.toString();
        reducerMap[actionType] = {
            next: handler,
            throw: errorHandler,
        };
    };
    func(on);
    // reference to https://redux-actions.js.org/
    return handleActions(reducerMap, initialState);
};

export default createReducers;
