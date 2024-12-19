import Image from "next/image";

export default function Home() {
  return (
    <div className="font-roboto">
      {/* Navbar */}
      <section className=" shadow-md flex items-center justify-between py-4 px-8 sticky top-0 z-50">
        navbar
      </section>

      {/* Hero Section */}
      <section className="bg-hero-pattern bg-cover bg-center  flex flex-col items-center justify-center py-24 px-6">
        <div className="hero-section">
          <div className="video">
            <video autoPlay muted loop id="background-video">
              <source
                src="https://static.tradingview.com/static/bundles/lightweight-charts-video.avc1.d2a8feecfb879c75dea0.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="hero-content">
            <h1 className="animate__animated animate__fadeInDown">Welcome to CapiFy</h1>
            <p className="animate__animated animate__fadeInUp">Your Trusted Partner in Financial Growth</p>
            {/* <button className="learn-more-button" onClick={() => location.href = '#Offerings'}>
              <b>Learn More</b>
            </button> */}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className=" py-16 px-10 space-y-6" id="Offerings">
        <div className="parallax-offerings">
          <div className="parallax-offering-content">
            <h2 className="faltu1 text-4xl font-semibold text-center ">Review Our Financial Offerings</h2>
            <p className="faltu2 text-centermb-8">Discover how we can help you reach new financial heights.</p>
            {/* Services Section */}
            <div className="containerr space-y-8 flex justify-center  ">
              <div data-text="Financial Health Quiz" className="glass p-6 rounded-lg shadow-lg">
                <p className="text-center">Evaluate your financial health with our easy-to-use quiz and gain a clear understanding of your strengths and areas for improvement.</p>
              </div>
              <div data-text="Budget Tracker" className="glass p-6 rounded-lg shadow-lg">
                <p className="text-center">Enhance your finances with Budget Bliss—precise tracking, strategic planning, and informed decisions.</p>
              </div>
              <div data-text="Group Finance Manager" className="glass p-6 rounded-lg shadow-lg">
                <p className="text-center">Effortlessly manage group expenses with our Group Finance Manager. Set up groups, track shared costs, and split expenses fairly, all in one place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About Us */}
      <section className=" py-16 px-10">
        <h2 className="text-3xl font-bold text-center mb-8 ">
          About Us
        </h2>

        {/* About Us content */}
        <p>At CapiFy, we bring all your Personal financial needs together in one place. Whether you're tracking
          your
          budget, staying updated with the latest market trends, or seeking personalized investment advice ,
          CapiFy
          has you covered. Our platform features a robust Budget Tracker to keep your finances on track,
          insightful
          Blogs and News to keep you informed, and a rich Resources Section for all your financial planning
          needs.
          Experience seamless financial management and personalized guidance with CapiFy - your ultimate
          partner in
          financial success.</p>
      </section>

      {/* Feedback */}
      <section className=" py-16 px-10">
        <h2 className="text-3xl font-bold text-center mb-8 ">
          Feedback
        </h2>
        {/* Feedback content */}
      </section>

      {/* Footer */}
      <section className=" py-8 px-10">
        <div className="text-center text-sm">footer</div>
      </section>
    </div>
  );
}
