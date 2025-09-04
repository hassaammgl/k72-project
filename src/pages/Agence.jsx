import { useRef, Fragment } from "react";

const Agence = () => {

  

  return (
    <Fragment>
      <div className="section-1">
        <div className="absolute h-[20vw] overflow-hidden rounded-3xl w-[15vw] top-64 left-[30vw]">
          <img
            src="https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg"
            alt=""
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
