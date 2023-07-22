import Image from "next/image";
export default function LoginLeftTab() {
    return(
        <div className="login-left">
            <div className="login-left-image">
            <Image
                src="/icon/소시미.svg"
                alt="소시미"
                loader={() => "/icon/소시미.svg"}
                width={160}
                height={120.25}
            />
            </div>
            <a className="login-left-text">WELCOME!</a>

        {/* CSS */}
        <style jsx>{`
            .login-left {
              position: absolute;
              width: 18.75rem;
              height: 37.4375rem;
              flex-shrink: 0;
              background: #229EEB;
              box-shadow: 4px 4px 30px 2px rgba(0, 0, 0, 0.10);
              left: 29.87rem;
              right: 71.37rem;
              top: 17.8rem;
              bottom: 12.25rem;
            }
            
            .login-left-image {
              position: relative;
              left: 4.41rem;
              right: 4.34rem;
              top: 12.25rem;
              margin-bottom: 0.38rem;
            }
            
            .login-left-text {
              position: absolute;
              width: 13.6875rem;
              height: 3.0625rem;
              flex-shrink: 0;
              color: #FFF;
              text-align: center;
              font-family: Noto Sans KR;
              font-size: 2.25rem;
              font-style: normal;
              font-weight: 900;
              line-height: normal;
              left: 2.56rem;
              right: 2.5rem;
              top: 20.41rem;

            }
        `}
        </style>
        </div>
    );
}