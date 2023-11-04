import image1 from "../../assets/images/banner/1.jpg";
import image2 from "../../assets/images/banner/2.jpg";
import image3 from "../../assets/images/banner/3.jpg";
import image4 from "../../assets/images/banner/4.jpg";
import image5 from "../../assets/images/banner/5.jpg";
import image6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} className="w-full md:h-[600px] rounded-lg" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:top-1/3 top-1/2">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute  right-12 top-4 md:top-1/4 space-y-3 item  max-w-md ">
          <h1 className="text-3xl md:text-6xl font-sans font-bold text-white">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-lg font-sans font-normal text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-4">
            <button className="rounded-xl p-3 text-white bg-[#FF3811]">
              Discover More
            </button>
            <button className="px-3 text-white rounded-xl border">
              Latest Project
            </button>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        {/* text on banner */}
        <div className="absolute left-20 right-5 top-4 md:top-1/3 space-y-3 max-w-md">
          <h1 className="text-3xl md:text-6xl font-sans font-bold text-white">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-lg font-sans font-normal text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-4">
            <button className="rounded-xl p-3 text-white bg-[#FF3811]">
              Discover More
            </button>
            <button className="px-3 text-white rounded-xl border">
              Latest Project
            </button>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        {/* text on banner */}
        <div className="absolute left-20 right-5 top-4 md:top-1/3 space-y-3 max-w-md">
          <h1 className="text-3xl md:text-6xl font-sans font-bold text-white">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-lg font-sans font-normal text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-4">
            <button className="rounded-xl p-3 text-white bg-[#FF3811]">
              Discover More
            </button>
            <button className="px-3 text-white rounded-xl border">
              Latest Project
            </button>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={image5} />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={image6} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
