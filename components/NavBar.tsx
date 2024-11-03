import React from "react";
interface Iprops {
  class: string;
}

const NavBar = (props: Iprops) => {
  return (
    <div className={props.class}>
      <li>Home</li>
      <li>About</li>
      <li>Blog</li>
      <li>Contact Us</li>
    </div>
  );
};

export default NavBar;
