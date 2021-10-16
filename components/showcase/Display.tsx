import React from 'react';
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, A11y } from 'swiper';
SwiperCore.use([Navigation, A11y]);
export default function Display({ media }: { media: string[] }) {
    return (
        <Container className="display">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
            >
                {media.map(media => <SwiperSlide
                    dangerouslySetInnerHTML={{ __html: media }}
                />)}
            </Swiper>
        </Container>
    );
}

export const Container = styled.div`
    grid-column: 1/8;
    background:#67ADFF09;
    border-radius: 16px;
    height: 620px;
    padding:44px 0px;
    margin-bottom: 64px;
    margin-left:50px;
    margin-right:50px;
    position:relative;
    border:  1px solid #24263570;
    height: max-content;

    video, img{
        border-radius: 18px;
        max-height: 530px;
        width: auto;
    }
    .swiper-container{
    }

    .swiper-button-next,  .swiper-button-prev {
        background-image: url(/assets/icons/arrow.svg);
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-size: 50%;
        background-position: center;
        padding:12px 32px;
        border-radius:6px;
        border:  1px solid #31333f;
        position: absolute;
        top: unset;
        bottom: 0px;
        cursor: pointer;
        z-index: 300;
        transition: 0.2s ease-in;
        right: 32px;

        &.swiper-button-disabled{
        }
    }
    .swiper-button-prev {
        transform:rotate(180deg);
        left: unset;
        right: 122px;
    }
    .swiper-slide{
        transition: 0.4s ease-in;
        opacity: 0.2;
        padding: 0px 44px;
    }
    .swiper-slide-active{
        opacity: 0.8;
    }

`