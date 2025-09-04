import { Link } from "react-router";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-44 flex items-center px-10 border-white rounded-full uppercase">
        <Link to={"/projects"} className="text-[6vw] mt-6">
          Projects
        </Link>
      </div>
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-44 flex items-center px-10 border-white rounded-full uppercase">
        <Link to={"/agence"} className="text-[6vw] mt-6">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
