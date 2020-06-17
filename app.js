
// Homepage load
window.onload = ()=>{
    const animateImages = document.querySelectorAll('.zuri-images');
    animateImages.forEach((item)=>{
    item.style.animation =  `zuriImages 2s ease forwards 2s`;
    });
}