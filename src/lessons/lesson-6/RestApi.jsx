import React, { Component } from 'react';
import ContentLoader, { Facebook } from 'react-content-loader';

import { FetchWithQuery } from './api/FetchWithQuery.jsx';

const MyLoader = () => <ContentLoader />;
// const MyFacebookLoader = () => <Facebook />;

export const ArticleList = ({ articles }) => {
  return (
    <ul>
      {articles.map(({ objectID, title, url }) => (
        <li key={objectID}>
          {' '}
          <a href={url}>{title}</a>
        </li>
      ))}
    </ul>
  );
};

export default class RestApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    FetchWithQuery('html')
      .then(articles => this.setState({ articles }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <>
        {isLoading && <MyLoader />}
        {error && <p>что-то пошло не так: {error.message}</p>}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </>
    );
  }
}
