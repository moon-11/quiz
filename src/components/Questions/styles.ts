import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: rgba(4, 4, 16, 0.46);
  border-radius: 12px;
  border: 2px solid #1a62bb;
  padding: 30px;
  width: 90%;
  height: auto;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0px 8px 25px rgba(0, 50, 200, 0.6);
  text-align: center;
  margin: 20px auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #012556;
    border-radius: 10px;
    transition: background 0.3s;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #02307b;
  }

  p {
    font-size: 1.1rem;
    color: #cdd7d6;
    margin: 1rem 0;
  }

  @media (max-width: 768px) {
    padding: 25px;
    width: 95%;
    max-height: 90vh;
  }

  @media (max-width: 480px) {
    padding: 20px;
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
        : "linear-gradient(90deg, #20335f, #203a97)"};
    border: none;
    border-radius: 10px;
    color: #f0f0f0;
    font-weight: bold;
    box-shadow: 0px 5px 12px rgba(0, 30, 180, 0.5);
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
          : "linear-gradient(90deg, #2a4790, #14286e)"};
      transform: scale(0.98);
      box-shadow: 0px 4px 10px rgba(0, 46, 114, 0.5);
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
      height: 45px;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
      height: 40px;
    }
  }
`;
