import React from "react";
import person from "../../assets/person.svg";
import shield from "../../assets/shield.svg";
import emoji from "../../assets/emoji.svg";
function Section() {
  return (
    <div>
      <div className="container mx-auto bg-[#4A99D31A] py-[95px] px-[245px]">
        <h2 className=" text-[26px] leading-[100%] text-center text-[#4A99D3] font-[700]">
          How it works
        </h2>
        <div className="flex items-center gap-[106px] pt-[88px]">
          <div className="w-[224px] flex  flex-col items-center ">
            <img src={person} alt="" className="w-[60px] pb-[30px]" />
            <div className="w-[224px]">
              <h2 className="text-[18px] leading-[100%] pb-[10px] text-center">
                Create an account
              </h2>
              <p className="w-[224px] text-[16px] leading-[26px] text-center text-[#0F001A]">
                Lorem ipsum dolor sit amet, consecteteu.
              </p>
            </div>
          </div>{" "}
          <div className="w-[257px] flex flex-col items-center">
            <img src={shield} alt="sheild" className="w-[60px] pb-[30px]" />
            <div className="w-[257px] text-center">
              <h2 className="text-[18px] leading-[100%] pb-[10px]">
                Create an account
              </h2>
              <p className="text-[16px] w-[257px] leading-[26px]">
                Lorem ipsum dolor sit amet, consecteteu.
              </p>
            </div>
          </div>
          <div className="w-[257px] flex flex-col items-center">
            <img src={emoji} alt="sheild" className="w-[60px] pb-[30px]" />
            <div className="w-[257px] text-center">
              <h2 className="text-[18px] leading-[100%] pb-[10px]">
                Enjoy the app
              </h2>
              <p className="text-[16px] w-[257px] leading-[26px]">
                Lorem ipsum dolor sit amet, consecteteu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
