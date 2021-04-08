import React, { useState, useRef, useEffect } from "react";
import { connect, styled } from "frontity";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SwiperCore, {
  Pagination,
  Controller,
  EffectFade,
  Mousewheel
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Controller, EffectFade, Mousewheel]);

const VerticalSlider = ({ content, libraries, data }) => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const pinnedRef = useRef(null);

  const { slides } = content;

  const params1 = {
    direction: "vertical",
    // mousewheel: {
    //     releaseOnEdges: true,
    //     forceToAxis: true,
    //     eventsTarget: ".vertical-slider-wrapper"
    // },
    speed: 1000,
    pagination: {
      clickable: true
    },
    slidesPerView: 1,
    controller: {
      control: secondSwiper
    }
  };
  const params2 = {
    preloadImages: false,
    lazy: true,
    noSwiping: true,
    effect: "fade",
    controller: {
      control: firstSwiper
    }
  };

  useEffect(() => {
    const pinnedRefEl = pinnedRef.current;
    if (!pinnedRefEl) return;

    let ns = Math.random().toString(36).substring(7);
    gsap.to(pinnedRef.current, {
      duration: 0.3,
      scrollTrigger: {
        id: `${ns}-title`,
        trigger: pinnedRef.current,
        start: "top top",
        end: "200%",
        pin: true,
        pinSpacing: "100%"
      }
    });
    return () => {
      const pinnedElTrigger = ScrollTrigger.getById(`${ns}-title`);
      if (pinnedElTrigger) {
        console.log(ScrollTrigger.getById(`${ns}-title`));
        pinnedElTrigger.kill();
      }
    };
  }, []);

  return (
    <VerticalSliderWrapper className="vertical-slider-wrapper" ref={pinnedRef}>
      <VerticalSliderCol>
        <Swiper {...params2} onSwiper={setSecondSwiper}>
          {slides &&
            slides.map((slide, i) => {
              const { image } = slide;
              return (
                <SwiperSlide key={i.toString()}>
                  <ImageSlide bg={image} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </VerticalSliderCol>
      <VerticalSliderCol>
        <Swiper {...params1} onSwiper={setFirstSwiper}>
          {slides &&
            slides.map((slide, i) => {
              const { copy, heading, link_text, link_url } = slide;
              const Html2React = libraries.html2react.Component;
              const linkUrl = libraries.source.normalize(link_url);
              return (
                <SwiperSlide key={i.toString()}>
                  <ContentSlide>
                    <div>
                      <p>{heading}</p>
                      <Html2React html={copy} />
                    </div>
                  </ContentSlide>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </VerticalSliderCol>
    </VerticalSliderWrapper>
  );
};

export default connect(VerticalSlider);

const VerticalSliderWrapper = styled.div`
  display: flex;
`;

const VerticalSliderCol = styled.div`
  width: 50%;
  max-width: 50%;
  flex: 0 0 50%;
`;

const ImageSlide = styled.div`
  width: 100%;
  background-size: cover;
  height: 100%;
  background-image: url(${(props) => props.bg});
`;

const ContentSlide = styled.div``;
