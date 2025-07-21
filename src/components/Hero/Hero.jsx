import React from "react";
import phones from "../../assets/phones.png";
function Hero() {
  return (
    <div>
      <div className="container mx-auto mt-[40px] flex items-center gap-[123px] mb-[64px]">
        <div className="w-[636px] ml-[109px]">
          <span>
            <h2 className="text-[50px] text-[#260041] pb-[14px]">
              New
              <span className="text-[50px] text-[#D81B60]">
                {" "}
                E-commerce App
              </span>
              <h2>best for You</h2>
            </h2>
          </span>
          <p className="w-[636px] text-[20px] leading-[36px] text-[#260041]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sed
            vulputate vitae velit dictum cursus amet. Turpis donec ut velit
            quis. Cursus commodo, eget urna, sapien amet.{" "}
          </p>
          <div>
            <button></button>
          </div>
        </div>
        <div className="hero-right">
          <img src={phones} alt="phones" className="w-[441px]" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
