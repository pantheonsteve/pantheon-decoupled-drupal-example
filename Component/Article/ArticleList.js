import React from 'react';
import ArticleItem from './ArticleItem';

export default class ArticleList extends React.Component {

  render() {
    let { data } = this.props;
    return (
      <div>
        <h1>Here are your articles:</h1>
        {
          data !== null &&
          data !== undefined &&
          data.length > 0 ?
          data.map(item => <ArticleItem {...item} key={item.id}/>)
          :
          <div>No Articles Found</div>
        }
      </div>
    );
  }
}
