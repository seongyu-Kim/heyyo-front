import React from "react";
import SurveyResultPage from "@/components/pages/survey/survey-result-page/SurveyResultPage";
import { useSurveyResult } from "@/hooks/use-survey-result";

export default function SurveyResult({ selectedButton, restartSurvey }) {
  const { selectedData, surveyTitleColor, surveyBgColor, surveyContentColor } =
    useSurveyResult(selectedButton);

  return (
    <>
      {selectedData && (
        <SurveyResultPage
          restartSurvey={restartSurvey}
          selectedData={selectedData}
          titleColor={surveyTitleColor(selectedData.id)}
          bgColor={surveyBgColor(selectedData.id)}
          contentColor={surveyContentColor(selectedData.id)}
        />
      )}
    </>
  );
}
