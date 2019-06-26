import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import './index.scss';

class Index extends Component {
    config: Config = {
        navigationBarTitleText: '首页',
    };

    render() {
        return (
            <View className="index">
                <AtButton type="primary">首页页面</AtButton>
            </View>
        );
    }
}

export default Index as ComponentClass<{}, {}>;
