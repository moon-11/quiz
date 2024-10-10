import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: rgba(21, 21, 42, 0.825);
  border-radius: 12px;
  border: 2px solid #2b4f7b;
  padding: 30px;
  width: 500px;
  height: 500px;
  box-shadow: 0px 8px 25px rgba(30, 24, 96, 0.6);
  text-align: center;
  margin: 20px auto;

  p {
    font-size: 1.1rem;
    color: #c8c8c8;
    margin: 20px;
  }
`;

type ButtonWrapperProps = {
  $correct: boolean;
  $userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    user-select: none;
    font-size: 1rem;
    width: 100%;
    height: 50px;
    margin: 8px 0;
    background: ${({ $correct, $userClicked }) =>
      $correct
        ? "linear-gradient(90deg, #3a9e23, #0a6628)"
        : !$correct && $userClicked
        ? "linear-gradient(90deg, #a81b26, #6f0913)"
        : "linear-gradient(90deg, #243662, #172454)"};
    border: none;
    border-radius: 10px;
    color: #f0f0f0;
    font-weight: bold;
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
