import { all, call, spawn, delay, fork } from 'redux-saga/effects';
import { loginWithEmailSaga } from '@/redux/sagas/accountSaga';

const makeRestartable = saga => {
    return function*() {
        yield spawn(function*() {
            while (true) {
                try {
                    yield call(saga);
                    console.error(
                        'unexpected root saga termination. The root sagas are supposed to be sagas that live during the whole app lifetime!',
                        saga,
                    );
                } catch (e) {
                    console.error('Saga error, the saga will be restarted', e);
                }
                yield delay(1000); // Workaround to avoid infinite error loops
            }
        });
    };
};

const rootSagas = [loginWithEmailSaga].map(makeRestartable);

export default function* root() {
    yield all(rootSagas.map(saga => fork(saga)));
    // yield rootSagas.map(saga => call(saga));
}
