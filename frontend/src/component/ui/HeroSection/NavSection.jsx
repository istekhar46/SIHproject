import { SlGraduation } from "react-icons/sl";
import { IoFastFood } from "react-icons/io5";
import { MdOutlineWorkOutline, MdMapsHomeWork } from "react-icons/md";

const NavSection = () => {
  return (
    <>
      <section className="mx-2 py-0">
        <div className="px-9 grid md:grid-cols-4 gap-3 md:h-[35vh] h-[100vh]">
          <div className="shadow cursor-pointer flex justify-center items-center relative border bg-[#d9dffa]  h-[70%] w-[15rem] mt-12 mx-5 rounded-md">
            <div className="shadow absolute top-[-30%] rounded-full bg-[#eeebf2] p-3 md:p-7">
              <p className=" font-[900] text-[3rem]">
                <SlGraduation />
              </p>
            </div>
            <h3 className="font-[900] text-[22px]">Child Education</h3>
          </div>
          <div className="shadow cursor-pointer flex justify-center items-center relative border bg-[#fce0c5] h-[70%] w-[15rem] mt-12 mx-5 rounded-md">
            <div className="shadow absolute top-[-30%] rounded-full bg-[#eeebf2] p-3 md:p-7">
              <p className=" font-[900] text-[3rem]">
                <MdOutlineWorkOutline />
              </p>
            </div>
            <h3 className="font-[900] text-[22px]">Work Salary</h3>
          </div>
          <div className="shadow cursor-pointer flex justify-center items-center relative border bg-[#d9dffa] h-[70%] w-[15rem] mt-12 mx-5 rounded-md">
            <div className="shadow absolute top-[-30%] rounded-full bg-[#eeebf2] p-3 md:p-7">
              <p className=" font-[900] text-[3rem]">
                <IoFastFood />
              </p>
            </div>
            <h3 className="font-[900] text-[22px]">Healthy Food</h3>
          </div>
          <div className="shadow cursor-pointer  flex justify-center items-center relative border bg-[#fce0c5] h-[70%] w-[15rem] mt-12 mx-5 rounded-md">
            <div className="shadow absolute top-[-30%] rounded-full bg-[#eeebf2] p-3 md:p-7">
              <p className=" font-[900] text-[3rem]">
                <MdMapsHomeWork />
              </p>
            </div>
            <h3 className="font-[900] text-[22px]">Houses</h3>
          </div>

          {/* <div className="flex justify-center items-center relative border bg-[#edcee6] border-black h-[70%] w-[15rem] mt-12 mx-5 rounded-md">
              <div>
                <SlGraduation />
              </div>
              <h3>Child Education</h3>
            </div>
            <div className="flex justify-center items-center relative border bg-[#edcee6] border-black h-[70%] w-[15rem] mt-12 mx-5 rounded-md">
              <div>
                <SlGraduation />
              </div>
              <h3>Child Education</h3>
            </div>
            <div className="flex justify-center items-center relative border bg-[#edcee6] border-black h-[70%] w-[15rem] mt-12 mx-5 rounded-md">
              <div>
                <SlGraduation />
              </div>
              <h3>Child Education</h3>
            </div> */}
        </div>
      </section>
      <section></section>
    </>
  );
};

export default NavSection;
