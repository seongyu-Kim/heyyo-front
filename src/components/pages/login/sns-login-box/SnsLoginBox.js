import Image from "next/image";
export default function SnsLoginBox() {
  return (
    <div className="box">
      <div>
        <Image
          src="/icon/Naver.svg"
          alt="naver"
          loader={() => "/icon/Naver.svg"}
          width={40}
          height={40}
        />
      </div>
      <div>
        <Image
          src="/icon/Kakao.svg"
          alt="kakao"
          loader={() => "/icon/Kakao.svg"}
          width={40}
          height={40}
        />
      </div>
      <div>
        <Image
          src="/icon/Google.svg"
          alt="google"
          loader={() => "/icon/Google.svg"}
          width={40}
          height={40}
        />
      </div>

      {/* CSS */}
      <style jsx>
        {`
          .box {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
}
