import Link from "next/link";
import React from "react";
interface Iprops {
  class: string;
}

const NavBar = (props: Iprops) => {
  return (
    <div className={props.class}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact US</Link>
    </div>
  );
};

export default NavBar;
