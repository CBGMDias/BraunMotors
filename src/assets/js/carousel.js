const images = document.querySelectorAll('.carousel-container img');
let currentIndex = 0;
const totalImages = images.length;

function updateImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateImage(currentIndex);
}

document.querySelector('.next').addEventListener('click', nextImage);
document.querySelector('.prev').addEventListener('click', prevImage);

setInterval(nextImage, 8000);
