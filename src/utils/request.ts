import Taro from '@tarojs/taro';
// import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@/constants/http';

// const systemInfo = Taro.getSystemInfoSync();
// const channelCode = systemInfo && systemInfo.system === 'AndroidOS' ? 'W_ANDROID' : 'W_IOS';

// refer to https://gitlab.com/snippets/1775781

interface RequestParams {
    url: string;
    header: any;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS';
    dataType?: string;
    data?: any;
    retry?: number;
}

async function retry(params: RequestParams, interval = 4000) {
    try {
        const val = await Taro.request(params);
        return val;
    } catch (error) {
        console.log(error);
        if (params.retry && params.retry > 0) {
            await new Promise(r => setTimeout(r, interval));
            params.retry--;
            return retry({ retry: 5, ...params });
        }
        throw error;
    }
}

export const taroRequest = async (requestObj: RequestParams, baseUrl = BASE_URL) => {
    const isStartWithHttpOrHttps = (url: string) => {
        const trimedUrl = String(url).trim();
        return url && (trimedUrl.startsWith('http://') || trimedUrl.startsWith('https://'));
    };
    const innerUrl = isStartWithHttpOrHttps(requestObj.url) ? requestObj.url : `${baseUrl}/${requestObj.url}`;

    const params: RequestParams = {
        ...requestObj,
        url: innerUrl,
        header: {
            ...requestObj.header,
        },
        retry: 3,
    };

    const result = await retry(params);
    return result;
};
