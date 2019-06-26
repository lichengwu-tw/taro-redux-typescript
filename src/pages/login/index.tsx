import Taro, { Component, Config } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { bindActionCreators } from 'redux';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { accountActions } from '@/redux/actions';
import { UserInfo } from '@/redux/store/account/types';
import './index.scss';

interface LoginProps {
    loginWithEmailSaga: any;
    userInfo: UserInfo;
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loginWithEmailSaga: bindActionCreators(accountActions.loginWithEmailSaga, dispatch),
    };
};

const mapStateToProps = ({ accountReducers }) => {
    return {
        userInfo: accountReducers.userInfo,
    };
};

class Login extends Component<LoginProps> {
    config: Config = {
        navigationBarTitleText: '登入页面',
    };

    componentDidMount() {
        const { loginWithEmailSaga } = this.props;
        loginWithEmailSaga('mikewu', '13123123');
    }

    render() {
        const { userInfo } = this.props;
        const user: UserInfo = userInfo;
        return (
            <View className="index">
                <AtButton type="primary">{user.name}</AtButton>
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
