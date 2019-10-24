const markup = `
<li class="images__item"><img src="https://placeimg.com/640/488/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/640/489/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/640/487/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/640/488/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/640/487/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/640/486/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/640/488/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/641/483/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/642/484/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/643/485/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/644/481/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/645/482/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/646/483/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/647/484/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/648/485/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/646/481/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/644/482/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/643/483/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/642/484/any" alt="" class="images__img"></li>
<li class="images__item"><img src="https://placeimg.com/641/485/any" alt="" class="images__img"></li>
`


const options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0,
}
const callback = function(entries, observer) { 
  if(entries[0].isIntersecting) {
    
    console.log('entries :', entries);
    console.log('observer :', observer);
    document.querySelector('.images').insertAdjacentHTML('beforeend', markup);
    const targetItems = document.querySelectorAll('.images__item');
    observer.disconnect();
  
      setTimeout(() => {
        observer.observe(targetItems[targetItems.length - 1])
      }, 3000);
  }
};
const observer = new IntersectionObserver(callback, options);

const targetItems = document.querySelectorAll('.images__item');

// targetItems.forEach(target => {
//   observer.observe(target);
// })


observer.observe(targetItems[targetItems.length - 1])