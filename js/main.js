// 검색창 포커스 설정하는법
const searchEl = document.querySelector('.search'),
      searchInput = searchEl.querySelector('input'),
      searchIcon = searchEl.querySelector('.searchicon');

searchEl.addEventListener('click',()=>{
  searchInput.focus();
});
searchInput.addEventListener('focus',()=>{
  searchEl.classList.add('focused');
  searchInput.setAttribute('placeholder', '통합검색');
})
searchInput.addEventListener('blur',()=>{
  searchEl.classList.remove('focused');
  searchInput.setAttribute('placeholder', '');
})

// badge 없애기, 1.Lodash '_.throttle(함수, 시간)' 2.gsap 연결
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll',_.throttle(()=>{
  if(window.scrollY>500) {
    //배지 숨기기 
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display: 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x : 0
    })
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x : 100
    })
  }
},300))

toTopEl.addEventListener('click', ()=>{
  gsap.to(window, .7, {
    scrollTo : 0
  })
})

// VISUAL 순차 등장
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index)=>{
  gsap.to(fadeEl, 1, {
    delay: (index + 1)*.7,
    opacity : 1
  })
});

// 슬라이드 동작 new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction:'vertical',
  autoplay : true,
  loop : true,
});

new Swiper('.promotion .swiper', {
  slidesPerView : 3,
  spaceBetween : 10,
  centeredSlides : true,
  loop : true,
  autoplay : {
    delay : 5000
  },
  // 아래부분 동그란거
  pagination :{
    el : '.promotion .swiper-pagination',
    clickable : true
  },
  // 이전버튼, 다음버튼
  navigation : {
    prevEl : '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper', {
  autoplay : true,
  loop : true,
  spaceBetween : 30,
  slidesPerView : 5, //한번에 몇개의 슬라이드를 보여줄것인가
  navigation : {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

const promotionEl = document.querySelector('.promotion'),
      promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',()=>{
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    promotionEl.classList.add('hide');
    promotionToggleBtn.style.transform ='rotateX(180DEG)';
  } else {
    promotionEl.classList.remove('hide');
    promotionToggleBtn.style.transform ='rotateX(0DEG)';
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 둥둥 떠있는 효과, 위 랜덤함수와 합쳐서 딜레이와 움직이는 폭이 랜덤
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat : -1,
    yoyo : true,
    ease : Power1.easeInOut,
    delay : random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// // scroll magic
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl) {
  new ScrollMagic
      .Scene({
        triggerElement : spyEl, //보여짐 여부를 감시할 요소
        triggerHook : .8 //윈도우 가장 위를 0, 아래를 1로 두고 설정
      }) //위의 조건을 만족시키면 아래 매소드를 실행함
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller());
});

const num = ['oh', 'nam', 'seok'];
const thisYear = document.querySelector('.this-year');
let j=0;
thisYear.textContent = new Date().getFullYear();
