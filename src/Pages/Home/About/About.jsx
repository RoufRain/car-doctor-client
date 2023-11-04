import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className=" hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img src={person} className="lg:w-3/4 rounded-lg shadow-2xl " />
          <img
            src={parts}
            className="absolute right-12 top-1/2 w-1/2 rounded-lg shadow-2xl border-8 border-white "
          />
        </div>
        <div className="w-1/2 space-y-5">
          <p className="text-[#FF3811] font-bold text-xl">About Us</p>
          <h1 className="text-4xl font-bold text-[#151515] ">
            We are qualified
            <br /> & of experience <br /> in this field!
          </h1>
          <p className="py-6 text-[#737373] font-normal text-base">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-[#737373] font-normal text-base">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="p-3 bg-[#FF3811] text-white ">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
