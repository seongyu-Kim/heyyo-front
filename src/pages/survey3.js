import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import { useRouter } from "next/router";

export default function Survey2() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/survey4");
  };
  return (
    <>
      <div className="container">
        <h2 className="title">시험 전 마지막 주말, 어디서 공부할 것인가요?</h2>
      </div>
      <div className="container">
        <button className="btn1 btnContent1" onClick={handleButtonClick}>
          친구와 밖에서
        </button>
        <img className="image1" src="/img/Survey3.svg" />
        <button className="btn2 btnContent2" onClick={handleButtonClick}>
          집에서 혼자
        </button>
        <img className="image2" src="/img/Survey4.svg" />
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
          top: 234.85px;
          left: 468.59px;
        }
        .image2 {
          position: absolute;
          top: 294.58px;
          right: 477.51px;
        }
      `}</style>
    </>
  );
}
