import { useSurvey } from "@/hooks/use-survey";

export default function Survey() {
  const { renderCurrentPage } = useSurvey();
  return renderCurrentPage();
}
