const Hero = () => {
  return (
    <section id="home" className="section-hero h-[800px] mt-[100px] relative pb-[50px] pt-[100px] max-[991px]:h-auto max-[991px]:mt-[95px] max-[991px]:pb-[40px] max-[991px]:pt-[80px]">
      <div className="first-name top-[0] leading-none absolute font-montserrat text-[200px] font-black text-[#fff] opacity-[0.04]">
        Jenny
      </div>
      <div className="last-name bottom-[0] right-[0] absolute font-montserrat text-[200px] font-black text-[#fff] opacity-[0.04]">
        Brown
      </div>

      <div className="flex h-full flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="min-[992px]:w-[50%] w-full px-[12px]">
            <div className="bix-hero-img relative" data-aos="fade-up" data-aos-duration="2000">
              <img src="/assets/img/hero/hero.png" alt="hero" className="w-[calc(100%-300px)] mt-auto mx-auto mb-[50px]" />
            </div>
          </div>

          <div className="min-[992px]:w-[50%] w-full px-[12px]">
            <div className="bix-hero-contact h-full flex flex-col justify-center">
              <h4 className="mb-[8px] font-montserrat text-[35px] font-bold text-[#f41a4a]">
                Hi, I am
              </h4>
              <h1 className="mb-[16px] text-[78px] text-[#111a24] font-bold">
                Jenny Brown
              </h1>
              <p className="font-montserrat text-[27px] font-semibold text-[#111a24]">
                I am a<span className="mx-[5px] text-[#f41a4a]">App Developer</span>
              </p>
              <div className="m-[-10px] pt-[50px] flex flex-wrap">
                <button className="m-[10px] py-[10px] px-[15px] font-montserrat text-[14px] font-semibold bg-[#fff] text-[#111a24] border-[1px] border-[#111a24] rounded-[15px] hover:bg-[#f41a4a]">
                  Download CV
                </button>
                <button className="m-[10px] py-[10px] px-[15px] font-montserrat text-[14px] font-semibold bg-[#fff] text-[#111a24] border-[1px] border-[#111a24] rounded-[15px] hover:bg-[#f41a4a]">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
