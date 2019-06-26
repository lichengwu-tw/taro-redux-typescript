import Taro, { Chain } from '@tarojs/taro';

let concurrentRequestCount = 0;
export default function(chain: Chain) {
    const requestParams = chain.requestParams;
    const { isShowLoadingDisabled } = requestParams;
    concurrentRequestCount++;
    if (concurrentRequestCount > 0 && !isShowLoadingDisabled) {
        Taro.showLoading({
            title: 'Loading...',
            mask: true,
        });
    }
    return chain
        .proceed(requestParams)
        .then(res => {
            concurrentRequestCount--;
            if (concurrentRequestCount === 0) {
                Taro.hideLoading();
            }
            return res;
        })
        .catch(err => {
            Taro.hideLoading();
            Taro.showModal({
                title: 'system error',
                content: err.errMsg,
                showCancel: false,
                confirmText: '关闭',
            });
            return err;
        });
}
