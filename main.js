const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
const slideCount = slide.length;

const showSlide = (index) => {
  const slideWidth = slide[0].clientWidth;
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
};

const nextSlide = () => {
  index = (index < slideCount - 1) ? index + 1 : 0;
//   if (index < slideCount - 1)
//     index = index + 1;
//   else
//     index = 0;
  showSlide(index);
};

const prevSlide = () => {
  index = (index > 0) ? index - 1 : slideCount - 1;
//   if (index > 0)
//     index = index - 1;
//   else
//     index = slideCount - 1;
  showSlide(index);
};

prev.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

next.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

let autoSlideInterval = setInterval(nextSlide, 3000);

const resetInterval = () => {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 3000);
};