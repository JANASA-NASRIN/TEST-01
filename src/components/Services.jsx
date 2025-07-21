import React from "react";
import icon01 from "../assets/icon01.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";

const Services = () => {
  return (
    <section className="bg-[#FFF7EC] py-20 px-4">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-orange-600 font-bold uppercase mb-2">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-[86px]">Our services for you</h2>
        </div>

        {/* Cards Flex */}
        <div className="flex justify-between gap-6">
          {/* Card */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="w-[400px] h-[500px] bg-white rounded-lg shadow p-8 flex flex-col justify-between"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {item === 1 && <img src={icon01} alt="icon01" className="h-14" />}
                  {item === 2 && <img src={icon2} alt="icon2" className="h-14" />}
                  {item === 3 && <img src={icon3} alt="icon3" className="h-14" />}
                </div>
                <h3 className="font-bold text-lg mb-[32px]">
                  {item === 1 && "Business Services"}
                  {item === 2 && "Statewide Services"}
                  {item === 3 && "Personal Services"}
                </h3>
                <p className="text-gray-500 mb-4 text-sm max-w-[250px] mx-auto text-left">
                  {item === 1 &&
                    "We give you complete reliable delivery for your company. We will take full responsibility of the delivery."}
                  {item === 2 &&
                    "Offering home delivery around the city where your products will be at your doorstep within 48-72 hours."}
                  {item === 3 &&
                    "You can trust us to safely deliver your most sensitive documents to the specific area in a short time."}
                </p>
                <ul className="text-left text-sm mb-4 text-gray-600 ml-[40px]">
                  {item === 1 && (
                    <>
                      <li> <span className="text-orange-600">•</span> Corporate goods</li>
                      <li> <span className="text-orange-600">•</span> Shipment</li>
                      <li> <span className="text-orange-600">•</span> Accoutrements</li>
                    </>
                  )}
                  {item === 2 && (
                    <>
                      <li> <span className="text-orange-600">•</span> Personal items</li>
                      <li> <span className="text-orange-600">•</span> Records</li>
                      <li> <span className="text-orange-600">•</span> Documents</li>
                    </>
                  )}
                  {item === 3 && (
                    <>
                      <li> <span className="text-orange-600">•</span> Gift</li>
                      <li> <span className="text-orange-600">•</span> Package</li>
                      <li> <span className="text-orange-600">•</span> Documents</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="text-center">
                <button
                  className={`border border-orange-600 px-4 py-2 rounded transition font-semibold ${
                    item === 2
                      ? "bg-orange-600 text-white hover:bg-orange-700"
                      : "text-orange-600 hover:bg-orange-600 hover:text-white"
                  }`}
                >
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
