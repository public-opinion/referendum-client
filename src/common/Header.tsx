
import React from 'react';
import logo from '../logo.svg';

import {
  Link
} from "react-router-dom";

import "./Header.scss"
import Marquee from '../hoc/Marquee';
import { User } from '../ui/SVGIcons';
import { style } from './util';
import Button from './Button';

export default function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/">
        Referendum
      </Link>
      &nbsp;
      <Marquee>
        <p className="description">
          you can raise topic,
          suggest solution,
          and vote for opinion in any organization
        </p>
      </Marquee>
      
      <Link className="header-right" to="/user">
        <User
            width="60" height="60"
            stroke="black" fill="white" />
      </Link>
    </header>
  );
}