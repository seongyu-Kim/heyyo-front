// TODO . 가입하기 버튼 눌렀을 때 처리 로직 구현, 내용보기 추가 구현(버튼 눌렀을 때) 필요
import SignupTermsForm from "@/components/pages/signup/signup-terms-form/SignupTermsForm";

export default function SignupRecommenderForm() {
  return (
    <div>
      <div className="recommender-container">
        <span>
          <input
            id="recommender"
            className="recommender-input"
            type="text"
            placeholder="추천인 아이디를 입력해주세요."
          />
        </span>
      </div>
      <SignupTermsForm />
      <div className="button-container">
        <span>
          <button className="recommender-button">가입하기</button>
        </span>
      </div>

      {/* CSS */}
      <style jsx>{`
        .recommender-container {
          margin-top: 14.44rem;
          margin-bottom: 1.37rem;
        }

        .recommender-input {
          width: 18.375rem;
          height: 2.125rem;
          flex-shrink: 0;
          padding: 18px;
          border: none;
          border-radius: 0.5625rem;
          background: #e9f7ff;
          left: 6.25rem;
          top: 14.44rem;
          padding-bottom: 1.37rem;

          /* Placeholder 스타일 지정 */
          ::placeholder {
            color: #000;
            text-align: center;
            font-family: "Noto Sans KR", sans-serif;
            font-size: 0.8125rem;
            font-style: normal;
            font-weight: 400;
            line-height: 129.8%;
          }
        }

        .recommender-button {
          width: 28.1875rem;
          height: 2.125rem;
          flex-shrink: 0;
          border-radius: 0.5625rem;
          background: #229eeb;

          color: #fff;
          text-align: center;
          font-family: Noto Sans KR;
          font-size: 0.8125rem;
          font-style: normal;
          font-weight: 900;
          line-height: normal;
        }
      `}</style>
    </div>
  );
}
