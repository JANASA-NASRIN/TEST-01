import React from "react";
import video from "../assets/video.png";
import yticon from "../assets/yticon.png";

const Video = () => {
  return (
    <section className="bg-[#FFF7EC] py-20">
      <div className="relative rounded overflow-hidden max-w-[1320px] mx-auto px-4">
        <img
          src={video}
          alt="Video"
          className="w-full rounded"
        />
        <button
          className="absolute inset-0 flex items-center justify-center mb-[19px]"
          onClick={() => alert("Open modal video")}
        >
          <div className=" flex items-center justify-center ">
            <img src={yticon} alt="yticon"  />
          </div>
        </button>
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center text-white">
          <p className="text-orange-600 font-bold uppercase mb-2">
            Fastest Delivery
          </p>
          <p className="text-sm max-w-xs">
            You can get your valuable item in the fastest period of time with
            safety. Because your emergency is our first priority.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Video;
