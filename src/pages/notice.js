import NoticeStartBox from "@/components/pages/notice/notice-start-box/NoticeStartBox";
import NoticeCompetitionContainer from "@/components/pages/notice/notice-competition-container/NoticeCompetitionContainer";
import NoticeQuestionContainer from "@/components/pages/notice/notice-question-container/NoticeQuestionContainer";

export default function notice() {
    return (
        <div>
            <NoticeStartBox />
            <NoticeCompetitionContainer />
            <NoticeQuestionContainer />
        </div>
    );
}
