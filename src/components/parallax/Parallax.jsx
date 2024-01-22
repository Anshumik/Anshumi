import { useRef } from "react";
import "./parallax.scss";
import {motion, useScroll, useTransform} from "framer-motion";

export const Parallax = ({ type })  => {
  
  const ref = useRef();

  //defining the scroll position on y axis
  const { scrollYProgress } = useScroll({
    target: ref,
    //animation starts when the starting point reaches the top of the page and animation end when end pont reaches the top of the page
    offset: ["start start", "end start"],
  });

  //making variable the make use of function with different value
  const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  
  return (
    <div 
    className="parallax" 

    //reference to a react element (div element)
    ref={ref}
    style={{
      background:
      type === "skills" 
      ? "linear-gradient(180deg, #111132, #0c0c1d)" 
      : "linear-gradient(180deg, #111132, #505064)",
    }}
    >
      <motion.h1 style={{ y: yText}}>
        {type==="skills" ? "What I Know" : "What I Did"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style = {{  y: yBg,
        backgroundImage: `url(${type=== "skills" ? "/planets.png" : "/sun.png"})`
      }}></motion.div>
      <motion.div style={{ x: yBg}} className="stars"></motion.div>
    </div>
  );
};
