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


const thisYear = document.querySelector('.this-year');
let j=0;
thisYear.textContent = new Date().getFullYear();
