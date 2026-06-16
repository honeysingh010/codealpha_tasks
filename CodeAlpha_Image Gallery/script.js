const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

images.forEach((img, index) => {

    img.addEventListener('click', () => {

        currentIndex = index;
        showImage();

        lightbox.style.display = 'flex';
    });

});

function showImage() {
    lightboxImg.src = images[currentIndex].src;
}

nextBtn.addEventListener('click', () => {

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage();
});

prevBtn.addEventListener('click', () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    showImage();
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {

    if(e.target === lightbox){
        lightbox.style.display = 'none';
    }

});

function filterImages(category){

    const items = document.querySelectorAll('.image');

    items.forEach(item => {

        if(category === 'all' ||
           item.classList.contains(category)){

            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }

    });

}