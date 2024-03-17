import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-16 text-5xl font-bold underline text-center">
          My Expertise
        </h1>

        {/* Box Sections */}

        <div 
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
        }}
        className="box-container items-center flex py-16 ">
          {/* text container */}
          <div className="flex text-white justify-center">
            <div className="w-2/3 text-center space-y-3">
              <h1 className="text-4xl font-bold">Certifications</h1>
              {/* <p>Microsoft Excel 2013 Certification</p> */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                repudiandae, quidem voluptatem pariatur mollitia nisi maiores
                debitis et quis eveniet!
              </p>

              <button className="text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg ">
                Hire Me
              </button>
            </div>
          </div>

          {/* Skills container */}
          <div className="flex justify-center">
            <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap">
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Financial Crimes Investigations
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Regulatory Compliance
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Banking
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Financial crime analysis
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                {" "}
                Fraud prevention
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                AML/KYC
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                HSBC HDPI
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
