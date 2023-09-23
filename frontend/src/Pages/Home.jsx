import React from "react";
import PieChart from "../components/PieChart/PieChart";
import { useState } from "react";
import NewsCategory from "../components/NewsCategory/NewsCategory";

const Home = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedSentiment, setSelectedSentiment] = useState("All");

  const newsData = [
    {
      title: "Positive News Headline 1",
      sentiment: "Positive",
      department: "Government",
    },
    {
      title: "Negative News Headline 1",
      sentiment: "Negative",
      department: "Health",
    },
    {
      title: "Neutral News Headline 1",
      sentiment: "Neutral",
      department: "Finance",
    },
    // Add more news items as needed
  ];

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
      <div className="container">
        <h1 className="text-4xl font-[800] mt-4">DashBoard</h1>
        <section className="grid grid-cols-5 gap-[8rem]">
          <div className="col-span-3">
            <div className="border border-solid mx-4 p-4 rounded-md ">
              <h3 className="text-2xl font-[800] mb-3">Top Headlines</h3>
              <div className="card-text">
                <a
                  target="_blank"
                  href="https://www.hindustantimes.com/india-news/government-launches-study-in-india-portal-to-establish-india-as-global-education-hub-101691069616859.html"
                >
                  <div className="flex">
                    <img
                      src="https://images.tv9hindi.com/wp-content/uploads/2020/10/PM-Narendra-Modi.jpg"
                      height="150px"
                      width="160px"
                      className="mr-3"
                      alt="..."
                    />
                    <div className="media-body">
                      <h4 className="text-[24px] font-bold hover:text-primaryColor">
                        Government Launches New Education Program
                      </h4>
                      <p className="font-semibold">
                        Published in: Hindustan Times
                      </p>
                      <p>Date: September 25, 2023</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="card-text mt-5">
                <div className="flex">
                  <img
                    src="https://ddnews.gov.in/sites/default/files/d_13.jpg"
                    height="150px"
                    width="160px"
                    className="mr-3"
                    alt="..."
                  />
                  <a href="https://www.hindustantimes.com/ht-insight/public-health/prioritising-employee-mental-health-post-covid-the-key-to-a-resilient-workforce-101690264614997.html">
                    <div className="media-body">
                      <h4 className="text-[24px] font-bold hover:text-primaryColor">
                        Healthcare Initiative Receives Positive Feedback
                      </h4>
                      <p className="font-semibold">
                        Published in: Hindustan Times
                      </p>
                      <p>Date: September 24, 2023</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="card-text mt-5">
                <div className="flex">
                  <img
                    src="https://images.indianexpress.com/2023/02/G20.jpg?w=640"
                    height="150px"
                    width="160px"
                    className="mr-3"
                    alt="..."
                  />
                  <a href="https://indianexpress.com/article/business/budget/union-budget-2023-rs-990-crore-allocated-for-g20-presidency-8418567/">
                    <div className="media-body">
                      <h4 className="text-[24px] font-bold hover:text-primaryColor">
                        Union Budget 2023: Rs 990 crore allocated for G20
                        presidency
                      </h4>
                      <p className="font-semibold">
                        Published in: The Indian Express
                      </p>
                      <p>Date: September 24, 2023</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <PieChart />
          </div>
        </section>
        <section className="p-0">
          {/* <NewsCategory/> */}
          <div>
          <div className="container mx-auto mt-6">
      <h1 className="text-4xl font-semibold mb-4">Indian Government News</h1>
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
            <p className="text-sm text-gray-600">Department: {news.department}</p>
          </div>
        ))}
      </div>
    </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
