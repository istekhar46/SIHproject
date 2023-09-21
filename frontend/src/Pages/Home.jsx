import React from "react";
import PieChart from "../components/PieChart/PieChart";

const Home = () => {
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
      </div>
    </>
  );
};

export default Home;
