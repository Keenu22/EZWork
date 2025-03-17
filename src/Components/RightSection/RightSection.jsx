import React from "react";
import Translation from "../../Components/Research@4x-1.png";
import Audio from "../../Components/Research@4x-2.png";
import Dataprocesing from "../../Components/Research@4x-3.png";
import Graphics from "../../Components/Research@4x-4.png";
import Pskills from "../../Components/Research@4x-5.png";
import Research from "../../Components/Research@4x.png";
import "./RightSection.css";

const services = [
  { title: "Presentation Design", icon: Pskills },
  { title: "Audio-Visual Production", icon: Audio },
  { title: "Translational Services", icon: Translation },
  { title: "Graphic Design", icon: Graphics },
  { title: "Research & Analytics", icon: Research },
  { title: "Data Processing", icon: Dataprocesing },
];

const RightSection = () => {
  return (
    <section className="rightSection">
      {services.map((service, index) => (
        <div key={index} className="card">
          <div className="iconText">
            <img src={service.icon} alt={service.title} className="icon" />
            <h6>{service.title}</h6>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum.
          </p>
        </div>
      ))}
    </section>
  );
};

export default RightSection;
