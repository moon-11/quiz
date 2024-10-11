import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Catamaran', sans-serif;
    background: linear-gradient(140deg, #081128, #0f3c5aff);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
  }
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', Sans-Serif;
    background-color: #121212;
    color: #e0e0e0;
    line-height: 1.6;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    overflow-y: auto;

    
    &::-webkit-scrollbar {
      width: 8px; 
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.4); 
      border-radius: 10px; 
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.2); 
      border-radius: 10px; 
    }
  }

  @media (max-width: 768px) {
    body {
      line-height: 1.4;
    }

    h1, h2, h3, h4, h5, h6 {
      font-size: 1.2rem;
    }

    button {
      padding: 8px 16px;
      font-size: 0.9rem;
    }

    input, textarea {
      padding: 8px;
    }
  }

  @media (max-width: 480px) {
    body {
      padding: 15px;
      text-align: center;
    }

    h1, h2, h3, h4, h5, h6 {
      font-size: 1rem;
    }

    button {
      padding: 6px 12px;
      font-size: 0.85rem;
    }

    input, textarea {
      padding: 6px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: #f2f2f2;
    font-weight: 600;
    margin-bottom: 1rem;
    transition: font-size 0.3s ease;
  }

  a {
    color: #1e90ff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #00bfff;
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: #333;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background 0.3s ease;

    &:hover {
      background: #555; 
    }
  }

  input, textarea {
    font-family: inherit;
    border: 1px solid #555;
    border-radius: 4px;
    padding: 10px;
    background: #222;
    color: #e0e0e0;
  }
`;
