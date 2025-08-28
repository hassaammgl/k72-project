import heroVideoSrc from "../../assets/hero.mp4";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video className="h-full w-full object-cover" autoPlay loop muted src={heroVideoSrc}></video>
    </div>
  );
};

export default Video;
