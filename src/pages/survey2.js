import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import { useRouter } from "next/router";

export default function Survey2() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/survey3");
  };
  return (
    <>
      <div className="container">
        <h2 className="title">당신은 한 달 뒤 중요한 전공 시험이 있어요.</h2>
      </div>
      <div className="container">
        <button className="btn1 btnContent1" onClick={handleButtonClick}>
          한 달 전부터
          <br />
          하루 1시간씩
        </button>
        <img className="image1" src="/img/Survey1.svg" />
        <button className="btn2 btnContent2" onClick={handleButtonClick}>
          일주일 전
          <br />
          하루 4시간씩
        </button>
        <img className="image2" src="/img/Survey2.svg" />
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
          top: 260.3px;
          left: 457.7px;
        }
        .image2 {
          position: absolute;
          top: 10.26px;
          right: 543.19px;
          z-index: -1;
        }
      `}</style>
    </>
  );
}
