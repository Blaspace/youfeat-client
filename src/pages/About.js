import React, { useRef } from "react";
import Intro from "./About/Intro";
import OurStory from "./About/OurStory";
import Mission from "./About/Mission";
import Offer from "./About/Offer";
import WyChooseUs from "./About/WyChooseUs";
import Community from "./About/Community";
import CallToAction from "./About/CallToAction";
import HowItWorks from "./About/HowItWorks";
import Partnership from "./About/Partnership";
import Sponsorship from "./About/Sponsorship";
import Advartise from "./About/Advartise";
import { IoIosArrowDropdown } from "react-icons/io";

function About() {
  const intro = useRef();
  const introi = useRef();
  const ourstory = useRef();
  const ourstoryi = useRef();
  const mission = useRef();
  const missioni = useRef();
  const offer = useRef();
  const offeri = useRef();
  const whychooseus = useRef();
  const whychooseusi = useRef();
  const community = useRef();
  const communityi = useRef();
  const calltoaction = useRef();
  const calltoactioni = useRef();
  const how = useRef();
  const howi = useRef();
  const partnership = useRef();
  const partnershipi = useRef();
  const sponsorship = useRef();
  const sponsorshipi = useRef();
  const advartise = useRef();
  const advartisei = useRef();

  const handletoggle = (e, i) => {
    if (e.current.style.display === "none") {
      e.current.style.display = "block";
      i.current.style.transform = "rotate(180deg)";
    } else {
      e.current.style.display = "none";
      i.current.style.transform = "rotate(0deg)";
    }
  };
  return (
    <div className="about">
      <ul>
        <div>
          <li
            onClick={() => handletoggle(intro, introi)}
            className="about-action">
            <span>Introduction</span>
            <span ref={introi}>
              <IoIosArrowDropdown size={30} />
            </span>
          </li>
          <Intro intro={intro} />
        </div>
        <div>
          <li
            className="about-action"
            onClick={() => handletoggle(ourstory, ourstoryi)}>
            <span>Our Story</span>
            <span ref={ourstoryi}>
              <IoIosArrowDropdown size={30} />
            </span>
          </li>
          <div>
            <OurStory ourstory={ourstory} />
          </div>
        </div>
        <div>
          <li
            className="about-action"
            onClick={() => handletoggle(mission, missioni)}>
            <span> Our Mission and Values</span>
            <span ref={missioni}>
              <IoIosArrowDropdown size={30} />
            </span>
          </li>
          <div>
            <Mission mission={mission} />
          </div>
        </div>
        <div>
          <li
            className="about-action"
            onClick={() => handletoggle(offer, offeri)}>
            <span>What We Offer</span>
            <span ref={offeri}>
              <IoIosArrowDropdown size={30} />
            </span>
          </li>
          <div>
            <Offer offer={offer} />
          </div>
        </div>
        <div>
          <li
            className="about-action"
            onClick={() => handletoggle(whychooseus, whychooseusi)}>
            <span>Why Choose Us</span>
            <span ref={whychooseusi}>
              <IoIosArrowDropdown size={30} />
            </span>
          </li>
          <div>
            <WyChooseUs whychooseus={whychooseus} />
          </div>
        </div>
        <div>
          <li
            className="about-action"
            onClick={() => handletoggle(community, communityi)}>
            <span>Community Engagement</span>
            <span ref={communityi}>
              <IoIosArrowDropdown size={30} />
            </span>
          </li>
          <div>
            <Community community={community} />
          </div>
        </div>
        <div>
          <li
            className="about-action"
            onClick={() => handletoggle(calltoaction, calltoactioni)}>
            <span>Call to Action</span>
            <span ref={calltoactioni}>
              <IoIosArrowDropdown size={30} />
            </span>
          </li>
          <div>
            <CallToAction calltoaction={calltoaction} />
          </div>
        </div>
        <div>
          <li className="about-action" onClick={() => handletoggle(how, howi)}>
            <span>How it Works</span>
            <span ref={howi}>
              <IoIosArrowDropdown size={30} />
            </span>
          </li>
          <div>
            <HowItWorks how={how} />
          </div>
        </div>
        <div>
          <li
            className="about-action"
            onClick={() => handletoggle(partnership, partnershipi)}>
            <span>Partnership Call to Action</span>
            <span ref={partnershipi}>
              <IoIosArrowDropdown size={30} />
            </span>
          </li>
          <div>
            <Partnership partnership={partnership} />
          </div>
        </div>
        <div>
          <li
            className="about-action"
            onClick={() => handletoggle(sponsorship, sponsorshipi)}>
            <span>Sponsorship Call to Action</span>
            <span ref={sponsorshipi}>
              <IoIosArrowDropdown size={30} />
            </span>
          </li>
          <div>
            <Sponsorship sponsorship={sponsorship} />
          </div>
        </div>
        <div>
          <li
            className="about-action"
            onClick={() => handletoggle(advartise, advartisei)}>
            <span>Advartise With Us</span>
            <span ref={advartisei}>
              <IoIosArrowDropdown size={30} />
            </span>
          </li>
          <div>
            <Advartise advartise={advartise} />
          </div>
        </div>
      </ul>
    </div>
  );
}

export default About;
