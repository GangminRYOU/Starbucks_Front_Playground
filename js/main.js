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