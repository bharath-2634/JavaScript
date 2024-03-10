const btn = document.querySelector('.model__btn');
const cross = document.querySelector('.close-modal');
const modal_box = document.querySelector('.modal');
const overlay_box = document.querySelector('.overlay');


cross.addEventListener('click',function() {
    if(modal_box.classList.contains('hidden')) {
        modal_box.classList.remove('hidden');
    }else {
        modal_box.classList.add('hidden');
        overlay_box.classList.add('hidden');
    }
});

btn.addEventListener('click',function() {
    if(modal_box.classList.contains('hidden')) {
        modal_box.classList.remove('hidden');
        overlay_box.classList.remove('hidden');
    }else {
        modal_box.classList.add('hidden');
        overlay_box.classList.add('hidden');
    }
});

window.addEventListener('keydown',function(e) {
    if(e.key==='Escape') {
        modal_box.classList.add('hidden');
        overlay_box.classList.add('hidden');
    }
});