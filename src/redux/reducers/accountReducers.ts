import Immutable from 'seamless-immutable';
import { accountActions } from '@/redux/actions';
import { IAction } from '@/typed/types';

import createReducers from '@/utils/reducerHelper';

const initState = Immutable.from({
    userInfo: {
        email: '',
        name: '',
        token: '',
    },
    wechat: {
        openId: '',
    },
});

export default createReducers(on => {
    on(accountActions.saveUserInfo, (state: typeof initState, action: IAction) => {
        const { userInfo } = action.payload;
        return state.merge({ userInfo });
    });
}, initState);
