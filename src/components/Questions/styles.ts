import styled from "styled-components";

interface ButtonWrapperProps {
  $correct: boolean;
  $userClicked: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  max-width: 90%;
  background: rgba(21, 21, 42, 0.825);
  border-radius: 12px;
  border: 2px solid #2b4f7b;
  padding: 20px;
  box-shadow: 0px 8px 25px rgba(30, 24, 96, 0.6);
  text-align: center;
  margin: 20px auto;
  box-sizing: border-box;

  p {
    font-size: 1rem;
    color: #c8c8c8;
    margin: 15px 0;
  }

  @media (min-width: 768px) {
    max-width: 700px;
    padding: 25px;
    p {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1024px) {
    max-width: 1100px;
    padding: 30px;
  }
`;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    width: 100%;
    height: 50px;
    margin: 5px 0;
    background: ${({ $correct, $userClicked }) =>
      $correct
        ? "linear-gradient(90deg, #3a9e23, #0a6628)"
        : !$correct && $userClicked
        ? "linear-gradient(90deg, #a81b26, #6f0913)"
        : "linear-gradient(90deg, #243662, #172454)"};
    border: none;
    border-radius: 10px;
    color: #f0f0f0;
    font-size: 0.9rem;
    font-weight: bold;
    line-height: 1.2;
    padding: 0 15px;
    box-shadow: 0px 5px 12px rgba(3, 8, 37, 0.773);
    transition: background 0.3s, transform 0.2s, box-shadow 0.3s;

    &:hover {
      transform: scale(1.02);
    }

    &:active {
      background: ${({ $correct, $userClicked }) =>
        $correct
          ? "linear-gradient(90deg, #1e9a11, #145721)"
          : !$correct && $userClicked
          ? "linear-gradient(90deg, #8d1e1e, #4d0c11)"
          : "linear-gradient(90deg, #2557d9, #14286e)"};
      transform: scale(0.98);
      box-shadow: 0px 4px 10px rgba(0, 100, 255, 0.5);
    }
  }
`;
