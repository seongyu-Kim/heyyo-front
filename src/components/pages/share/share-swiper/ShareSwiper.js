import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';
import ShareRectangle from "@/components/pages/share/share-rectangle/ShareRectangle";


export const data = [
    {
        test: "심리학 자료조사"
    },
    {
        test: "조경기사 핵심 예상 문제"
    },
    {
        test: "6월 모고 심화문제풀이 스크랩 필수"
    }
]

const CustomSwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    color: #000;
    font-weight: bold;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    bottom: 8.14rem;
  }
  .swiper-pagination-bullet {
    position: relative;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background-color: #565656;
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;
    bottom: 8.14rem;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    bottom: 8.14rem;
  }
`;

export default function ShareSwiper() {
    return (
        <CustomSwiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            paginationType="bullets"
            modules={[Navigation, Pagination, A11y]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "6rem",
                        marginTop: "16.5rem",
                        bottom: "23.5rem"// Adjust this margin for proper alignment
                    }}
                >

                    {
                        data.map((value, index) => (
                            <ShareRectangle key={index}>
                                {value.test}
                            </ShareRectangle>
                        ))
                    }

                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </CustomSwiper>
    );
}