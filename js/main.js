// 돋보기 검색창 열릴시 사라지게 하기
const searchEl = document.querySelector(".search");
// serach클래스의 자식 요소 찾기
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener('click', function () {
  // focus강제 적용
  // search클래스 아무곳이나 클릭해도 포커싱이 된다.
  searchInputEl.focus();

})

// input요소에 focus가 되면 search요소에 focused 클래스 추가하겠다.
searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  // html에 지정할때 쓰는 요소
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// input요소에 focus가 되면 search요소에 focused 클래스 추가하겠다.
searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  // html에 지정할때 쓰는 요소
  searchInputEl.setAttribute('placeholder', '');
});

// 뱃지부분이 사라지도록
const badgeEl = document.querySelector('header .badges');

// window는 브라우저의 하나의 탭을 의미
// window.addEventListener('scroll', () => {
//   console.log('scroll!');
// })

// 300은 0.3초를 의미 함수가 수십개가 실행되는 것을 방지
window.addEventListener('scroll', _.throttle(() => {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시작, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // 500이하인 경우 배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));

// _.throttle(함수, 시간) 함수가 몇초에 한번씩 실행되는지


// 없던 요소 나타나게 하기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .4, //0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  // 자동으로 slide
  autoplay: true,
  // 반복재생 여부
  loop: true
});

// 프로모션 slide Swiper
new Swiper('.promotion .swiper-container', {
  // 기본값
  // direction: 'horizontal',
  slidesPerView: 3, //한번에 보여줄 슬라이드 갯수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // }
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호, 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  // 요소 선택할수 있게 
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',() => {
  // 누르면 반대가 되도록
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion) {
    // TRUE면 숨김처리
    promotionEl.classList.add('hide');
  }else{
    // 보임처리
    promotionEl.classList.remove('hide');
  }
});
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
//선택자를 매개변수
function floatingObject(selector, delay, size) {
  //gsap.to(요소, 애니메이션동작 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    //y축으로 얼만큼 움직이는 애니메이션
    y: size,
    //무한반복
    repeat: -1,
    //다시 뒤로재생
    yoyo: true,
    ease: "power1.inOut",
    delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);