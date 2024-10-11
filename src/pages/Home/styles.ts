import styled from "styled-components";

export const Wrapper = styled.div<{ isFirstQuestion: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ isFirstQuestion }) =>
    isFirstQuestion ? "rgba(20, 20, 30, 0.95)" : "transparent"};
  border-radius: 15px;
  padding: 20px;
  width: calc(100% - 40px);
  max-width: 600px;
  min-height: 90vh;
  margin: 20px;
  box-shadow: ${({ isFirstQuestion }) =>
    isFirstQuestion ? "0px 4px 20px rgba(0, 0, 0, 0.6)" : "none"};

  > p {
    color: #a0a0b3;
    font-size: 1rem;
    margin: 0;
  }

  .score {
    color: #dcdcdc;
    font-size: 1.8rem;
    margin: 15px 0;
    font-weight: bold;
  }

  h1 {
    font-family: "Fascinate Inline", sans-serif;
    background-image: linear-gradient(180deg, #d8d8df, #4b4b4b);
    background-clip: text;
    color: transparent;
    font-size: 2rem;
    text-align: center;
    margin: 20px 0;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.7));
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #273965, #070e29);
    border: none;
    box-shadow: 0px 4px 15px rgba(41, 41, 64, 0.6);
    border-radius: 12px;
    height: 50px;
    margin: 10px 0;
    padding: 0 30px;
    font-size: 1rem;
    color: #e0e0e0;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(180deg, #070e29, #273965);
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  @media (min-width: 768px) {
    padding: 25px;
    h1 {
      font-size: 2.4rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 35px;
  }
`;
