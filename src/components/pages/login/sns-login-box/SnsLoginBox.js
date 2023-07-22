import Image from "next/image";
export default function SnsLoginBox() {
    return(
        <div className="box">
            <div>
                <Image
                    src="/icon/naver.svg"
                    alt="naver"
                    loader={() => "/icon/naver.svg"}
                    width={40}
                    height={40}
                />
            </div>
            <div>
                <Image
                    src="/icon/kakao.svg"
                    alt="kakao"
                    loader={() => "/icon/kakao.svg"}
                    width={40}
                    height={40}
                />
            </div>
            <div>
                <Image
                    src="/icon/google.svg"
                    alt="google"
                    loader={() => "/icon/google.svg"}
                    width={40}
                    height={40}
                />
            </div>

        {/* CSS */}
        <style jsx>{`
          .box {
            display: flex;
            justify-content: center;
          }
        `}
        </style>
        </div>
    );
}