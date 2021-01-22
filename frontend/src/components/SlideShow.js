import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://static.wixstatic.com/media/82fcd3_b26117faa9994339ae25d127dfcc4883~mv2_d_2957_1280_s_2.jpg/v1/fill/w_1213,h_535,al_c,q_85,usm_0.66_1.00_0.01/82fcd3_b26117faa9994339ae25d127dfcc4883~mv2_d_2957_1280_s_2.webp',
    altText: '',
    caption: ''
  },
  {
    src: 'https://static.wixstatic.com/media/82fcd3_95f1d2a3675c4d07ae9dafbdacf34a93~mv2_d_2957_1280_s_2.jpg/v1/fill/w_1213,h_535,al_c,q_85,usm_0.66_1.00_0.01/82fcd3_95f1d2a3675c4d07ae9dafbdacf34a93~mv2_d_2957_1280_s_2.webp',
    altText: '',
    caption: ''
  },
  {
    src: 'https://static.wixstatic.com/media/82fcd3_fc30a6b06586430389e65d2869f7e6cc~mv2_d_2957_1280_s_2.jpg/v1/fill/w_1213,h_535,al_c,q_85,usm_0.66_1.00_0.01/82fcd3_fc30a6b06586430389e65d2869f7e6cc~mv2_d_2957_1280_s_2.webp',
    altText: '',
    caption: ''
  }
];

const SlideShow = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%"   />
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default SlideShow;