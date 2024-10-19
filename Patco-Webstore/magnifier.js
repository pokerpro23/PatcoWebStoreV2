document.addEventListener("DOMContentLoaded", function () {
    const strawmargcup = document.getElementById('strawmargcup');
    const magnifier = document.querySelector('.magnifier');
    const magnifiedImage = magnifier.querySelector('img');
    const zoomFactor = 3;  // 3x zoom
    const magnifierSize = 150; // Magnifier size

    function updateMagnifier(event) {
        const imageRect = strawmargcup.getBoundingClientRect();
        const x = event.clientX - imageRect.left;
        const y = event.clientY - imageRect.top;

        // Check if cursor is within image bounds
        if (x > 0 && y > 0 && x < imageRect.width && y < imageRect.height) {
            magnifier.style.display = 'block';

            // Position the magnifier precisely under the cursor
            const magnifierX = event.pageX - magnifierSize / 2;
            const magnifierY = event.pageY - magnifierSize / 2;

            magnifier.style.left = `${magnifierX}px`;
            magnifier.style.top = `${magnifierY}px`;

            // Calculate the zoomed image position inside the magnifier
            const zoomX = (x / imageRect.width) * (imageRect.width * zoomFactor) - magnifierSize / 2;
            const zoomY = (y / imageRect.height) * (imageRect.height * zoomFactor) - magnifierSize / 2;

            magnifiedImage.style.left = `-${Math.max(0, zoomX)}px`;
            magnifiedImage.style.top = `-${Math.max(0, zoomY)}px`;
            magnifiedImage.style.width = `${imageRect.width * zoomFactor}px`;
            magnifiedImage.style.height = `${imageRect.height * zoomFactor}px`;
        } else {
            magnifier.style.display = 'none';
        }
    }

    // Real-time updates without throttling for maximum smoothness
    strawmargcup.addEventListener('mousemove', updateMagnifier);
    strawmargcup.addEventListener('mouseleave', () => {
        magnifier.style.display = 'none';
    });
});



























































