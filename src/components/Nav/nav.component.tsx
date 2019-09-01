import * as React from 'react';

import { NavProps } from './models/nav.props';

export default class NavBarComponent extends React.Component<NavProps> {
  render() {
    let credentials;
    if (typeof this.props.credentials === 'string') {
      credentials = this.props.credentials;
    } else if (typeof this.props.credentials === 'object') {
      credentials = this.props.credentials.map((item: JSX.Element, index) => {
          return <span key={index.toString()}>{item}</span>
      });
    }
    return (
      <div className='NavBar'>
        <div className='LinkListWrapper'>
          {this.props.linkList.map((linkItem, index) => {
            return (
              <a key={index.toString()} className='NavItem' href={linkItem.url}>
                {linkItem.text}
              </a>
            );
          })}
        </div>
        <div className='Credentials'>{credentials}</div>
      </div>
    );
  }
}
