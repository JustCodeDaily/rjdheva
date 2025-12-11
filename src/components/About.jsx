const About = () => {
  return (
    <section id="about" className="section-about relative py-[50px] max-[991px]:py-[40px]">
      <div className="container flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px]">
        <div className="flex flex-wrap w-full mb-[-30px]">
          <div className="w-full px-[12px]">
            <div className="bix-banner mb-[30px] flex justify-center text-center">
              <h4 className="font-montserrat text-[36px] font-bold text-[#111a24]">
                About <span className="text-[#f41a4a]">Me</span>
              </h4>
            </div>
            <div className="bix-banner-line mb-[110px]">
              <span className="inner-border relative flex justify-center" />
            </div>
          </div>

          <div className="max-[1199px]:order-2 min-[1200px]:w-[33.33%] min-[992px]:w-[50%] w-full px-[12px] mb-[30px]">
            <div className="bix-about-contact h-full flex flex-col justify-center">
              <h5 className="mb-[24px] font-montserrat text-[37px] font-bold text-[#fff] opacity-[0.5]">
                Creativity bleeds from the pen of inspiration.
              </h5>
              <p className="mb-[16px] font-montserrat text-[14px] text-[#495461] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="about-name">
                <h6 className="mb-[0] font-montserrat text-[16px] text-[#111a24] font-bold">Sr. Developer</h6>
                <p className="text-[14px] text-[#555] mb-[16px] font-montserrat">Jenny B. Brown</p>
                <img src="/assets/img/about/sign.png" alt="sign" className="w-[120px]" />
              </div>
            </div>
          </div>

          <div className="max-[1199px]:order-1 min-[1200px]:w-[33.33%] min-[992px]:w-[100%] w-full px-[12px] mb-[30px]">
            <div className="bix-about-img border-[1px] border-solid border-[#111a24] p-[15px] rounded-[200px]">
              <img src="/assets/img/about/about.jpg" alt="about" className="w-full rounded-[200px]" />
              <div className="z-[1] h-[130px] w-[130px] absolute bottom-[0] right-[0] bg-[#000000cc] rounded-[50%] flex items-center justify-center">
                <a href="#about" className="relative text-white">
                  <i className="ri-arrow-right-up-line text-[30px]" />
                </a>
              </div>
            </div>
          </div>

          <div className="max-[1199px]:order-3 min-[1200px]:w-[33.33%] min-[992px]:w-[50%] w-full px-[12px]">
            <div className="bix-skill h-full flex flex-col justify-center">
              <div className="skill-inner-box mb-[24px] p-[20px] rounded-[100px] bg-[#faf1c6]">
                <div className="flex flex-wrap">
                  <svg className="w-[90px] h-full" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="35" fill="none" stroke="#e0e0e0" strokeWidth="2" />
                    <text x="40" y="50" textAnchor="middle" className="text-sm font-semibold">90%</text>
                  </svg>
                  <div className="w-[calc(100%-90px)] p-[10px] flex flex-col justify-center">
                    <h4 className="font-montserrat text-[16px] font-semibold text-[#111a24] mb-[8px]">
                      Frontend <span className="text-[13px] font-medium">(React, Angular)</span>
                    </h4>
                    <p className="font-montserrat text-[13px] leading-[22px] text-[#495461]">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                </div>
              </div>

              <div className="skill-inner-box mb-[24px] p-[20px] rounded-[100px] bg-[#ffd5df]">
                <div className="flex flex-wrap">
                  <svg className="w-[90px] h-full" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="35" fill="none" stroke="#e0e0e0" strokeWidth="2" />
                    <text x="40" y="50" textAnchor="middle" className="text-sm font-semibold">80%</text>
                  </svg>
                  <div className="w-[calc(100%-90px)] p-[10px] flex flex-col justify-center">
                    <h4 className="font-montserrat text-[16px] font-semibold text-[#111a24] mb-[8px]">
                      Backend <span className="text-[13px] font-medium">(PHP, Python)</span>
                    </h4>
                    <p className="font-montserrat text-[13px] leading-[22px] text-[#495461]">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                </div>
              </div>

              <div className="skill-inner-box mb-[24px] p-[20px] rounded-[100px] bg-[#d5f5ff]">
                <div className="flex flex-wrap">
                  <svg className="w-[90px] h-full" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="35" fill="none" stroke="#e0e0e0" strokeWidth="2" />
                    <text x="40" y="50" textAnchor="middle" className="text-sm font-semibold">85%</text>
                  </svg>
                  <div className="w-[calc(100%-90px)] p-[10px] flex flex-col justify-center">
                    <h4 className="font-montserrat text-[16px] font-semibold text-[#111a24] mb-[8px]">
                      Graphics <span className="text-[13px] font-medium">(Photoshop, Sketch)</span>
                    </h4>
                    <p className="font-montserrat text-[13px] leading-[22px] text-[#495461]">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
