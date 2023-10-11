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
