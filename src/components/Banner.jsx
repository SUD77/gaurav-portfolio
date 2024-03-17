import bannerImage from "../assets/p1.png";
import bannerBackground from "../assets/banner_wallpaper.svg";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      <div className="w-full flex items-center justify-center text-white">
        {/* For text  */}
        <div className="w-2/3 space-y-2 ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Gourav Kansay</h1>
          <h2 className="text-2xl">I am a CDD Analyst</h2>
          <p className="">
            Passionate Anti-Money Laundering Analyst dedicated to safeguarding
            financial systems. Adept in risk assessment, compliance strategies,
            and investigative techniques. Committed to ensuring regulatory
            adherence and preventing financial crime. Seeking to contribute
            expertise in AML methodologies to protect organizations and uphold
            integrity within the financial sector.
          </p>

          <div className="icons-container flex space-x-5">

            <a className="hover:bg-orange-500 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
            <i class="fa-brands text-4xl fa-linkedin"></i>
            </a>

            <a className="hover:bg-orange-500 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
            <i class="fa-brands text-4xl fa-instagram"></i>
            </a>
          
          
          </div>

          <br />

          <a
            className="text-2xl px-3 py-2 bg-orange-500 rounded-full shadow-lg"
            href="/contact"
          >
            {" "}
            Contact Me
          </a>
        </div>
      </div>

      <div className="w-full flex justify-center">
        {/* Images */}
        <img className="rounded-full my-2 shadow-lg w-50" src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
