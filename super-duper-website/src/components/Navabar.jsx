import logo from "../assets/react.svg";

const Navabar = () => {
  return (
    <div className="h-16 w-ful flex flex-row justify-between text-xl">
      <ul className="gap-10 ml-10 mt-10">
        <li>
          <p>
            Yudhajit Chowdhury{" "}
            <span>
              <img
                className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={logo}
                alt=""
              />
            </span>
          </p>
        </li>
        <li></li>
      </ul>
      <ul className="flex flex-row gap-10 mr-10 mt-10">
        <li>Contact Me</li>
        <li>About Me</li>
        <li>Projects</li>
      </ul>
    </div>
  );
};

export default Navabar;
