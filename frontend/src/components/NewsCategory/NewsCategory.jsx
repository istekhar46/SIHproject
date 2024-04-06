import React, { useState } from "react";
// Assuming newsData is imported from somewhere, else you need to define it.
// import { newsData } from "../../data/newsData";
const newsData = [
  {
    id: 1,
    title: "New Healthcare Facility Opens",
    sentiment: "Positive",
    department: "Health",
  },
  {
    id: 2,
    title: "Budget Cuts Affect Public Schools",
    sentiment: "Negative",
    department: "Government",
  },
  {
    id: 3,
    title: "New Policy to Boost Local Businesses",
    sentiment: "Positive",
    department: "Finance",
  },
  {
    id: 4,
    title: "Public Transport System to be Overhauled",
    sentiment: "Neutral",
    department: "Government",
  },
  // Add more news items as needed
];

const NewsCategory = () => {
  // Initialize state
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedSentiment, setSelectedSentiment] = useState("All");

  // Filter news based on the selected department and sentiment
  const filteredNews = newsData.filter((news) => {
    if (selectedDepartment === "All" && selectedSentiment === "All") {
      return true; // No filters applied
    }
    if (selectedDepartment === "All" && selectedSentiment !== "All") {
      return news.sentiment === selectedSentiment; // Filter by sentiment only
    }
    if (selectedDepartment !== "All" && selectedSentiment === "All") {
      return news.department === selectedDepartment; // Filter by department only
    }
    return (
      news.department === selectedDepartment &&
      news.sentiment === selectedSentiment
    ); // Filter by both department and sentiment
  });

  const departments = ["All", "Government", "Health", "Finance"]; // Add more departments as needed
  const sentiments = ["All", "Positive", "Negative", "Neutral"];

  return (
    <>
      <div>
        <div className="container mx-auto mt-6">
          <h1 className="text-4xl font-semibold mb-4">
            Indian Government News
          </h1>
          <div className="mb-4">
            <span className="mr-2">Filter by Department:</span>
            {departments.map((department, index) => (
              <button
                key={index}
                className={`${
                  selectedDepartment === department
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                } px-3 py-1 rounded-md mr-2 hover:bg-blue-600 transition duration-300 ease-in-out`}
                onClick={() => setSelectedDepartment(department)}
              >
                {department}
              </button>
            ))}
          </div>
          <div className="mb-4">
            <span className="mr-2">Filter by Sentiment:</span>
            {sentiments.map((sentiment, index) => (
              <button
                key={index}
                className={`${
                  selectedSentiment === sentiment
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-800"
                } px-3 py-1 rounded-md mr-2 hover:bg-green-600 transition duration-300 ease-in-out`}
                onClick={() => setSelectedSentiment(sentiment)}
              >
                {sentiment}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
              >
                <h2 className="text-lg font-semibold mb-2">{news.title}</h2>
                <p className="text-sm text-gray-600">
                  Sentiment: {news.sentiment}
                </p>
                <p className="text-sm text-gray-600">
                  Department: {news.department}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCategory;
