import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {Card} from "./card.tsx";
import { adobeImage2,
    adobeImage3,
    adobeImage4,
    adobeImage5 } from '../components/images.tsx'
import 'swiper/swiper-bundle.css';

export const NewsContainer: React.FC = () => {
    return (
        <div className="news">
            <Swiper
                modules={[Navigation]}
                slidesPerView={4}
                navigation
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide>
                    <Card
                        imageUrl={adobeImage2}
                        description="Экономим на бумаге и угадываем фильмы: дайджест видео марта 2022 года"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        imageUrl={adobeImage3}
                        description="Изменения 2022 года"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        imageUrl={adobeImage4}
                        description="Почему стоит работать программистом в 2022 году"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        imageUrl={adobeImage5}
                        description="Автоматизированный УСН и путевые листы: дайджест новостей за март 2022. Автоматизированный УСН и путевые листы"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        imageUrl={adobeImage2}
                        description="Экономим на бумаге и угадываем фильмы: дайджест видео марта 2022 года"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        imageUrl={adobeImage3}
                        description="Изменения 2022 года"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        imageUrl={adobeImage4}
                        description="Почему стоит работать программистом в 2022 году"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        imageUrl={adobeImage5}
                        description="Автоматизированный УСН и путевые листы: дайджест новостей за март 2022. Автоматизированный УСН и путевые листы"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};