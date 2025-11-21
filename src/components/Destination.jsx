import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";

function Destinations() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/destinations").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <section className="px-6 md:px-16 lg:px-20 py-16 md:py-20">

      <p className="text-gray-400 text-lg font-bold text-center">
        Top Selling
      </p>

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 text-center">
        Top Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 mt-14 place-items-center">

        {data.slice(0, 4).map((d) => (
          <div
            key={d.id}
            className="w-full max-w-[260px] bg-white rounded-3xl shadow-xl hover:scale-105 transition overflow-hidden"
          >
           
            <img
              src={d.image}
              className="w-full h-56 hover:cursor-pointer md:h-64 object-cover"
            />

            <div className="p-5">
              <div className="flex justify-between">
                <h3 className="text-lg md:text-xl font-bold">{d.city}</h3>
                <p className="text-md md:text-lg font-bold">{d.price}</p>
              </div>

              <p className="text-gray-500 mt-2 flex items-center gap-2">
                <FaLocationDot className="text-black" />
                {d.duration}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Destinations;
