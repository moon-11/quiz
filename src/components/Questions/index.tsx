import React from "react";
import { useTranslation } from "react-i18next";
import { AnswerObject } from "../../pages/Home";
import { ButtonWrapper, Wrapper } from "./styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <p className="number">{t("question", { questionNr, totalQuestions })}</p>
      <p
        dangerouslySetInnerHTML={{
          __html: t("questionText", { text: question }),
        }}
      />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            $correct={userAnswer?.correctAnswer === answer}
            $userClicked={userAnswer?.answer === answer}
          >
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span
                dangerouslySetInnerHTML={{
                  __html: t("answerText", { text: answer }),
                }}
              />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};
