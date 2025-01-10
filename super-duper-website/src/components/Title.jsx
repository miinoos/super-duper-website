import logo from "../assets/react.svg";

const Title = () => {
  return (
    <div className="flex-1 flex flex-col relative max-h-screen">
      <div className="absolute bottom-20 left-10 flex items-end w-auto">
        <div className="text-20xl font-medium">
          ME
          <span className="pr-3 pl-3 ">
            <img
              className="overflow-visible inline animate-slow-spin w-[130px] items-center"
              src={logo}
              alt=""
            />
          </span>
          N <br></br> Stack <br></br>Developer
        </div>
        <div className="text-2xl max-w-60 ml-5">
          Skilled in JavaScript and MERN Stack Web Development along with Redis
          and DevOps.
        </div>
      </div>
    </div>
  );
};

export default Title;
