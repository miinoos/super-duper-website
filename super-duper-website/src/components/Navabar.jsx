import logo from "../assets/react.svg";

const Navabar = () => {
  return (
    <div className="z-10 h-16 w-ful flex flex-row justify-between text-xl">
      <ul className="gap-10 ml-10 mt-10">
        <li>
          <p>I'am Yudhajit Chowdhury!</p>
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
