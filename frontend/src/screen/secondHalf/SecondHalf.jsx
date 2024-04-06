import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HearingAids from "./HearingAids";
import CochlearImplants from "./CochlearImplants";
import CashDonation from "./CashDonation";

function SecondHalf() {
  return (
    <section>
      <div>
        <div
          style={{ fontWeight: "800", marginBottom: "1rem" }}
          className="text-center text-red-500 text-2xl"
        >
          We Love To Help Poor
        </div>
        <div
          style={{ fontWeight: "500" }}
          className="text-center text-black text-5xl"
        >
          Our Featured Campaigns
        </div>
        <div className="text-s text-slate-500 mt-6 w-[500px] m-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          praesentium recusandae atque voluptatum eos possimus
        </div>
        <div className="flex flex-wrap justify-around mt-12">
          <HearingAids />
          <CochlearImplants />
          <CashDonation />
        </div>
      </div>
      <div className="mt-24 flex justify-around">
        <div className="flex items-center">
          <Avatar style={{ width: "8rem", height: "8rem" }}>
            <AvatarImage src="https://i.pinimg.com/originals/a8/6f/ba/a86fba9d9f77a854aff44371ef5a2dbe.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-4xl font-bold">535k</p>
            <p className="">Deaf People</p>
          </div>
        </div>
        <div className="flex items-center">
          <Avatar style={{ width: "8rem", height: "8rem" }}>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9ASjSsqd25a9Zwad8-vPhgwHgPSYwIDHsjWoAmDLriV-4_HW7xrAdsqzXEbef_CwXVc&usqp=CAU" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-4xl font-bold">800T</p>
            <p className="">Fund Raised</p>
          </div>
        </div>
        <div className="flex items-center">
          <Avatar style={{ width: "8rem", height: "8rem" }}>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe51REFo-mWZ6XhRpAQiJ2SAiSL9DhrwHYTjfG8nSCb1JK_RS2mY6AOkd9hYNIMTX3LsU&usqp=CAU" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-4xl font-bold">80k</p>
            <p className="">Members</p>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <div
          style={{ fontWeight: "700" }}
          className="text-center text-black text-4xl"
        >
          Volunteer Events
        </div>
        <div className="text-s text-slate-500 mt-4 w-[500px] m-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          praesentium recusandae atque voluptatum eos possimus
        </div>
        <div className="flex flex-wrap justify-around mt-24">
          <div className="relative w-[350px] overflow-hidden">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://images.pexels.com/photos/6347743/pexels-photo-6347743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(70, 70, 70, 0.446)",
                display: "flex",
                alignItems: "end",
              }}
              className="px-2 pb-2"
            >
              <div className="text-slate-200 font-semibold w-full">
                <div>Donate for the bright future deaf people</div>
                <div className="flex justify-between font-normal">
                  <div>5:00pm-7:00pm</div>
                  <div>New Jersey</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[350px] overflow-hidden">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9cKr5cZJV1caj5mxQourU4__4ggZ9AMxNghyBLk7MnO-3mogaiBpzPQTaYIZxWfaRYM&usqp=CAU"
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(70, 70, 70, 0.446)",
                display: "flex",
                alignItems: "end",
              }}
              className="px-2 pb-2"
            >
              <div className="text-slate-200 font-semibold w-full">
                <div>Donate for the bright future deaf people</div>
                <div className="flex justify-between font-normal">
                  <div>5:00pm-7:00pm</div>
                  <div>New Jersey</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[350px] overflow-hidden">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://c8.alamy.com/comp/2H919M5/portrait-of-female-volunteer-cleaning-park-2H919M5.jpg"
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(70, 70, 70, 0.446)",
                display: "flex",
                alignItems: "end",
              }}
              className="px-2 pb-2"
            >
              <div className="text-slate-200 font-semibold w-full">
                <div>Donate for the bright future deaf people</div>
                <div className="flex justify-between font-normal">
                  <div>5:00pm-7:00pm</div>
                  <div>New Jersey</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <div
          style={{ fontWeight: "700" }}
          className="text-center text-black text-4xl mb-16"
        >
          Our Gallery
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
          <div>
            <img
              style={{ height: "100%" }}
              src="data:image/jpeg;base64,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"
            />
          </div>
          <div>
            <img
              style={{ height: "100%" }}
              src="data:image/jpeg;base64,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"
            />
          </div>
          <div>
            <img
              style={{ height: "100%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYRnNqnDd6lriGm2V8ezWgBFXc040Upq9ODQ&usqp=CAU"
            />
          </div>
          <div>
            <img
              style={{ height: "100%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUcUwoTl5xNHUCP4EBNkyFrge95AE-PcjBw&usqp=CAU"
            />
          </div>
          <div>
            <img
              style={{ height: "100%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHF4f1-BJrIoDan2ALIx4eRY7XatuI9uxEw&usqp=CAU"
            />
          </div>
          <div>
            <img
              style={{ height: "100%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7qOzdu2QGjCESGO5EG1XzSWrn-Yxqc8yBV4Z4iNwMLFq3COuMWA4MjBjrg2dmLgtLtVM&usqp=CAU"
            />
          </div>
          <div>
            <img
              style={{ height: "100%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBV91ndi1ZFIxV1JdK4yZ3oQbJsdamTJWNLQ&usqp=CAU"
            />
          </div>
          <div>
            <img
              style={{ height: "100%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEmARf3q6ifeaQKtHWLDsOdZxviBN0a-JGYg&usqp=CAU"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondHalf;
