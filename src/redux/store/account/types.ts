export interface WeChat {
    openId: string;
}

export interface UserInfo {
    email: string;
    name: string;
    token: string;
    isAdmin?: boolean;
}

export interface AccountState {
    userInfo: UserInfo;
    wechat: WeChat;
}
