import Link from "next/link";

export default function FindLinkBox() {
    return(
        <div className="box">
            <Link href="/" passHref>
                <div className="find">
                    잊으셨나요?
                </div>
            </Link>
            <Link href="/" passHref>
                <div className="sign">
                    회원가입
                </div>
            </Link>
        {/* CSS */}
        <style jsx>{`
          .box{
            position: relative;
            display: flex;
            justify-content: center;
            padding-bottom: 1.37rem;
          }
            .find {
              position: relative;
              color: #8C9499;
              text-align: center;
              font-family: Noto Sans KR;
              font-size: 0.625rem;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              padding: 0 0.5rem;
            }
            
            .sign {
              position: relative;
              color: #8C9499;
              text-align: center;
              font-family: Noto Sans KR;
              font-size: 0.625rem;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              padding: 0 0.5rem;
            }
        `}
        </style>
        </div>
    );
}