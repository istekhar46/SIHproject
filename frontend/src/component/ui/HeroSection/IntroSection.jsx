const IntroSection = () => {
  return (
    <>
      <section className="px-2 grid md:grid-cols-2 md:h-[50vh] h-full">
        <div className="flex flex-col justify-start items-start px-[60px]">
          <h3 className="font-[700] text-[#f00a0a] my-3 text-[22px]">
            What we do ?
          </h3>
          <h1 className="text-[2rem] font-[800] text-[#09092e] ">
            We Are In Mission to Help The Helpless
          </h1>
          <p className="font-semibold text-[14px] text-[#121217]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            quaerat facilis, error molestiae amet blanditiis itaque iste labore
            ut, cumque tempore sapiente ad unde aperiam obcaecati veritatis
            impedit provident sed.
          </p>
          <button
            type="button"
            className="bg-[#f00a0a] rounded-full p-3 my-3 text-white"
          >
            Know More
          </button>
        </div>
        {/* second colum */}
        {/* <div className="hidden lg:block"> */}

        <div className="relative hidden justify-center items-center lg:flex">
          <div className="absolute left-[13%]  h-[15rem] w-[15rem] rounded-full border-8 border-[#09092e] bg-[url('https://media.istockphoto.com/id/1386470970/photo/mother-helping-her-son-with-his-hearing-aid.jpg?s=1024x1024&w=is&k=20&c=icEdCKZiyl0QO-rpVDA2zlDmCFrKQET0RMsD8H7QN3c=')] bg-cover bg-center"></div>
          <div className="absolute right-[12%] h-full md:h-[18rem] w-[18rem] rounded-full border-4 border-[#09092e] bg-[url('https://media.istockphoto.com/id/525972446/photo/family-cooking-together.jpg?s=1024x1024&w=is&k=20&c=l49UlTxJbq4Ppc9W2c-OGrVXdwQZuDtnOpu_bsBm8a0=')] bg-cover bg-center"></div>
        </div>
        {/* </div> */}
      </section>
      <section></section>
    </>
  );
};

export default IntroSection;
