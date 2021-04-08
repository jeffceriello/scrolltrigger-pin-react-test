import React, { useRef, useEffect } from "react";
import { connect, styled } from "frontity";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const VerticalSlider = ({ content, libraries, data }) => {
  const pinnedRef = useRef(null);

  const { slides } = content;

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
        {slides &&
          slides.map((slide, i) => {
            const { image } = slide;
            return (
              <div style={{ width: "100%", height: "100%" }} key={i.toString()}>
                <ImageSlide bg={image} />
              </div>
            );
          })}
      </VerticalSliderCol>
    </VerticalSliderWrapper>
  );
};

export default connect(VerticalSlider);

const VerticalSliderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const VerticalSliderCol = styled.div`
  width: 100%;
  max-width: 100%;
  flex: 0 0 100%;
  height: 100%;
`;

const ImageSlide = styled.div`
  width: 100%;
  background-size: cover;
  height: 100%;
  background-image: url(${(props) => props.bg});
`;
