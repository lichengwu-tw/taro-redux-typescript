import createActions from '@/utils/actionHelper';
import { Action } from 'redux-actions';
import { UserInfo } from '@/redux/store/account/types';

interface AccountActions {
    saveUserInfo: (userInfo: UserInfo) => Action<UserInfo>;
    loginWithEmailSaga: (username: string, password: string) => Action<any>;
}

export default createActions({
    saveUserInfo: (userInfo: UserInfo) => ({ userInfo }),
    loginWithEmailSaga: (username: string, password: string) => ({
        username,
        password,
    }),
}) as AccountActions;
