import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { accountActions } from '@/redux/actions';
import { verifyUserLoginWithEmail } from '@/utils/httpUtil';
import { UserInfo } from '@/redux/store/account/types';
import { ActionWithDeferred, IAction } from '../../typed/types';

export function* loginWithEmailSaga() {
    return yield takeLatest(accountActions.loginWithEmailSaga, function*({
        payload,
        deferred,
    }: ActionWithDeferred): IterableIterator<IAction> {
        try {
            const { username, password } = payload;
            const { data }: AxiosResponse<UserInfo> = yield call(verifyUserLoginWithEmail, username, password);
            yield put(accountActions.saveUserInfo(data));
            yield call(deferred.resolve);
        } catch (e) {
            console.log(e);
            yield call(deferred.reject);
        }
    });
}
