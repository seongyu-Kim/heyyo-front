import SurveyStartPage from "@/components/pages/survey/survey-start-page/SurveyStartPage";
import SurveyPage from "@/components/pages/survey/survey-page/SurveyPage";
import surveyTestData from "@/data/surveyTestData";
import SurveyResult from "@/pages/survey-result";
import { useState } from "react";

export const useSurvey = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedButton, setSelectedButton] = useState([]);
  const [selectedSurvey1, setSelectedSurvey1] = useState(false);
  const [selectedSurvey2, setSelectedSurvey2] = useState(false);
  const [selectedSurvey3, setSelectedSurvey3] = useState(false);
  const [selectedSurvey4, setSelectedSurvey4] = useState(false);

  const handleNextPage = (selectedButton) => {
    setSelectedButton((prevSelected) => [...prevSelected, selectedButton]);
    setCurrentPage((prevPage) => prevPage + 1);

    switch (selectedButton) {
      case 2:
      case 3:
        setSelectedSurvey1(true);
        break;
      case 4:
      case 5:
        setSelectedSurvey2(true);
        break;
      case 6:
      case 7:
        setSelectedSurvey3(true);
        break;
      case 8:
      case 9:
        setSelectedSurvey4(true);
        break;
    }
  };

  const restartSurvey = () => {
    setSelectedButton([]);
    setCurrentPage(1);
    setSelectedSurvey1(false);
    setSelectedSurvey2(false);
    setSelectedSurvey3(false);
    setSelectedSurvey4(false);
  };

  const renderCurrentPage = () => {
    if (currentPage <= 5) {
      switch (currentPage) {
        case 1:
          return <SurveyStartPage handleNextPage={handleNextPage} />;
        case 2:
        case 3:
        case 4:
        case 5:
          return (
            <SurveyPage
              handleNextPage={handleNextPage}
              surveyData={surveyTestData}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setSelectedButton={setSelectedButton}
            />
          );
      }
    } else {
      if (
        selectedSurvey1 &&
        selectedSurvey2 &&
        selectedSurvey3 &&
        selectedSurvey4
      ) {
        return (
          <SurveyResult
            selectedButton={selectedButton}
            restartSurvey={restartSurvey}
          />
        );
      } else {
        setSelectedButton([]);
        setCurrentPage(2);
        setSelectedSurvey1(false);
        setSelectedSurvey2(false);
        setSelectedSurvey3(false);
        setSelectedSurvey4(false);
      }
    }
  };

  return {
    renderCurrentPage,
  };
};
