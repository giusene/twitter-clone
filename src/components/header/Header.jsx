import "./index.css";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import HamburgerMenu from "../hamburgerMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const hamburgerTrigger = () => {
    setShowMenu(!showMenu);

    console.log(showMenu);
  };

  return (
    <div className="Header">
      <div className="Header__up">
        <FiMenu className="Header__hamburger" onClick={hamburgerTrigger} />
        <HamburgerMenu showMenu={showMenu} />
        <p>Home</p>
        <img
          src="https://img.icons8.com/material-rounded/256/sparkling.png"
          alt="sparkling"
        />
      </div>
      <div className="Header__down">
        <img
          className="Header__down--profile"
          src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
          alt="profile"
        />
        <input type="text" placeholder="What's happening?" />
        <img src="https://img.icons8.com/fluency/256/image.png" alt="image" />
        <img src="https://img.icons8.com/arcade/256/gif.png" alt="gif" />
        <img
          src="https://img.icons8.com/fluency/256/combo-chart.png"
          alt="graph"
        />
      </div>
    </div>
  );
};

export default Header;
