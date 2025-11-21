import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Destinations from "./components/Destination";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="absolute top-[-150px] right-[-150px] w-[700px] h-[700px] 
               bg-[#FFF1DA] rounded-full blur-[60px] 
               opacity-25 sm:opacity-40 md:opacity-90 z-0"
        ></div>
        <Navbar />
        <Hero />
      </section>

      <Services />
      <Destinations />
      <Steps />
      <Testimonials />
      <Clients />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
