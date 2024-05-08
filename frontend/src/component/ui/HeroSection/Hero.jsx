
const Hero = () => {
  return (
    <>
    <section className="mx-2 py-0 grid md:grid-cols-2">
        <div className="h-screen flex justify-center items-center ">
          <div className="w-ful px-[15%]">
            <h3 className="font-semibold text-[22px] my-3 text-[#636363]">
              Help The Poor Families
            </h3>
            <h1 className="font-[900] pb-3 text-[2.5rem] text-[#141345]">
              Give hope, change lives, spread love.
            </h1>
            <h1> </h1>
            <p className="font-semibold text-[16px] pb-5 text-[#636363]">
              We help local non-profits access the funding, tools, training, and
              support they need to become more
            </p>
            <div className="md:flex justify-start items-center ">
              <div>
                <button
                  type="button"
                  className="bg-primaryColor font-bold text-white m-1 p-4 rounded-full"
                >
                  Donate Now
                </button>
              </div>
              <div className="md:ml-5 p-2 flex relative w-[7rem] ">
                <div className="absolute left-12 z-10 flex items-center">
                  <img
                    className="h-[3.5rem] w-[3.5rem] rounded-full "
                    src="https://source.unsplash.com/random/profile"
                    alt=""
                  />
                  <p className="left-3 absolute font-[800] text-white">100+</p>
                </div>
                <div className="absolute left-6">
                  <img
                    className="h-[3.5rem] w-[3.5rem] rounded-full "
                    src="https://source.unsplash.com/random/profile"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-[3.5rem] w-[3.5rem] rounded-full"
                    src="https://source.unsplash.com/random/profile"
                    alt=""
                  />
                </div>
              </div>
              <div className="ml-1 font-[800] text-[#353434]">
                Happy Families
              </div>
            </div>
          </div>
        </div>

        {/* second colum */}
        <div className="h-screen p-5 hidden md:block">
          <div className="relative md:h-[75%]">
            <div className="ml-[50%] rounded-md mt-5 w-[40%] h-[90%]  bg-[url('https://media.istockphoto.com/id/539055997/photo/senior-man-accepting-meal-from-food-bank-volunteer.jpg?s=1024x1024&w=is&k=20&c=gtPWu0DRXpCPFWuCrhQqATYFRrbdjSPnmdcB3INYS4U=')] bg-cover bg-center"></div>
            <div className="absolute ml-[20%] rounded-md bottom-[15%] h-[50%] w-[40%] bg-[url('https://media.istockphoto.com/id/830848434/photo/checking-his-heart-rate.jpg?s=1024x1024&w=is&k=20&c=Y18-WUwdcfUtWlSxEAzhKoghSIy8qNBaQ1LSj3A4v_k=')] bg-cover bg-center "></div>
          </div>
          <div className="relative h-[25%] ">
            <div className="flex justify-center items-center m-5 w-[40%] h-[70%] bg-[#37339c] rounded-md">
            <p className="font-bold text-white">300+ projects complete</p>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero