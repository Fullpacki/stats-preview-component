import ImgHeader from "../src/images/image-header-desktop.jpg";

function StatsCard() {
  return (
    <div className="flex flex-col gap-8 pb-8 lg:pb-0 rounded-xl rounded-t-xl bg-[#1c1938] shadow-xl max-w-sm lg:flex-row-reverse lg:max-w-5xl">
      {/*Image Header*/}
      <div class="relative rounded-t-xl overflow-hidden lg:rounded-none lg:rounded-r-xl">
        <img
          class="w-full"
          src={ImgHeader}
          alt="Picture of a group of womens who seems to enjoy working"
        />
        <div class="absolute inset-0 bg-[#964eba]/80 mix-blend-multiply"></div>
      </div>
      {/*Image Header*/}
      {/* Main */}
      <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-6 flex flex-col gap-6">
        {/* Text content */}
        <div className="text-center px-6 flex flex-col gap-5">
          <div>
            <h1 className="text-3xl text-white font-semibold">
              Get <span className="text-[#aa5cdc]">insights</span> that help
              your business grow.
            </h1>
          </div>
          <div className="text-[#acabb9]">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </div>
        </div>
        {/* Text content */}
        {/* Statistics */}
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-center">
          <div className="flex flex-col text-center gap-2">
            <div className="text-2xl font-semibold text-white">10k+</div>
            <div className="text-sm text-[#acabb9] font-medium tracking-widest">
              COMPANIES
            </div>
          </div>
          <div className="flex flex-col text-center gap-2">
            <div className="text-2xl font-semibold text-white">314</div>
            <div className="text-sm text-[#acabb9] font-medium tracking-widest">
              TEMPLATES
            </div>
          </div>
          <div className="flex flex-col text-center gap-2 font-medium tracking-widest">
            <div className="text-2xl font-semibold text-white">12M+</div>
            <div className="text-sm text-[#acabb9]">QUERIES</div>
          </div>
        </div>
        {/* Statistics */}
      </div>
      {/* Main */}
    </div>
  );
}

export default StatsCard;
