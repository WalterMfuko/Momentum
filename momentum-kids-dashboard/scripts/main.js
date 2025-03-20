// This file contains the main JavaScript logic for the dashboard, handling navigation and general interactivity.

document.addEventListener('DOMContentLoaded', function() {
    // Initialize video loading
    loadVideos();

    // Event listeners for sorting and filtering
    document.getElementById('sort-options').addEventListener('change', sortVideos);
    document.getElementById('filter-options').addEventListener('input', filterVideos);

    // Swipe functionality
    initializeSwipe();
});

function loadVideos() {
    const videos = [
        {
            title: "Danny Go - Fun Learning",
            url: "https://www.youtube.com/watch?v=example1",
            thumbnail: "assets/thumbnails/danny-go.jpg"
        },
        {
            title: "Other Show - Adventure Time",
            url: "https://www.youtube.com/watch?v=example2",
            thumbnail: "assets/thumbnails/other-shows.jpg"
        },
        // Add more video objects as needed
    ];

    const videoContainer = document.getElementById('video-container');
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video-item');
        videoElement.innerHTML = `
            <a href="${video.url}" target="_blank">
                <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
                <h3 class="video-title">${video.title}</h3>
            </a>
        `;
        videoContainer.appendChild(videoElement);
    });
}

function sortVideos() {
    const sortOption = document.getElementById('sort-options').value;
    // Implement sorting logic based on the selected option
}

function filterVideos() {
    const filterText = document.getElementById('filter-options').value.toLowerCase();
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(item => {
        const title = item.querySelector('.video-title').textContent.toLowerCase();
        if (title.includes(filterText)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function initializeSwipe() {
    // Implement swipe functionality for video navigation
}