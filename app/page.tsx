"use client";
import React, { useEffect } from "react";
import Image from "next/image";
const items = [
  {
    id: 1,
    name: "Home",
    src: "/images/1.jpg",
  },
  {
    id: 2,
    name: "About",
    src: "/images/2.jpg",
  },
  {
    id: 3,
    name: "Services",
    src: "/images/1.jpg",
  },
  {
    id: 4,
    name: "Portfolio",
    src: "/images/4.jpg",
  },
  {
    id: 5,
    name: "Team",
    src: "/images/5.jpg",
  },
  {
    id: 6,
    name: "Contact",
    src: "/images/1.jpg",
  },
];
const Home = () => {
  // Update the cursor position on mouse move
  const handleMouseMove = (e: MouseEvent) => {
    const pos = window.document.documentElement;
    pos.style.setProperty("--x", e.clientX + "px");
    pos.style.setProperty("--y", e.clientY + "px");
  };

  // Add mousemove event listener on component mount
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary cursor-none">
      <ul className="[&:hover_li_a]:opacity-15 [&_li_a:hover]:opacity-100 ">
        {items.map((item) => (
          <li
            key={item.id}
            className="[&:hover~.cursor]:w-[70vw] [&:hover~.cursor]:h-[70vw] [&:hover~.cursor]:border-2 [&:hover~.cursor:after]:scale-100 [&:hover~.cursor:after]:opacity-100"
          >
            <a
              href="#"
              data-text={item.name}
              className="text-white text-5xl font-bold no-underline  hover:cursor-none hover:after:opacity-100 group transition duration-500 after:content-[attr(data-text)] after:absolute after:opacity-0 after:top-[--y] after:left-[--x] after:text-transparent after:z-20 after:-translate-x-1/2 after:-translate-y-1/2  after:text-[18vw] after:pointer-events-none after:stroke-text"
            >
              <Image
                width={250}
                height={300}
                src={item.src}
                className="absolute z-10 top-[--y] left-[--x] pointer-events-none  opacity-0 transform scale-0 -translate-x-1/2 -translate-y-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100 group-hover:scale-100  transition-all duration-300"
                alt={item.name}
              />
              <span className="relative z-30">{item.name}</span>
            </a>
          </li>
        ))}

        <div
          className="flex items-center justify-center absolute top-[--y] left-[--x] transform -translate-x-1/2 -translate-y-1/2 cursor w-10 h-10 bg-transparent pointer-events-none z-[10000] border-4 border-[#2efc72] rounded-full after:content-[''] after:absolute  after:w-6 after:h-6 after:rounded-full after:transform after:scale-0 after:bg-[#2efc72] after:border-4 after:border-[#142329] after:opacity-0"
          style={{
            transition: "width 0.25s, height 0.25s",
          }}
        />
      </ul>
    </div>
  );
};

export default Home;
