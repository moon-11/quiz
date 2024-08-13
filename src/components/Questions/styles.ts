import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #f0faff;
  border-radius: 12px;
  border: 3px solid #00aaff;
  padding: 30px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: 20px auto;

  p {
    font-size: 1.1rem;
    color: #333;
    margin: 0;
  }
`;

type ButtonWrapperProps = {
  $correct: boolean;
  $userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 100%;
    height: 50px;
    margin: 8px 0;
    background: ${({ $correct, $userClicked }) =>
      $correct
        ? "linear-gradient(90deg, #56FFA4, #59BC86)"
        : !$correct && $userClicked
        ? "linear-gradient(90deg, #FF5656, #C16868)"
        : "linear-gradient(90deg, #4a90e2, #6ab0ff)"};
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    color: #fff;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    font-weight: bold;
    transition: background 0.3s, transform 0.2s;

    &:hover {
      background: ${({ $correct, $userClicked }) =>
        $correct
          ? "linear-gradient(90deg, #4bdc91, #45a67e)"
          : !$correct && $userClicked
          ? "linear-gradient(90deg, #ff4747, #b74a4a)"
          : "linear-gradient(90deg, #3a8ed9, #5a9bdf)"};
      transform: scale(1.05);
    }

    &:active {
      background: ${({ $correct, $userClicked }) =>
        $correct
          ? "linear-gradient(90deg, #45a67e, #4bdc91)"
          : !$correct && $userClicked
          ? "linear-gradient(90deg, #b74a4a, #ff4747)"
          : "linear-gradient(90deg, #5a9bdf, #3a8ed9)"};
      transform: scale(0.98);
    }
  }
`;
