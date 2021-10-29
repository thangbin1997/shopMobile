const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)



const rom=document.getElementsByClassName('product-card-item-roms')
const chapter=document.querySelector('.chapter')
const navMobileIcon = document.querySelector('.header-bar-icon');
const cancelIcon = document.querySelector('.nav-mobile-header-right-icon')
const navMobile = document.querySelector('.nav-mobile');
const overplay = document.querySelector('.overplay');


// nav mobile
            
navMobileIcon.onclick = function()
{
    navMobile.style.transform = 'translateX(0%)';
    navMobile.style.opacity= '1'
    overplay.style.display = 'block';
}

var aaa = $$('.nav-mobile-body-item')
for(var i=0;i<aaa.length;i++){
    aaa[i].onclick=function(e){
        let nav_link=e.target.closest('.nav-mobile-body-link')
        if(nav_link){
            navMobile.style.transform = 'translateX(-100%)';
            overplay.style.display = 'none';
        }
        
    }
}





cancelIcon.onclick = function() 
{
    navMobile.style.transform = 'translateX(-100%)';
    overplay.style.display = 'none';
}
overplay.onclick= function(){
    navMobile.style.transform = 'translateX(-100%)';
    overplay.style.display='none'
}

// end nav mobile

// Slide container

var slideIndex = 1;
 showSlides(slideIndex);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-slide", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-slide";
}

function currentSlide(n) {
     showSlides(slideIndex = n);
}
// END Slide container

//Active chapter

chapter.onclick=function(e){
    if(e.target.closest('.chapter-item:not(.active)')){
        var chapterClick =e.target.closest('.chapter-img')
        var chapterClickF=chapterClick.parentElement.parentElement
        var chapterClickC=chapterClickF.getElementsByClassName('chapter-item')
        for(var i=0;i<chapterClickC.length;i++){
            chapterClickC[i].className = chapterClickC[i].className.replace(" active","")
        }
        chapterClick.parentElement.className +=' active'
    }
}
//END Active chapter

// active rom-------------

for(var i=0; i<rom.length;i++){
    rom[i].onclick=function(e){
        var romClick=e.target.closest('.product-card-item-rom')
        var romF=romClick.parentElement
        var romC= romF.getElementsByClassName('product-card-item-rom')
        for(var j=0; j<romC.length; j++){   //Chạy vòng for để xoá class rom-active
            romC[j].className = romC[j].className.replace(" rom-active","")
        }
        e.target.closest('.product-card-item-rom').className +=' rom-active'  //Thêm class rom-active
    }
}
// change price and ROM
const product=document.querySelector('.product-card')
product.onclick=function(e){
    var priceBox=e.target.closest('.product-card-item-rom')                      //get this click element
    let card=priceBox.parentElement.parentElement                                //get card element(parent)
    if(priceBox){
        var romValue=priceBox.querySelector('span').innerText                   //get romvalue(text)
        var infoRom=card.querySelectorAll('.product-card-item-info-text')       //get div info
        infoRom[3].innerHTML=`<i class="fas fa-inbox"></i> ${romValue}`         //Change rom value
        var price= card.querySelector('.product-card-item-prices')
        var priceCredit=card.querySelector('.product-card-item-price-TRAGOP-info strong')
        if(romValue=='128GB'){
            price.innerHTML='33.990.000 đ'
            priceCredit.innerHTML='3.000.500đ'
        }
        else if(romValue=='256GB'){
            price.innerHTML='35.990.000 đ'
            priceCredit.innerHTML='3.500.500đ'
        }
        else if(romValue=='64GB'){
            price.innerHTML='19.990.000 đ'
            priceCredit.innerHTML='2.900.500đ'
        }
        else if(romValue=='512GB'){
            price.innerHTML='39.990.000 đ'
            priceCredit.innerHTML='3.700.500đ'
        }
        else if(romValue=='1TB'){
            price.innerHTML='43.990.000 đ'
            priceCredit.innerHTML='3.900.500đ'
        }
    }
}




