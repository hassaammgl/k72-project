import { useRef, Fragment } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const imgArray = [
  "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/SebR_640X960-640x960.jpg",
  "https://k72.ca/uploads/teamMembers/joel_640X960_3-640x960.jpg",
  "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
];

const Agence = () => {
  const imgDivRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        markers: true,
        start: "top 28%",
        end: "top -70%",
        pin: true,
        onUpdate: (self) => {
          let imgIndex;
          if (self.progress < 1) {
            imgIndex = Math.floor(self.progress * imgArray.length);
          } else {
            imgIndex = imgArray.length - 1;
          }
          imgRef.current.src = imgArray[imgIndex];
        },
      },
    });
  });

  return (
    <Fragment>
      <div className="section-1">
        <div
          ref={imgDivRef}
          className="absolute h-[20vw] overflow-hidden rounded-3xl w-[15vw] top-64 left-[30vw]"
        >
          <img
            src="https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg"
            alt=""
            ref={imgRef}
            className="h-full object-cover w-full"
          />
        </div>
        <div className="relative font-[font2]">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              SEVEN7Y
              <br />
              TWO
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-6xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              We're inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section-2 h-screen"></div>
    </Fragment>
  );
};

export default Agence;
