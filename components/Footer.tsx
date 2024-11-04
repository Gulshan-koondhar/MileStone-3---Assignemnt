import Image from "next/image";
import React from "react";
import Logo from "@/public/Union.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto p-4 md:p-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="flex flex-col gap-4 max-w-80 xl:max-w-96">
              <div>
                <h1 className="font-bold">About</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
              <div>
                <span className="font-semibold">Email:</span>
                <span> info@jstemplate.net</span> <br />
                <span className="font-semibold">Phone:</span>
                <span>880 123 456 789</span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="">
                <h1 className="font-bold mb-4">Quick Links</h1>
                <ul className="flex flex-col gap-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Blog</li>
                  <li>Archieve</li>
                  <li>Author</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold mb-4">Category</h1>
                <ul className="flex flex-col gap-2">
                  <li>Lifestyle</li>
                  <li>Technology</li>
                  <li>Travel</li>
                  <li>Business</li>
                  <li>Economy</li>
                  <li>Sports</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-6 rounded flex flex-col gap-4">
              <h1 className="font-semibold text-xl text-center text-black">
                Weekly Letter
              </h1>
              <p className="text-center text-sm text-black">
                Get blog articles and offers via email
              </p>
              <form action="" className="flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Email"
                  className="ring-1 ring-[#DCDDDF] px-2 py-1 rounded"
                />
                <button className="bg-[#4B6BFB] text-white px-2 py-1 rounded">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div>
            <hr />
            <div className="flex justify-between flex-col md:flex-row gap-4 items-center">
              <div className="flex items-center gap-2">
                <Image
                  src={Logo}
                  alt=""
                  width={36}
                  height={36}
                  className="bg-white rounded-full"
                />
                <div>
                  <h1 className="font-normal text-lg">
                    Meta<span className="font-bold">Blog</span>
                  </h1>
                  <p>© JS Template 2023. All Rights Reserved.</p>
                </div>
              </div>

              <div>
                <ul className="flex gap-4">
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
