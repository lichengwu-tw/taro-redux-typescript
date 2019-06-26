// referr to https://github.com/redux-saga/redux-saga/issues/697
interface Defered {
    resolve: any;
    reject: any;
}

const createExposedPromise = () => {
    const deferred: Defered = { resolve: null, reject: null };

    const promise = new Promise((resolve, reject) => {
        deferred.resolve = resolve;
        deferred.reject = reject;
    });

    return [promise, deferred];
};

export default () => next => action => {
    // if the action is not related to saga
    if (!action.type.endsWith('Saga')) {
        return next(action);
    }

    const [promise, deferred] = createExposedPromise();
    const newActions = { ...action, deferred };

    next(newActions);
    return promise;
};
