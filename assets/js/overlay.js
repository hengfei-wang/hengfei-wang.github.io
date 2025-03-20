document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.paper-thumb').forEach(img => {
        img.addEventListener('click', function(e){
            const overlay = document.getElementById('overlay');
            const overlayImg = document.getElementById('overlay-img');
            overlayImg.src = e.target.getAttribute('data-large-src');
            overlay.style.visibility = 'visible';
        });
    });

    document.getElementById('overlay').addEventListener('click', function() {
        this.style.visibility = 'hidden';
    });
});