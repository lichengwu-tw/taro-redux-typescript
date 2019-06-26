import { createAction } from 'redux-actions';

interface ActionMap {
    [key: string]: any;
}

const actionMap: ActionMap = {};

interface IActions {
    [key: string]: any;
}

const createActions = (obj: any): IActions => {
    const actionProxy = {};
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'function') {
            if (actionMap.hasOwnProperty(key)) {
                throw new Error(`action - '${key}' is duplicated`);
            } else {
                // 1 shows action exists
                actionMap[key] = 1;
            }

            actionProxy[key] = createAction(key, obj[key].bind(actionProxy));
            actionProxy[key].toString = () => key;
        }
    });
    return actionProxy;
};

export default createActions;
