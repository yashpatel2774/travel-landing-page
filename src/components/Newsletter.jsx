import React, { useState } from "react";
import axios from "axios";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (!email.includes("@")) return alert("Invalid Email");

    axios.post("http://localhost:4000/subscribers", { email });
    setEmail("");
    setDone(true);
  }

  return (
    <section className="px-6 md:px-16 lg:px-20 py-16 md:py-20">
      <div className="relative bg-blue-50 p-8 md:p-12 lg:p-14 rounded-tl-4xl shadow-lg text-center flex flex-col items-center">

        <img
          src="https://img.icons8.com/ios-filled/100/000000/paper-plane.png"
          alt="send-icon"
          className="absolute -top-5 -right-5 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full p-2 shadow-lg"
        />

        <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-500 font-bold leading-snug">
          Subscribe to get information, latest news and other
        </h3>
        <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-500 font-bold mt-2 md:mt-3 leading-snug">
          interesting offers about Jadoo
        </h3>

        <form
          className="mt-6 md:mt-8 flex flex-col md:flex-row gap-4 justify-center w-full max-w-xl"
          onSubmit={submit}
        >

          <div className="relative w-full md:w-2/3">
            

            <input
              className="p-4 md:p-5 pl-18 w-full bg-white rounded-xl text-sm md:text-base shadow-sm"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <button className="bg-orange-300 text-white py-3 md:py-4 px-10 rounded-xl text-base md:text-lg shadow-lg hover:bg-orange-400 transition">
            Subscribe
          </button>
        </form>

        {done && (
          <p className="text-green-600 mt-4 text-sm md:text-base">
            Subscribed Successfully ✔
          </p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;