import React from "react";
import threePhone from "../../assets/threePhone.png";
import play from '../../assets/play2.svg'
import AppStore from '../../assets/AppStore.svg'
function Last() {
  return (
    <div>
      <div className="container mx-auto  pl-[120px] mb-[123p]">
      <div className="flex items-center gap-[99px]">
          <div className="w-[516px]">
          <img src={threePhone} alt="" />
        </div>
        <div className="w-[444px]">
          <h2 className="w-[384px] text-[25px] leading-[100%] pb-[16px] text-center text-[#0F001A]">Download app to enjoy more!</h2>
          <p className="w-[444px] text-[16px] leading-[24px] text-[#0F001A]">
            Amet in elementum nulla scelerisque dui, egestas at. Elit
            consectetur turpis elementum amet vitae et etiam nec. Varius
            volutpat hac adipiscing tincidunt pretium.
          </p>
        <div className="flex mt-[56px] gap-[21px] items-center">
              <img src={play} alt="" className="w-[172px]" />
          <img src={AppStore} alt="" className="w-[172px]" />
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Last;
