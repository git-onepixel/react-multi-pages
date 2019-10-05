/**
 * @file about
 */

import React from 'react';
import Page from '@/components/Page';
import '@/utils/device';
import './about.less';

class About extends Page {
  render() {
    return (
      <div className="about-page-view">
        this is about page
        <div>
          Url 参数
          {this.props.name}
        </div>
      </div>
    );
  }
}

About.run();
