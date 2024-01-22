import "./services.scss"
import { motion, useScroll, useSpring, useTransform  } from "framer-motion";
import { useRef } from "react";

export const Services = () => {

    const items = ["Java", "C", "C++", "HTML", "CSS", "JavaScript", "MongoDB", "React", "NodeJs"];


    return (
       
    // <div className="services">Services</div>
    <motion.div className="services"  initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}>
        <div className="textContainer">
            <h1></h1>
        </div>
        <motion.div className="tileContainer">
            {items.map((item,i) => (
                <motion.div className="tileBox hover-text"
                    key={item}
                    custom={i}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                      }}
                    whileTap={{ scale: 0.9 }}>
                    {item}
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}
export  default Services;