import * as S from "./style";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MainSwiper = () => {
  // const [currentIndex, setCurrentIndex] = useState(1);
  const images = ["img1.png", "img2.png", "img3.png", "img4.png"];

  return (
    <S.SwiperContainer>
      <Swiper
        className="swiper"
        effect="fade"
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="" className="imgT" />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SwiperContainer>
  );
};

export default MainSwiper;
