import { taroRequest } from './request';

export const verifyUserLoginWithEmail = (username: string, password: string) => {
    return taroRequest({
        method: 'GET',
        header: {
            'Content-Type': 'application/json',
        },
        url: `5d106c34300000a5314c9f37`,
        data: {
            username,
            password,
        },
    });
};
