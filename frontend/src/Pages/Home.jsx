import React from "react";
import PieChart from "../components/PieChart/PieChart";
import { useState } from "react";


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
                  href="https://economictimes.indiatimes.com/tech/technology/apple-reverses-decision-to-disable-home-screen-web-apps-in-eu/articleshow/108155600.cms"
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
                      हवाईअड्डों पर व्हीलचेयर से चलने वाले यात्रियों के लिए एसओपी तैयार करने के लिए अधिकारियों से कहेंगे: सुप्रीम कोर्ट
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
                    src="https://economictimes.indiatimes.com/thumb/msid-108155600,width-100,height-75,resizemode-4/tech/technology/apple-reverses-decision-to-disable-home-screen-web-apps-in-eu.jpg"
                    height="150px"
                    width="160px"
                    className="mr-3"
                    alt="..."
                  />
                  <a href="https://economictimes.indiatimes.com/tech/technology/apple-reverses-decision-to-disable-home-screen-web-apps-in-eu/articleshow/108155600.cms">
                    <div className="media-body">
                      <h4 className="text-[24px] font-bold hover:text-primaryColor">
                      National Handicapped Finance And Development Corporation
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
                    src="https://economictimes.indiatimes.com/thumb/msid-108018575,width-100,height-75,resizemode-4/industry/transportation/airlines-/-aviation/will-ask-authorities-to-frame-sop-for-wheelchair-bound-passengers-at-airports-sc.jpg"
                    height="150px"
                    width="160px"
                    className="mr-3"
                    alt="..."
                  />
                  <a href="https://www.nhfdc.nic.in/">
                    <div className="media-body">
                      <h4 className="text-[24px] font-bold hover:text-primaryColor">
                      કોવિડ-૧૯ મહામારીના સમયગાળા દરમિયાન અવસાન પામેલ માતા/પિતાના બાળકોને સહાય કરવા બાબત.
                      </h4>
                      <p className="font-semibold">
                        Published in: The Indian Express
                      </p>
                      <p>Date: September 24, 2024</p>
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
        
        </section>
      </div>
    </>
  );
};

export default Home;
