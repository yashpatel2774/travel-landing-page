function Steps() {
  const steps = [
    {
      icon: "https://img.icons8.com/ios-filled/100/compass.png",
      title: "Choose Destination",
      desc: "Choose your favorite place from our top destinations.",
    },
    {
      icon: "https://img.icons8.com/ios-filled/100/wallet.png",
      title: "Make Payment",
      desc: "Pay securely and confirm your booking instantly.",
    },
    {
      icon: "https://img.icons8.com/ios-filled/100/airport.png",
      title: "Reach Airport on Selected Date",
      desc: "Just arrive at the airport and enjoy your trip!",
    },
  ];

  return (
    <section className="px-6 sm:px-10 md:px-20 py-16 sm:py-20 md:py-24 flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-24">

      <div className="flex-1 text-center md:text-left">
        <p className="text-[#5E6282] font-semibold tracking-wide text-sm sm:text-lg">
          EASY AND FAST
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-[50px] font-bold leading-snug sm:leading-tight md:leading-[1.2] text-[#14183E] mt-2">
          Book Your Next Trip
          <br />
          In 3 Easy Steps
        </h2>

        <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-100 flex items-center justify-center shadow-md">
                <img src={step.icon} className="w-8 sm:w-10" alt={step.title} />
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#14183E]">
                  {step.title}
                </h3>
                <p className="text-[#5E6282] mt-1 sm:mt-2 leading-relaxed w-full sm:w-[85%] text-sm sm:text-base">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 relative mt-12 md:mt-0 flex justify-center md:justify-end">

        {/* Card Part*/}
        <div className="bg-white rounded-[30px] shadow-2xl p-4 sm:p-6 md:p-6 w-full max-w-[350px] sm:max-w-[400px] mx-auto">
          <img
            src="https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZWNlfGVufDB8fDB8fHww"
            className="w-full h-40 sm:h-48 object-cover rounded-2xl"
            alt="Trip To Greece"
          />

          <h3 className="text-[20px] sm:text-[22px] font-bold text-[#080809] mt-3 sm:mt-4">
            Trip To Greece
          </h3>

          <p className="text-[#84829A] text-[14px] sm:text-[16px] mt-1 sm:mt-2">
            14–29 June | by Robbin Joseph
          </p>

          <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full grid place-items-center text-sm sm:text-base">🏖️</div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full grid place-items-center text-sm sm:text-base">✈️</div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full grid place-items-center text-sm sm:text-base">🏛️</div>
          </div>

          <div className="flex justify-between items-center mt-3 sm:mt-5">
            <p className="text-[#84829A] text-sm sm:text-base">24 people going</p>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#F15A2B] rounded-full grid place-items-center text-white text-sm sm:text-base">
              ❤️
            </div>
          </div>
        </div>

        {/* NOTIFICATION */}
        <div className="absolute right-2 sm:right-5 top-48 sm:top-60 bg-white shadow-xl rounded-2xl p-3 sm:p-4 w-[180px] sm:w-[200px]">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              alt="Ongoing Trip"
            />
            <div>
              <p className="text-[#84829A] text-xs sm:text-sm">Ongoing</p>
              <p className="font-bold text-[#080809] text-sm sm:text-base">Trip to Rome</p>
            </div>
          </div>

          <p className="text-[#84829A] text-xs sm:text-sm mt-2 sm:mt-3">40% completed</p>

          <div className="w-full h-2 bg-gray-200 rounded-full mt-1 sm:mt-2">
            <div className="h-2 bg-[#8A79DF] rounded-full w-[40%]"></div>
          </div>
        </div>

        <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-32 sm:w-40 h-32 sm:h-40 bg-purple-300 rounded-3xl blur-3xl opacity-40"></div>
      </div>
    </section>
  );
}

export default Steps;
