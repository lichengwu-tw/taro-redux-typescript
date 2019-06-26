import Taro, { Component } from '@tarojs'
import { AtCard } from "taro-ui";

class ArticleCard extends Component {
  render() {
    return (
      <AtCard
        note='小Tips'
        extra='额外信息'
        title='这是个标题'
        thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
      >
        这也是内容区 可以随意定义功能
      </AtCard>
    );
  }
}

export default ArticleCard;
