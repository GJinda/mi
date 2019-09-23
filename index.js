function $(selector) {
  return document.querySelector(selector);
}

function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

const cart = $('.cart');
const cartImage = $('.cart img');
const cartMenu = $('.cart-menu');
var timeout;

// function changeIconSrc(img,url){
//   img.src = url;
// }
var ctrIndex = 0;
const ctrls = $('.control').getElementsByTagName('li');
const banner1 = $('.slider-item:nth-child(1) img');
const banner2 = $('.slider-item:nth-child(2) img');
const banner3 = $('.slider-item:nth-child(3) img');
var banner = [banner1, banner2, banner3];
console.log(banner);

cart.addEventListener('mouseover', () => {
  clearTimeout(timeout);
  cart.style.background = '#fff';
  cartImage.src = 'img/icon/cart-hover.png';
  cart.style.color = '#f60';
  cartMenu.style.display = 'block';
  cartMenu.style.animation = 'cartdown 0.3s ease-in-out';
  timeout = setTimeout(function () {
    cartMenu.innerHTML = "购物车还没添加任何物品，赶快选购吧";
  }, 200);
});

cart.addEventListener('mouseout', () => {
  clearTimeout(timeout);
  cart.style.background = '#444';
  cartImage.src = 'img/icon/cart.png';
  cart.style.color = '#aaa';
  cartMenu.style.animation = 'cartup 0.3s ease-in-out';
  cartMenu.innerHTML = "";
  timeout = setTimeout(function () {
    cartMenu.style.display = 'none';
  }, 200);
});

const searchText = $('#search-text');
const searchBtn = $('#search-btn');
const searchImage = $('.search-box img');

function changeSearchColor(colorText, colorBtn) {
  searchText.style.borderColor = colorText;
  searchBtn.style.borderColor = colorBtn;
}

function changeSearchImage(bgColor, url) {
  searchBtn.style.background = bgColor;
  searchImage.src = url;
}

//search style
searchText.addEventListener('mouseover', () => {
  changeSearchColor('#aaa', '#aaa');
});
searchImage.addEventListener('mouseover', () => {
  changeSearchColor('#aaa', '#f60');
  changeSearchImage('#f60', 'img/icon/search-btn-hover.png');
  searchImage.style.cursor = 'pointer';
});
searchText.addEventListener('mouseout', () => {
  if (searchBtn.style.borderColor != '#f60') {
    changeSearchColor('#ddd', '#ddd');
  }
});
searchImage.addEventListener('mouseout', () => {
  if (searchBtn.style.borderColor != '#f60') {
    changeSearchColor('#ddd', '#ddd');
    changeSearchImage('#fff', 'img/icon/search-btn.png');
  }
});
searchText.addEventListener('focus', () => {
  changeSearchColor('#f60', '#f60');
});

//banner slide
var slideIndex = 0;
var timer = null;
const slider = $('.slider');
const banner = $('.slider').getElementsByClassName('slider-item');
// var len = banner.length;
// console.log(banner);
const dots = $('.control').getElementsByClassName('control-item');
// console.log(banner);

function slideImage() {
  slider.onmouseover = function () {
    //slide stop
    clearInterval(timer);
  }
  slider.onmouseout = function () {
    //slide start
    timer = setInterval(function () {
      slideIndex++;
      if (slideIndex >= banner.length) {
        slideIndex = 0;
      }
      changeBannerImage();
      console.log(slideIndex);
    }, 2500);
  }
  //auto lide
  slider.onmouseout();
  //click event
  for (var d = 0; d < dots.length; d++) {
    dots[d].id = d;
    dots[d].onclick = function () {
      //change slider index
      slideIndex = this.id;
      this.className = 'control-item dot-active';
      changeBannerImage();
    }
  }
}
function changeBannerImage() {
  for (var i = 0; i < banner.length; i++) {
    banner[i].style.display = 'none';
    dots[i].className = 'control-item';
  }
  banner[slideIndex].style.display = 'block';
  dots[slideIndex].className = 'control-item dot-active';
}
slideImage();

//prev next controls
const prevBtn = $('.prev img');
const nextBtn = $('.next img');

prevBtn.addEventListener('mouseover', () => {
  prevBtn.src = 'img/icon/prev_white.png';
})
prevBtn.addEventListener('mouseout', () => {
  prevBtn.src = 'img/icon/prev.png';
})
prevBtn.addEventListener('click', () => {
  slideIndex--;
  console.log(slideIndex);
  if (slideIndex < 0) {
    slideIndex = banner.length - 1;
  }
  console.log(slideIndex);
  changeBannerImage();
})
nextBtn.addEventListener('mouseover', () => {
  nextBtn.src = 'img/icon/next_white.png';
})
nextBtn.addEventListener('mouseout', () => {
  nextBtn.src = 'img/icon/next.png';
})
nextBtn.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex >= banner.length) {
    slideIndex = 0;
  }
  changeBannerImage();
})

const subItem = $('.func').getElementsByTagName('li');
const subImage = $('.func').getElementsByTagName('img');
var str = [];

function ListenerForI(url,i) {
  subItem[i].onmouseover = function () {
    console.log(url);
    subImage[i].src = url + '_w.png';
    console.log(subImage[i]);
  }
  subItem[i].onmouseout = function () {
    console.log(url);
    subImage[i].src = url + '.png';
    console.log(subImage[i]);
  }
}

for (var i = 0; i < subItem.length; i++) {
  ListenerForI(str[i],i);
}

window.onload = function(){
  for (var i = 0; i < subItem.length; i++) {
    str[i] = subImage[i].src.split('.')[0];
  }
}
// subItem.onclick