import SignupInputForm from "@/components/pages/signup/signup-input-form/SignupInputForm";

export default function SignupRightTab() {
    return(
        <div className="sign-right">
            <span className="sign-right-text">어서오세요!<br/>해요에 여러분을 입력하세요.</span>
            <SignupInputForm />
            {/* CSS */}
            <style jsx>{`
            .sign-right {
              position: absolute;
              width: 41.5rem;
              height: 37.4375rem;
              flex-shrink: 0;
              background: #FFF;
              box-shadow: 4px 4px 30px 2px rgba(0, 0, 0, 0.10);
              left: 48.6rem;
              right: 29.9rem;
              top: 17.8rem;
              bottom: 12.3rem;
              display: flex;
              flex-direction: column;
              text-align: left;
            }
            
            .sign-right-text {
              display: block;
              color: #000;
              font-family: Noto Sans KR;
              font-size: 2.25rem;
              font-style: normal;
              font-weight: 700;
              line-height: 129.8%;
              padding-left: 7.37rem;
              padding-top: 5.12rem;
              padding-bottom: 2.81rem;
            }
        `}
            </style>
        </div>
    );
}