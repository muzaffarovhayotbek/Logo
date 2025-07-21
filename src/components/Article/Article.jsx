import React from "react";
import client from '../../assets/client.png'
import quote from '../../assets/quote.svg'
function Article() {
  return (
      <div className="container mx-auto mt-[87px] mb-[158px]">
        <h2 className="w-[267px] text-[26px] leading-[100%] text-[#0F001A]  text-center">
          What our client say
        </h2>
        <div className="flex items-center gap-[100px] mt-[11px] ml-[120px]">
                <div className="w-[557px]">
                        <img src={client} alt="client" />
                </div>  

                <div className="w-[418px]">
                    <img src={quote} alt="quote" width={50} className="pb-[40px]" />
                    <p className="w-[418px] text-[16px] leading-[24px] text-[#878787]">Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.</p>
                    <h4 className="w-[126px] text-[18px] leading-[100%] text-[#0F001A] pt-[40px]">Angel Paulina</h4>
                </div>
        </div>
    </div>
  );
}

export default Article;
