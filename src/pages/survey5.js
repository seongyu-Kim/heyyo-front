import Link from "next/link";
import { useRouter } from "next/router";

export default function Survey2() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("surveyResult");
  };
  return (
    <>
      <div className="container">
        <h2 className="title">
          공부에 집중하려고 할 때, 당신은 어떻게 공부하나요?
        </h2>
      </div>
      <div className="container">
        <button className="btn1 btnContent1" onClick={handleButtonClick}>
          PPT를 정독하며
          <br />
          N회독을 해요!
        </button>
        <img className="image1" src="/img/Survey7.svg" />
        <button className="btn2 btnContent2" onClick={handleButtonClick}>
          직접 정리한
          <br />
          필기를 훑어요.
        </button>
        <img className="image2" src="/img/Survey8.svg" />
      </div>
      <style jsx>{`
        .title {
          margin-top: 219px;
        }
        .btn1 {
          width: 310px;
          height: 290px;
          margin: 138.5px 45px;

          border-radius: 37px;
          background: #f2923b;
        }
        .btn2 {
          width: 310px;
          height: 290px;
          margin: 138.5px 45px;

          border-radius: 37px;
          background: #ffefe0;
        }
        .btnContent1 {
          color: #fff;
          font-size: 36px;
          font-weight: 700;
        }
        .btnContent2 {
          color: #000;
          font-size: 36px;
          font-weight: 700;
        }
        .image1 {
          position: absolute;
          top: 306.64px;
          left: 514.66px;
        }
        .image2 {
          position: absolute;
          top: 301.11px;
          right: 477.51px;
        }
      `}</style>
    </>
  );
}
