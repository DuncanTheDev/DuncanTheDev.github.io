import asset from "../../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Skills.css";

export default function Skill() {
  const frontEnd = [
    { name: "HTML", img: asset.html },
    { name: "CSS", img: asset.css },
    { name: "JavaScript", img: asset.js },
    { name: "React JS", img: asset.react },
  ];

  const backEnd = [
    { name: "PHP", img: asset.php },
    { name: "Laravel", img: asset.laravel },
  ];

  const others = [
    { name: "MySQL", img: asset.mysql },
    { name: "GitHub", img: asset.github },
    { name: "Postman", img: asset.postman },
  ];

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      mirror: true,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div
      id="skills"
      className="min-h-screen w-[90%] md:w-[80%] mx-auto px-4 md:px-8 py-12 flex flex-col justify-center bg-white"
    >
      <div className="text-center mb-12">
        <h1
          className="text-4xl md:text-5xl font-bold text-[#2b2c34]"
          data-aos="fade-down"
        >
          Skills & Technology
        </h1>
      </div>
      <div className="card flex justify-center gap-20">
        <div
          className="card-item bg-[#d1d1e9] rounded-2xl p-10 w-70 shadow-lg"
          data-aos="fade-right"
        >
          <h4 className="text-center text-2xl font-semibold mb-6 text-[#2b2c34]">
            Front-end
          </h4>
          <div className="card-context grid grid-cols-2 gap-6 justify-items-center ">
            {frontEnd.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={tech.img} alt={tech.name} className="w-16 h-16" />
                <p className="mt-2 text-sm text-[#2b2c34]">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="card-item bg-[#d1d1e9] rounded-2xl p-10 w-70 shadow-lg"
          data-aos="fade-up"
        >
          <h4 className="text-center text-2xl font-semibold mb-6 text-[#2b2c34]">
            Back-end
          </h4>
          <div className="card-context grid grid-cols-2 gap-6 justify-items-center">
            {backEnd.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={tech.img} alt={tech.name} className="w-16 h-16" />
                <p className="mt-2 text-sm text-[#2b2c34]">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="card-item bg-[#d1d1e9] rounded-2xl p-10 w-70 shadow-lg"
          data-aos="fade-left"
        >
          <h4 className="text-center text-2xl font-semibold mb-6 text-[#2b2c34]">
            Others
          </h4>
          <div className="card-context grid grid-cols-2 gap-6 justify-items-center ">
            {others.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={tech.img} alt={tech.name} className="w-16 h-16" />
                <p className="mt-2 text-sm text-[#2b2c34]">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
