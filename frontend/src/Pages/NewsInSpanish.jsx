import React from "react";
import PieChart from "../components/PieChart/PieChart";

const NewsInSpanish = () => {
  // Assuming you're using these states somewhere in your component
  const [selectedDepartment, setSelectedDepartment] = React.useState("All");
  const [selectedSentiment, setSelectedSentiment] = React.useState("All");

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

  // Example usage of filtered news based on department and sentiment
  const filteredNews = newsData.filter((news) => {
    if (selectedDepartment === "All" && selectedSentiment === "All") {
      return true;
    }
    if (selectedDepartment === "All") {
      return news.sentiment === selectedSentiment;
    }
    if (selectedSentiment === "All") {
      return news.department === selectedDepartment;
    }
    return (
      news.department === selectedDepartment &&
      news.sentiment === selectedSentiment
    );
  });

  // Get today's date formatted as "Month day, year"
  const todayDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="container">
      <h1 className="text-4xl font-bold mt-4">Dashboard</h1>
      <section className="grid grid-cols-5 gap-8">
        <div className="col-span-3">
          <div className="border border-solid mx-4 p-4 rounded-md">
            <h3 className="text-2xl font-bold mb-3">Top Headlines</h3>
            {/* Example News Item */}
            {/* Ensure you map through your news data to dynamically create these cards */}
            <div className="card-text">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://economictimes.indiatimes.com/tech/technology/apple-reverses-decision-to-disable-home-screen-web-apps-in-eu/articleshow/108155600.cms"
              >
                <div className="ok fex">
                  <img
                    src="https://images.tv9hindi.com/wp-content/uploads/2020/10/PM-Narendra-Modi.jpg"
                    height="150"
                    width="160"
                    className="mr-3"
                    alt="news"
                  />
                  <div>
                    <h4 className="text-xl font-bold hover:text-blue-500">
                      એરપોર્ટ પર વ્હીલચેર-બાઉન્ડ મુસાફરો માટે અધિકારીઓને SOP
                      તૈયાર કરવા કહેશેઃ સુપ્રીમ કોર્ટ
                    </h4>
                    <p className="font-semibold">
                      Published in: Hindustan Times
                    </p>
                    <p>Date: {todayDate}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold hover:text-blue-500">
                      પેરાલિમ્પિક ગેમ્સમાં ભારતીયોએ નવા રેકોર્ડ બનાવ્યા રમતવીરોએ
                      તાકાત બતાવી
                    </h4>
                    <p className="font-semibold">
                      Published in: The Times of India
                    </p>
                    <p>Date: {todayDate}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold hover:text-blue-500">
                      પેરાલિમ્પિક ગેમ્સમાં ભારતીયોએ નવા રેકોર્ડ બનાવ્યા રમતવીરોએ
                      તાકાત બતાવી
                    </h4>
                    <p className="font-semibold">
                      Published in: Navbharat Times
                    </p>
                    <p>Date: {todayDate}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold hover:text-blue-500">
                      વિકલાંગતા મૈત્રીપૂર્ણ ઉદ્યાનો પહેલ દ્વારા સામાજિક
                      સમાવેશકતામાં વધારો થયો છે
                    </h4>
                    <p className="font-semibold">Published in: Dainik Jagran</p>
                    <p>Date: {todayDate}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold hover:text-blue-500">
                      બાળકો માટે ખાસ રચાયેલ પ્રોસ્થેટિક્સ અંગો, હવે રમતગમત અને
                      ચાલવું વધુ સરળ બનશે
                    </h4>
                    <p className="font-semibold">Published in: Amar Ujala</p>
                    <p>Date: {todayDate}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold hover:text-blue-500">
                      બાળકો માટે ખાસ રચાયેલ પ્રોસ્થેટિક્સ અંગો, હવે રમતગમત અને
                      ચાલવું વધુ સરળ બનશે
                    </h4>
                    <p className="font-semibold">
                      Published in: The Economic Times
                    </p>
                    <p>Date: {todayDate}</p>
                  </div>
                </div>
              </a>
            </div>
            {/* Add more news items */}
          </div>
        </div>
        <div className="col-span-2">
          <PieChart />
        </div>
      </section>
    </div>
  );
};

export default NewsInSpanish;
