// This file handles the video-related functionality, including loading videos, implementing sorting and filtering, and managing swipe interactions.

document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('video-container');
    const sortSelect = document.getElementById('sort-select');
    const filterInput = document.getElementById('filter-input');
    const videos = [
        {
            title: "Danny Go - Fun Learning",
            url: "https://www.youtube.com/watch?v=dannygo1",
            thumbnail: "assets/thumbnails/danny-go.jpg"
        },
        {
            title: "Other Kids Show - Adventure Time",
            url: "https://www.youtube.com/watch?v=otherkids1",
            thumbnail: "assets/thumbnails/other-shows.jpg"
        },
        {
            title: "Danny Go - Sing Along",
            url: "https://www.youtube.com/watch?v=dannygo2",
            thumbnail: "assets/thumbnails/danny-go.jpg"
        },
        {
            title: "Other Kids Show - Learning Colors",
            url: "https://www.youtube.com/watch?v=otherkids2",
            thumbnail: "assets/thumbnails/other-shows.jpg"
        }
    ];

    function loadVideos(videos) {
        videoContainer.innerHTML = '';
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
        const sortValue = sortSelect.value;
        let sortedVideos = [...videos];
        if (sortValue === 'title') {
            sortedVideos.sort((a, b) => a.title.localeCompare(b.title));
        }
        loadVideos(sortedVideos);
    }

    function filterVideos() {
        const filterValue = filterInput.value.toLowerCase();
        const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(filterValue));
        loadVideos(filteredVideos);
    }

    sortSelect.addEventListener('change', sortVideos);
    filterInput.addEventListener('input', filterVideos);

    loadVideos(videos);
});