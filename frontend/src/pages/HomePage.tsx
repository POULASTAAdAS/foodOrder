import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col pag-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeway today
        </h1>

        <span className="text-xl">Food is just one click away!</span>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />

        <div className="flex flex-col itmes-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeway event faster!
          </span>

          <span>
            Download the LetsEat App for faster ordering and personalised
            recommendations
          </span>

          <img
            src={appDownloadImage}
            className="flex flex-col justify-center ms-24 me-24"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
