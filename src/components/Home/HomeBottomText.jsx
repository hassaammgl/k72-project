import { Link } from "react-router";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <Link className="text-[6.5vw] uppercase border-2 border-white rounded-full px-6">Projects</Link>
      <Link className="text-[6.5vw] uppercase border-2 border-white rounded-full px-6">Agence</Link>
    </div>
  );
};

export default HomeBottomText;
