import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Karla';
    src: local('Karla'), url('/fonts/Karla-Regular.ttf') format('truetype');
    font-weight: 400;
    font-display: block;
  }
  @font-face {
    font-family: 'SourceSansPro';
    src: local('SourceSansPro'), url('/fonts/SourceSansPro-Regular.ttf') format('truetype');
    font-weight: 400;
    font-display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: .5s;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  input {
    font: inherit;
  }

  button {
    font: inherit;
    border: 0;
    background-color: transparent;
  }

  html {
    font-size: 10px;
  }

  body {
    height: 100vh;
    font: 1.6rem 'Source Sans Pro', sans-serif;
    display: flex;
  }

  #root {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;;
  }
  main {
    flex: 1 0 auto;
    overflow: hidden;
  }
  a,
  input,
  button {
    cursor: pointer;
    transition: 0.4s;
  }

  .no-scroll {
    overflow: hidden;
  }
  h1 {
    font-size: 7.2rem;
    line-height: 1.169;
  }
  h2 {
    font-size: 6.4rem;
    line-height: 1.169;
  }
  h3 {
    font-size: 3.6rem;
    line-height: 1.169;
  }
  h4 {
    font-size: 2.4rem;
    line-height: 1.169;
  }
  h5 {
    font-size: 1.8rem;
    line-height: 1.169;
  }
  h6 {
    font-size: 1.2rem;
    line-height: 1.169;
  }
`
