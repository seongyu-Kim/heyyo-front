import React from "react";
import Image from "next/image";

export default function SurveyStartPage({ handleNextPage }) {
  return (
    <>
      <div className="container">
        <h2 className="title">해요와 발자국을 함께 하시게 된 걸 축하해요!</h2>
      </div>
      <div className="container">
        <div className="image">
          <Image
            src="/img/Survey.svg"
            alt="surveyImg"
            width={400}
            height={350}
          />
        </div>
      </div>
      <div className="container">
        <button className="btn btnContent" onClick={() => handleNextPage(1)}>
          나의 공부 성향 알아보기
        </button>
      </div>
      <style jsx>{`
        .title {
          margin-top: 219px;
        }
        .image {
          margin-top: 60.98px;
        }
        .link {
          display: inline-block;
        }
        .btn {
          width: 300px;
          height: 50px;
          margin-top: 44.02px;

          border-radius: 13px;
          background: #f2923b;
        }
        .btnContent {
          color: #fff;
          font-size: 18px;
          font-weight: 900;
        }
      `}</style>
    </>
  );
}
