import { useState } from "react";
import Image from "next/image";

export default function Char() {
  const [isCharOpen, setIsCharOpen] = useState(false);
  const [isCharCheck, setIsCharCheck] = useState(false);

  const toggleCharImage = () => {
    setIsCharOpen((prevState) => !prevState);
  };

  const toggleCharCheck = () => {
    setIsCharCheck((prevState) => !prevState);
  };

  return (
    <div className="charFixed">
      <div
        className={isCharOpen ? "charOpen" : "charClose"}
        onClick={toggleCharImage}
      >
        <Image
          src={isCharOpen ? "/img/charOpen.svg" : "/img/charClose.svg"}
          alt={"character"}
          width={isCharOpen ? 245.045 : 74.323}
          height={isCharOpen ? 601.742 : 128.9}
        />
      </div>

      {isCharOpen && (
        <>
          <div className="charTitle">
            <p>해요 님의 TODAY</p>
          </div>
          <div className="charText">
            <div className="charTextInner">
              <Image
                onClick={toggleCharCheck}
                src={
                  isCharCheck ? "/img/charCheckIn.svg" : "/img/charCheckOut.svg"
                }
                alt={"check"}
                width={33}
                height={27}
              />
              <p>빨래 널기</p>
            </div>
          </div>
          <div className="charTitle" style={{ top: "672.58px" }}>
            <p>같이 공부해요</p>
          </div>
          <div className="charText" style={{ top: "701.31px" }}>
            <div className="charTextInner">
              <Image
                src="/img/charCheckOut.svg"
                alt={"check"}
                width={33}
                height={27}
              />
              <p>김선규</p>
            </div>
          </div>
        </>
      )}
      <style jsx>{`
        .charFixed {
          position: fixed;
          right: 0;

          z-index: 2;
        }

        .charOpen {
          position: relative;
          top: 336.26px;

          z-index: 2;
          cursor: pointer;
        }

        .charClose {
          position: relative;
          top: 772px;

          z-index: 2;
          cursor: pointer;
        }

        .charTitle {
          position: absolute;
          top: 480px;
          left: 50%;
          transform: translateX(-50%);

          color: rgba(255, 255, 255, 0.3);
          font-size: 13px;
          font-weight: 700;
          text-align: center;

          z-index: 2;
        }

        .charText {
          position: absolute;
          top: 506.13px;
          left: 44.43px;

          color: #fff;
          font-size: 13px;
          font-weight: 500;

          z-index: 2;
        }

        .charTextInner {
          display: flex;
          align-items: center;
        }

        .charText p {
          margin-left: 11px;
        }
      `}</style>
    </div>
  );
}
