document.addEventListener("DOMContentLoaded", function () {
    const strawmargcup = document.getElementById('strawmargcup');
    const magnifier = document.querySelector('.magnifier');
    const zoomFactor = 3;  // 3x zoom

    function moveMagnifier(event) {
        // Get the bounding box of the image relative to the viewport
        const imageRect = strawmargcup.getBoundingClientRect();
        
        // Get the mouse position relative to the image
        const x = event.clientX - imageRect.left;
        const y = event.clientY - imageRect.top;

        // Check if the cursor is within the bounds of the image
        if (x > 0 && y > 0 && x < imageRect.width && y < imageRect.height) {
            magnifier.style.display = 'block';

            // Calculate the magnifier's position relative to the image
            const magnifierX = event.pageX - magnifier.offsetWidth / 2;
            const magnifierY = event.pageY - magnifier.offsetHeight / 2;

            // Move the magnifier window with the cursor, overlapping the image
            magnifier.style.left = `${magnifierX}px`;
            magnifier.style.top = `${magnifierY}px`;

            // Move the zoomed image inside the magnifier window
            const zoomX = (x / imageRect.width) * (imageRect.width * zoomFactor) - magnifier.offsetWidth / 2;
            const zoomY = (y / imageRect.height) * (imageRect.height * zoomFactor) - magnifier.offsetHeight / 2;

            magnifier.querySelector('img').style.left = `-${zoomX}px`;
            magnifier.querySelector('img').style.top = `-${zoomY}px`;
        } else {
            magnifier.style.display = 'none';
        }
    }

    // Add event listeners for mouse movement over the image and when the cursor leaves the image
    strawmargcup.addEventListener('mousemove', moveMagnifier);
    strawmargcup.addEventListener('mouseleave', function () {
        magnifier.style.display = 'none';
    });
});




















