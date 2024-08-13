import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: rgba(12, 6, 48, 0.9);
  border-radius: 12px;
  border: 3px solid #1e90ff;
  padding: 30px;
  width: 500px;
  height: 500px;
  box-shadow: 0px 10px 30px rgba(0, 35, 230, 0.7);
  text-align: center;
  margin: 20px auto;

  p {
    font-size: 1.1rem;
    color: #e0e0e0;
    margin: 0;
  }
`;

type ButtonWrapperProps = {
  $correct: boolean;
  $userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    user-select: none;
    font-size: 1rem;
    width: 100%;
    height: 50px;
    margin: 8px 0;
    background: ${({ $correct, $userClicked }) =>
      $correct
        ? "linear-gradient(90deg, #478d18, #074d1c)"
        : !$correct && $userClicked
        ? "linear-gradient(90deg, #880512, #7e0422)"
        : "linear-gradient(90deg, #008cff, #2560e0)"};
    border: none;
    border-radius: 12px;
    color: #fff;
    font-weight: bold;
    box-shadow: 0px 4px 12px rgba(6, 20, 216, 0.733);
    transition: background 0.3s, transform 0.2s, box-shadow 0.3s;

    &:active {
      background: ${({ $correct, $userClicked }) =>
        $correct
          ? "linear-gradient(90deg, #1ea811, #177c35)"
          : !$correct && $userClicked
          ? "linear-gradient(90deg, #8b1818, #c0190d)"
          : "linear-gradient(90deg, #006eff, #002ab3)"};
      transform: scale(1);
      box-shadow: 0px 4px 12px rgba(0, 162, 255, 0.623);
    }
  }
`;
