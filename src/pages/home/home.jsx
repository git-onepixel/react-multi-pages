/**
 * @file home
 */

import React from 'react';
import Page from '@/components/Page';
import Header from '@/components/Header';
import '@/utils/device';
import './home.less';

class Home extends Page {
  goAbout() {
    this.forward('about', {
      name: 'Alice',
    });
  }

  render() {
    return (
      <div className="home-page-view">
        <Header />
        this is home page
        <div className="go" onClick={() => this.goAbout()}>
          跳转
        </div>
      </div>
    );
  }
}

Home.run();
