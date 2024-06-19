import Logo from "/src/assets/CRIPTION.png";
import Profile from "/src/assets/profile.png";
import Frame from "/src/assets/frame.png";
import React from "react";

const points = [
  "Lorem ipsum dolor sit amet.",
  "Consectetur adipiscing elit.",
  "Integer nec odio.",
  "Praesent libero.",
  "Sed cursus ante dapibus diam.",
  "Nulla quis sem at nibh elementum imperdiet.",
  "Duis sagittis ipsum.",
  "Praesent mauris.",
  "Fusce nec tellus sed augue semper porta.",
  "Mauris massa.",
];
const points1 = [
  "Lorem ipsum dolor sit amet.",
  "Consectetur adipiscing elit.",
  "Integer nec odio.",
  "Praesent libero.",
  "Sed cursus ante dapibus diam.",
  "Nulla quis sem at nibh elementum imperdiet.",
  "Duis sagittis ipsum.",
  "Praesent mauris.",
];

const App = () => {
  return (
    <div className="p-4 bg-[#ECFAD3]">
      <div className="flex justify-between items-center mb-4 relative">
  <img
    className="w-12 h-12"
    src={Logo}
    alt="Doctor"
  />
  <div className="text-lg">Date: 18 Jun 2024</div>
  <div className="absolute left-12 right-0 border-b-[8px] border-[#48ad58]" style={{ marginLeft: '-10px', marginTop:'40px' }}></div>
</div>


      <div className=" bg-white p-4 rounded-xl">
        <div className="flex justify-between border-b-[1px] border-green-500 mb-4">
          <div className="flex mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src={Profile}
              alt="Doctor"
            />
            <div>
              <div className="font-bold pl-2 text-[#444444]">Dr. Darlene Robertson</div>
              <div className="pl-2 text-[#666666]">Nutritionist</div>
            </div>
          </div>
          <p className="text-[#A6CC39]">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="bg-[#ECFAD3] p-4 rounded-lg mt-[12px]">
          <div className="flex justify-center">
            <div className="w-1/2 flex flex-col items-start text-[20px]">
              <div className="flex justify-between w-full">
                <div className="font-[700] pb-2">Rx</div>
                <div className="mr-[20px] font-[700] pb-2">Duration</div>
              </div>
              {points1.slice(0, 4).map((point, index) => (
                <div key={index} className="flex w-full justify-between">
                  <div className="text-[#666666] text-[16px] bg-white py-2 px-2 w-full border-b-2 border-[#b7bcaf]">
                    {index + 1}. {point}
                  </div>
                  <div className="text-[#666666] ml-[3px] text-[16px] bg-white py-2 px-8 border-b-2 border-[#b7bcaf]">100g </div>
                </div>
              ))}
            </div>
            <div className="w-1/2 flex flex-col items-start text-[20px]">
            <div className="flex justify-between w-full">
                <div className="font-[700] pb-2">Rx</div>
                <div className="mr-[20px] font-[700] pb-2">Duration</div>
              </div>
              {points1.slice(4).map((point, index) => (
                <div key={index} className="flex w-full justify-between">
                  <div className="text-[#666666] bg-white py-2 px-2 text-[16px] w-full border-b-2 border-l-2 border-[#b7bcaf]">
                    {index + 5}. {point}
                  </div>
                  <div className="text-[#666666] ml-[3px] bg-white py-2 text-[16px] px-8 border-b-2 border-[#b7bcaf]">100g </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#ECFAD3] mt-4 p-4 rounded-lg">
          <div className="font-[700] text[25px] mb-4">Advice</div>
          <p className=" bg-white p-4 rounded-lg  font-[400] text-[#666666] text-[16px] pb-[50px]">
            Lorem ipsum dolor sit amet consectetur. Volutpat facilisi porta
            phasellus tempor. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Alias, nulla illo nostrum asperiores voluptate odit, illum
            eaque harum, placeat quas eius. Eaque ipsum enim in, consequuntur
            placeat quae unde pariatur veritatis fugit iste nam ipsa, illum
            temporibus, id quasi ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur maiores fuga aspernatur facilis ipsa saepe totam sequi deserunt magnam consequuntur!
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex gap-4">
          <div className="w-3/4">
            <div className="flex justify-between items-center border-b-2 border-gray-300 pb-2 mb-2">
              <div className="font-bold text-[20px] lh-27 text-[#222222]">HEALTHY GROCERY LIST</div>
              <select className="border p-2 rounded text-[#666666] text-[16px]">
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="flex justify-between h-[60px] items-center bg-[#EEFFF5] px-4 my-[8px] ">
              <span className="text-[18px] lh-25 font-[600]">🍎 Fruits:</span>
              <span className="text-[18px] lh-25 font-[400]">1000 Grams</span>
            </div>
            <div className="flex justify-between h-[60px] items-center bg-[#EEFFF5] px-4 my-[8px]">
              <span className="text-[18px] lh-25 font-[600]">🍅 Vegetables:</span>
              <span className="text-[18px] lh-25 font-[400]">500 Grams</span>
            </div>
            <div className="flex justify-between h-[60px] items-center bg-[#EEFFF5] px-4 my-[8px]">
              <span className="text-[18px] lh-25 font-[600]">🌾 Millets:</span>
              <span className="text-[18px] lh-25 font-[400]">As Needed</span>
            </div>
            <div className="flex justify-between h-[60px] items-center bg-[#EEFFF5] px-4 my-[8px]">
              <span className="text-[18px] lh-25 font-[600]">🥥 Coconut Water:</span>
              <span className="text-[18px] lh-25 font-[400]">As Needed</span>
            </div>
            <div className="flex justify-between h-[60px] items-center bg-[#EEFFF5] px-4 my-[8px]">
              <span className="text-[18px] lh-25 font-[600]">
                🥬 Sprouts / Green Leaves:
              </span>
              <span className="text-[18px] lh-25 font-[400]">100 Grams</span>
            </div>
            <div className="flex justify-between h-[60px] items-center bg-[#EEFFF5] px-4 my-[8px]">
              <span className="text-[18px] lh-25 font-[600]">🌰 Dry Fruits:</span>
              <span className="text-[18px] lh-25 font-[400]">100 Grams</span>
            </div>
            <div className="flex justify-between h-[60px] items-center bg-[#EEFFF5] px-4 my-[8px]">
              <span className="text-[18px] lh-25 font-[600]">🍵 Hunza Tea:</span>
              <span className="text-[18px] lh-25 font-[400]">As Needed</span>
            </div>
          </div>
          <div>
            <img
              className="w-[370px] h-[525px] pt-[50px]"
              src={Frame}
              alt="Doctor"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <button className="mt-4 w-[148px] h-[52px] justify-center bg-[#A6CC39] text-white py-2 rounded-lg">
          BUY NOW
        </button>
      </div>

      <div className="font-[600] text-[20px] lh-27 mt-4">INSTRUCTION</div>
      <div className="bg-gray-100 p-4 mt-4 rounded-lg shadow-md">
        <div className="mt-2">
          <p className="font-[600] text-[18px] lh-25 mb-2">
            Points to note for best benefit of FoodCription:
          </p>
          <div className="grid grid-2">
            <div className="flex justify-center">
              <div className="w-1/2 flex flex-col items-start pr-4 text-[16px] text-[#666666]">
                {points.slice(0, 5).map((point, index) => (
                  <div key={index} className="mb-2">
                    {index + 1}. {point}
                  </div>
                ))}
              </div>
              <div className="w-1/2 flex flex-col items-start pl-4 text-[16px] text-[#666666]">
                {points.slice(5).map((point, index) => (
                  <div key={index} className="mb-2">
                    {index + 6}. {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <p className="font-[600] text-[18px] lh-27">IMPORTANT NOTE:</p>
          <p className="mb-2 text-[16px] text-[#666666]">
            The FoodCription Protocol is inspired and curated from{" "}
            <a href="#" className="text-[#666666] font-bold underline">
              Verified Health Sources
            </a>
            . This is not a replacement for Medical Advice and does not work in
            case of emergency.
          </p>
          <p className="mb-2 text-[16px] text-[#666666]">
            Consult, Discuss the protocol with your Healthcare Professional.
            FoodCription recommends Lifestyle advice Protocol backed by research
            to help address root cause of diseases.
          </p>
          <p className="mb-2 text-[16px] text-[#666666]">
            This advice is not a substitute for professional medical advice,
            diagnosis, or treatment. If you are experiencing a life-threatening
            emergency that requires immediate attention please call 102 or the
            number for your local emergency service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
