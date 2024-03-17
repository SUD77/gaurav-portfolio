const Service = () => {
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">Experience</h1>

        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className="cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 space-y-4">
            <h1 className="text-4xl">HSBC </h1>
            <h1 className="text-2xl">(CDD Analyst)</h1>
            <p>
              Working as a CDD analyst to analyze the financial and reputation
              risk that can occur in the organization. Analyzing the profiles
              and monitoring the transactions so financial crimes can be
              reduced. Handling the Foreign KYC profiles and analyzing every
              customer as per there KYC. Trained and experienced cross markets
              financial crime and analysed the client data to prevent fraud and
              finance theft for the organisation.
            </p>
          </div>

          <div className="cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <h1 className="text-4xl">
              HDB Financial Services Ltd.
            </h1>
            <h1 className="text-2xl">
             (Management Trainee)
            </h1>
            <p>
              As a management trainee, I learned about the financing of various
              HDB financial services products. It entails dealing with B2B and
              B2C functions, as well as loan inquiries and KYC functions
            </p>
          </div>

          <div className="cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <h1 className="text-4xl">
              Chawla Publications
            </h1>
            <h1 className="text-2xl">
              (Marketing Internship)
            </h1>
            <p>
              Marketing is a very wide role to follow as in Chawla Publication,
              I gained experienced in Marketing with the skills of Consumer
              Attraction. It was a great opportunity for me that I was able to
              do this Internship.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
