import Image from "next/image";
import SignupRecommenderForm from "@/components/pages/signup/signup-recommender-form/SignupRecommenderForm";

export default function SignupRecommenderRightTab() {
    return(
        <div className="signup-recommender-right">
            <div className="more-button">
                <Image
                    src="/icon/recommendermorebutton.svg"
                    alt="recommendermorebutton"
                    loader={() => "/icon/recommendermorebutton.svg"}
                    width={24}
                    height={24}
                />
            </div>
            <SignupRecommenderForm />

            {/* CSS*/}
            <style jsx>{`
            .signup-recommender-right {
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
              align-items: center;

            }
            
            .more-button {
              position: absolute;
              display: block;
              width: 1.5rem;
              height: 1.5rem;
              flex-shrink: 0;
              margin-top: 2rem;
              
            }
            `}
            </style>
        </div>
    );
}