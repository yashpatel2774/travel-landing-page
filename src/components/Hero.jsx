function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center px-6 sm:px-8 md:px-20 py-16 sm:py-20 md:py-20">
      
      <div className="flex-1 text-center md:text-left">
        <p className="text-orange-500 font-bold mb-2 tracking-wide text-[16px] sm:text-[18px] uppercase">
          Best Destinations Around The World
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-[55px] font-extrabold leading-snug sm:leading-tight md:leading-tight text-black">
          Travel, Enjoy
          <br />
          and Live a New
          <br />
          Full Life
        </h1>
        <p className="text-gray-500 mt-4 sm:mt-6 text-sm sm:text-base md:text-ls max-w-[350px] sm:max-w-[450px] mx-auto md:mx-0">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to men it engrossed listening.
        </p>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mt-6 sm:mt-8 justify-center md:justify-start">
          <button className="bg-orange-500 hover:cursor-pointer text-white px-6 sm:px-8 py-3 rounded-xl text-base sm:text-lg shadow-lg">
            Find Out More
          </button>

          <button className="flex items-center gap-3 text-base sm:text-lg font-semibold">
            <span className="bg-red-500 w-8 h-8 sm:w-10 sm:h-10 rounded-full grid place-items-center text-white shadow-lg">
              ▶
            </span>
            Play Demo
          </button>
        </div>
      </div>

      <div className="flex-1 mt-10 sm:mt-12 md:mt-0 flex justify-center md:justify-end">
        <img
          src="/images/Hero.png"
          alt="Hero Image"
          className="w-full max-w-[350px] sm:max-w-[450px] sm:h-auto md:max-w-[600px] md:h-[500px] object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
