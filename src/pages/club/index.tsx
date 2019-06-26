import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import './index.scss';

export default class Article extends Component {
    config: Config = {
        navigationBarTitleText: '首页',
    };

    render() {
        return (
            <View className="index">
                <AtButton type="primary">按钮文案</AtButton>
            </View>
        );
    }
}
