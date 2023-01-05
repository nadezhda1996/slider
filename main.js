
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const next = document.getElementById("line2");
const prev = document.getElementById("line1");
const cities = document.querySelectorAll(".city")
const repairs = document.querySelectorAll(".repair")
const areas = document.querySelectorAll(".area")
const menues = document.querySelectorAll(".menu")

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove("active");
    }
    slides[n].classList.add("active");
}
const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove("active");
    }
    dots[n].classList.add("active");
}
const activeCity = n => {
    for (city of cities) {
        city.classList.remove("active");
    }
    cities[n].classList.add("active");
}
const activeRepair = n => {
    for (repair of repairs) {
        repair .classList.remove("active");
    }
    repairs[n].classList.add("active");
}
const activeArea = n => {
    for (area of areas) {
        area.classList.remove("active");
    }
    areas[n].classList.add("active");
}
const activeMenu = n => {
    for (menu of menues) {
        menu.classList.remove("active");
    }
    menues[n].classList.add("active");
}
const getInformation = ind => {
    activeArea(ind);
    activeSlide(ind);
    activeDot(ind);
    activeCity(ind);
    activeRepair(ind);
    activeMenu(ind);
}

const nextSlide = () =>{
    if (index == slides.length - 1){
        index = 0;
        getInformation(index);
    } else {
        index++;
        getInformation(index);
    }
}
const prevSlide = () =>{
    if (index == 0){
        index = slides.length - 1;
        getInformation(index);
    } else {
        index--;
        getInformation(index);
    }
}


menues.forEach((item, indexD) => {
    item.addEventListener("click", () => {
    index = indexD;
    getInformation(index);
  });
})

dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
        index = indexDot;
        getInformation(index);

    })
    
})

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

