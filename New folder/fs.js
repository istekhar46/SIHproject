// JavaScript code for the dashboard section

// Sample data for sentiment trends (replace with actual data)
const sentimentData = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
        {
            data: [30, 15, 55], // Replace with actual percentages
            backgroundColor: ["green", "red", "gray"],
        },
    ],
};

// Create a chart using Chart.js
const ctx = document.getElementById("sentiment-chart").getContext("2d");
new Chart(ctx, {
    type: "doughnut",
    data: sentimentData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: "right",
        },
    },
});

// JavaScript code for the news feed section

// Sample data for news feed (replace with actual data)
const newsData = [
    {
        title: "Government Launches New Education Program",
        source: "The Times of India",
        date: "September 25, 2023",
        sentiment: "Positive",
        department: "Education",
    },
    {
        title: "Healthcare Initiative Receives Positive Feedback",
        source: "Hindustan Times",
        date: "September 24, 2023",
        sentiment: "Positive",
        department: "Healthcare",
    },
];

// Function to populate the news feed
function populateNewsFeed() {
    const newsList = document.querySelector(".news-list");
    newsData.forEach((item) => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");
        newsItem.innerHTML = `
            <h3>${item.title}</h3>
            <p>Published in: ${item.source}</p>
            <p>Date: ${item.date}</p>
            <p>Sentiment: ${item.sentiment}</p>
            <p>Department: ${item.department}</p>
        `;
        newsList.appendChild(newsItem);
    });
}

// Call the function to populate the news feed
populateNewsFeed();


// JavaScript code for the video section

// Sample data for video section (replace with actual data)
const videoData = [
    {
        title: "Government Press Conference",
        sourceChannel: "Government TV",
        date: "September 26, 2023",
        sentiment: "Neutral",
        department: "General",
        videoId: "VIDEO_ID_1",
    },
    {
        title: "Economic Update Discussion",
        sourceChannel: "Business News Network",
        date: "September 25, 2023",
        sentiment: "Positive",
        department: "Economy",
        videoId: "VIDEO_ID_2",
    },
];

// Function to populate the video section
function populateVideoSection() {
    const videoList = document.querySelector(".video-list");
    videoData.forEach((item) => {
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");
        videoItem.innerHTML = `
            <h3>${item.title}</h3>
            <p>Source Channel: ${item.sourceChannel}</p>
            <p>Date: ${item.date}</p>
            <p>Sentiment: ${item.sentiment}</p>
            <p>Department: ${item.department}</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${item.videoId}" frameborder="0" allowfullscreen></iframe>
        `;
        videoList.appendChild(videoItem);
    });
}

// Call the function to populate the video section
populateVideoSection();


