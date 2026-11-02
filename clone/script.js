const video = document.querySelector('.hover-video');
const container = document.querySelector('.video-container');

// Play video on hover
container.addEventListener('mouseenter', () => {
    video.play().catch(error => {
        console.log("Playback prevented: ", error);
    });
    video.currentTime = 0; // Optional: Resets the video to the beginning
});

// Pause video and reset time when mouse leaves
// container.addEventListener('mouseleave', () => {
//     video.pause();
//     video.currentTime = 0; // Optional: Resets the video to the beginning
// });