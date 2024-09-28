// Smooth Scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
// Fallback if the image doesn't load
const profilePhoto = document.querySelector('.profile-photo');
profilePhoto.onerror = function() {
    this.src = 'https://via.placeholder.com/150';  // Fallback image URL
}
