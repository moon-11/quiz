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
    color: #e0e0e0; /* Texto claro para contraste */
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
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 100%;
    height: 50px;
    margin: 8px 0;
    background: ${({ $correct, $userClicked }) =>
      $correct
        ? "linear-gradient(90deg, #28a745, #218838)"
        : !$correct && $userClicked
        ? "linear-gradient(90deg, #dc3545, #c82333)"
        : "linear-gradient(90deg, #007bff, #0056b3)"};
    border: none;
    border-radius: 12px;
    color: #fff;
    font-weight: bold;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.623); /* Sombra mais forte */
    transition: background 0.3s, transform 0.2s, box-shadow 0.3s;

    /* Aplicar o efeito de hover somente se o botão não tiver sido clicado */
    &:hover {
      background: ${({ $correct, $userClicked }) =>
        !$userClicked
          ? $correct
            ? "linear-gradient(90deg, #218838, #28a745)"
            : "linear-gradient(90deg, #0056b3, #007bff)"
          : "linear-gradient(90deg, #007bff, #0056b3)"};
      transform: ${({ $userClicked }) =>
        $userClicked ? "none" : "scale(1.05)"};
      box-shadow: ${({ $userClicked }) =>
        $userClicked
          ? "0px 4px 12px rgba(0, 0, 0, 0.623)"
          : "0px 6px 14px rgba(0, 0, 0, 0.7)"};
    }

    &:active {
      background: ${({ $correct, $userClicked }) =>
        $correct
          ? "linear-gradient(90deg, #218838, #28a745)"
          : !$correct && $userClicked
          ? "linear-gradient(90deg, #dc3545, #c82333)"
          : "linear-gradient(90deg, #007bff, #0056b3)"};
      transform: scale(1);
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.623);
    }
  }
`;
