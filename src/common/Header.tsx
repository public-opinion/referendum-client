
import React from 'react';
import logo from '../logo.svg';

import {
  Link
} from "react-router-dom";

import "./Header.scss"

export default function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/">
        Referendum
      </Link>
      &nbsp;
      <p className="description">
        you can raise topic,
        suggest solution,
        and vote for opinion in any organization
      </p>
    </header>
  );
}