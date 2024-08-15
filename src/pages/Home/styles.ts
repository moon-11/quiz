import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background: linear-gradient(140deg, #171829, #d8d8df);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Catamaran', sans-serif;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(12, 6, 48, 0.9);
  border-radius: 15px;
  padding: 20px;
  width: 600px;
  height: 800px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.986);
  overflow: hidden;

  > p {
    color: #c0c0c0;
    font-size: 1.2rem;
    margin: 0;
  }

  .score {
    color: #adb2b6;
    font-size: 2.5rem;
    margin: 10px 0;
    font-weight: bold;
  }

  h1 {
    font-family: "Fascinate Inline", sans-serif;
    background-image: linear-gradient(180deg, #1e90ff, #00bfff);
    background-clip: text;
    color: transparent;
    font-size: 3rem;
    text-align: center;
    margin: 20px 0;
    filter: drop-shadow(3px 3px 7px rgba(17, 16, 112, 0.5));
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #1e90ff, #00bfff);
    border: 2px solid #1e90ff;
    box-shadow: 0px 5px 15px rgba(41, 29, 214, 0.5);
    border-radius: 12px;
    height: 50px;
    margin: 10px 0;
    padding: 0 30px;
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
    transition: background 0.3s, transform 0.3s;

    &:hover {
      background: linear-gradient(180deg, #00bfff, #1e90ff);
      transform: scale(1.05);
    }

    &:active {
      background: linear-gradient(180deg, #1e90ff, #00bfff);
      transform: scale(0.95);
    }
  }

  .start {
    max-width: 220px;
  }
`;
