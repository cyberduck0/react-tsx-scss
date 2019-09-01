import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { NavLink } from './components/Nav/models/nav-link.model';

import './App.css';
import HomePageComponent from './components/Home/home';
import NavBarComponent from './components/Nav/nav.component';
import OtherPageComponent from './components/Other/other.component';

class App extends React.Component {
  linkList: NavLink[] = [
    {
      text: 'Home',
      url: '/home',
    },
    {
      text: 'Some page',
      url: '/other',
    },
  ];

  creds = ["This simple app was created by ", <strong>Alexander Shcherbakov</strong>, <br/>, <a href="https://github.com/a2net">https://github.com/a2net</a>];
  public render() {
    return (
      <div className='AppWrapper'>
        <BrowserRouter>
          <NavBarComponent linkList={this.linkList} credentials={this.creds} />
          <div className='AppContent'>
            <Route path='/home' component={HomePageComponent} />
            <Route path='/other' component={OtherPageComponent} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
