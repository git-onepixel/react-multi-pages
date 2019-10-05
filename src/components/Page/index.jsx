import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import querystring from 'querystring';
import 'babel-polyfill';
import '@/styles/base.less';

class Page extends Component {
  static run() {
    const PageComponent = this;
    const params = querystring.parse(window.location.search.substr(1));

    ReactDOM.render(
      <PageComponent {...params} />,
      document.getElementById('app'),
    );
  }

  forward(pageName, params) {
    const url = `${pageName}.html?${querystring.stringify(params)}`;
    window.location.href = url;
  }
}

export default Page;
