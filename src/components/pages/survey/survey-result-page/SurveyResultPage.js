import React from "react";
import Image from "next/image";
export default function SurveyResult({
  restartSurvey,
  selectedData,
  titleColor,
  bgColor,
  contentColor,
}) {
  const imageStyle = {
    position: "absolute",
    top: selectedData.imgPosition?.top || 0,
    left: selectedData.imgPosition?.left || 0,
  };
  return (
    <>
      <div className="container">
        <h2 className="title">
          해요님은{" "}
          <span style={{ fontSize: "50", color: titleColor }}>
            &apos;{selectedData.title}&apos;
          </span>{" "}
          타입이시군요!
        </h2>
      </div>

      <div className="container">
        <div className="absolute">
          <Image
            alt="char"
            src={selectedData.img}
            width={selectedData.width}
            height={selectedData.height}
            style={imageStyle}
          />
        </div>
        <div className="bg" style={{ background: bgColor }}>
          <h1 className="bgContent" style={{ color: contentColor }}>
            {selectedData.hashtag}
          </h1>
        </div>
      </div>

      <div className="container">
        <button className="btn btnContent">내 타입 그룹방 바로가기</button>
      </div>

      <div className="container">
        <button className="btn2" onClick={restartSurvey}>
          테스트 다시하기
        </button>
      </div>

      <style jsx>{`
        .title {
          margin-top: 201px;
          line-height: 129.8%; /* 46.728px */
        }

        .bg {
          width: 1082px;
          height: 290px;
          margin-top: 136px;

          border-radius: 37px;
        }

        .bgContent {
          margin-top: 112px;

          color: #88d159;
          text-align: center;
          font-size: 50px;
          font-weight: 900;
          line-height: 129.8%; /* 64.9px */
        }

        .btn {
          width: 300px;
          height: 50px;
          margin-top: 76px;
          border-radius: 13px;
          background: #f2923b;
        }

        .btnContent {
          color: #fff;
          font-size: 18px;
          font-style: normal;
          font-weight: 900;
          line-height: normal;
          text-align: center;
        }

        .btn2 {
          color: #8c9499;
          margin-top: 10px;
          text-align: center;
          font-size: 13px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }

        .absolute {
          top: 100px;
          //width: 541px;
          //height: 489.914px;

          position: absolute;
          left: 200px;
        }
      `}</style>
    </>
  );
}
