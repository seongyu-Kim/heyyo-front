import Link from "next/link";
import { useRouter } from "next/router";

export default function Survey2() {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("survey5");
  };
  return (
    <>
      <div className="container">
        <h2 className="title">
          밖에서 나가서 공부할 경우, 어디로 갈 것인가요?
        </h2>
      </div>
      <div className="container">
        <button className="btn1 btnContent1" onClick={handleButtonClick}>
          카페로
        </button>
        <img className="image1" src="/img/Survey5.svg" />
        <button className="btn2 btnContent2" onClick={handleButtonClick}>
          도서관으로
        </button>
        <img className="image2" src="/img/Survey6.svg" />
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
          top: 34.62px;
          left: 645.12px;
          z-index: -1;
        }
        .image2 {
          position: absolute;
          top: 334.57px;
          right: 605px;
        }
      `}</style>
    </>
  );
}
