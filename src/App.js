import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleList from './Components/Article/ArticleList';

const LIST_URL = 'https://dev-nasdaq-feeds-demo.pantheonsite.io/jsonapi/node/article';


class App extends Component {

  constructor() {
    super();
    this.state = {data: null };
    this.loadArticles = this.loadArticles.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  loadArticles() {
    //fetch Articles.
    fetch(LIST_URL, {mode:'cors'}).then(function (response) {
      return response.json();
    })
    .then((data) => this.updateData(data))
    .catch(err => console.log('Fetching Articles Failed', err));
  }

  updateData(responseData) {
   this.setState({data: responseData.data});
 }

  componentWillMount() {
    this.loadArticles();
  }

  render() {
    return (
      <div className="App">
        <ArticleList
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
