import NoticeStartBox from "@/components/pages/notice/notice-start-box/NoticeStartBox";
import NoticeCompetitionContainer from "@/components/pages/notice/notice-competition-container/NoticeCompetitionContainer";
import NoticeQuestionContainer from "@/components/pages/notice/notice-question-container/NoticeQuestionContainer";
import NoticeQuestionPagination from "@/components/pages/notice/notice-question-container/NoticeQuestionPagination";

export default function notice() {
  return (
    <div style={{ position: "relative" }}>
      <NoticeStartBox />
      <NoticeCompetitionContainer />
      <NoticeQuestionContainer />
      <NoticeQuestionPagination />
    </div>
  );
}
