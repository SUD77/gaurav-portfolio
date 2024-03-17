import { useState } from "react";
import bannerImage from "../assets/p2.png";

const About = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({
    image: bannerImage,
    title: "Analyst",
    desc1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta, tempore adipisci deserunt labore dolorem ipsam iusto incidunt voluptates atque.`,
    desc2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam repudiandae cupiditate dignissimos tempore amet corrupti, voluptatem eos distinctio laborum alias! Voluptates tempore sed quidem at quas quod provident labore?`,
    actionButton:{
      title:"Read More...",
      link:'/readmore'
    }
  });

  return (
    <>
      <div className="main-container bg-gray-100 py-16">
        <h1 className="text-center pb-16 text-5xl font-bold underline">
          About Me
        </h1>

        <div className="flex items-center">
          {/* Image Container */}
          <div className="w-full flex justify-center">
            <img
              className="w-fit rounded-full"
              src={data.image}
              alt="gourav-kansay"
            />
          </div>

          {/* text container */}
          <div className="w-full flex justify-center">
            <div className="space-y-5 w-2/3">
              <h1 className="text-5xl  font-semibold">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 text-xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
