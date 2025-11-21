function Services() {
  const items = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png",
      title: "Calculated Weather",
      desc: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      img: "https://img.icons8.com/ios/500/000000/airport.png",
      title: "Best Flights",
      desc: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      img: "https://img.icons8.com/ios-filled/500/000000/microphone.png",
      title: "Local Events",
      desc: "Barton vanity itself do in it. Preferd to men it engrossed.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3524/3524659.png",
      title: "Customization",
      desc: "We deliver outsourced aviation services for military customers.",
    },
  ];

  return (
    <section className="px-6 sm:px-10 md:px-20 py-16 md:py-20 text-center">
      <p className="text-gray-500 text-base sm:text-lg">CATEGORY</p>
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mt-2">
        We Offer Best Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mt-10 sm:mt-12 md:mt-14">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 shadow-lg hover:cursor-pointer rounded-3xl hover:scale-105 transition-transform border border-gray-100"
          >
            <img src={item.img} className="w-16 sm:w-20 mx-auto" alt={item.title} />
            <h3 className="text-lg sm:text-xl font-bold mt-4 sm:mt-5">{item.title}</h3>
            <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
