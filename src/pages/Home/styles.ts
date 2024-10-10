import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Catamaran', sans-serif;
    background: linear-gradient(140deg, #0e1d43, #3c2a4d);
    display: flex;
    justify-content: center;
    align-items: center;
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
  background: rgba(20, 20, 30, 0.95);
  border-radius: 15px;
  padding: 25px;
  width: 600px;
  height: 800px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.6);
  overflow: hidden;

  > p {
    color: #a0a0b3;
    font-size: 1rem;
    margin: 0;
  }

  .score {
    color: #dcdcdc;
    font-size: 2rem;
    margin: 15px 0;
    font-weight: bold;
  }

  h1 {
    font-family: "Fascinate Inline", sans-serif;
    background-image: linear-gradient(180deg, #d8d8df, #4b4b4b);
    background-clip: text;
    color: transparent;
    font-size: 2.7rem;
    text-align: center;
    margin: 20px 0;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.7));
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #353f59, #1e2747);
    border: none;
    box-shadow: 0px 4px 15px rgba(41, 41, 64, 0.6);
    border-radius: 12px;
    height: 50px;
    margin: 15px 0;
    padding: 0 30px;
    font-size: 1.1rem;
    color: #e0e0e0;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(180deg, #1e2747, #353f59);
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .start {
    max-width: 200px;
  }
`;
