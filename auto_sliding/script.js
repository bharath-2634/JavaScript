// const prev = document.querySelector('#prev-slide');
// const next = document.querySelector('#next-slide');


const initSlider = () => {
    const imageList = document.querySelector(".image-list");
    const SlidesButton = document.querySelectorAll(".slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    SlidesButton.forEach(button=> {
        button.addEventListener("click",()=>{
            const direction = button.id==="prev-slide" ? -1:1;
            const scrollAmount = imageList.clientWidth*direction;
            imageList.scrollBy({left: scrollAmount,behavior : "smooth"});
            handleSlideButton();
        });
    });
    
    const handleSlideButton = () => {
        // console.log(SlidesButton[0]);
        SlidesButton[0].style.display = imageList.scrollLeft <=0 ? "none" : "block";
        SlidesButton[1].style.display = imageList.scrollLeft >=maxScrollLeft ? "none" : "block";

    }
    // imageList.addEventListener('click',()=>{
    //     handleSlideButton();
    // });
};

window.addEventListener("load",initSlider);

