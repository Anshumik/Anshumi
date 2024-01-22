import "./projects.scss"
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id:1,
        title: "Inventory Management System",
        img:"./inventory_management.png",
        desc: "Designed a Flutter-based inventory management application in Dart, catering to small-scale businessmen for efficient inventory control.Account login and management functionalities with various banking system-related features.Integrating banking system features and leveraging the Flutter charts library for streamlined business operations.Implemented a Monthly Profit and Loss Analysis. component providing users with valuable insights into their business financials."
    },

    {
        id:2,
        title: "Sorting Algorithm",
        img:"./sorting_algorithm.png",
        desc: "Designed a Flutter-based inventory management application in Dart, catering to small-scale businessmen for efficient inventory control.Account login and management functionalities with various banking system-related features.Integrating banking system features and leveraging the Flutter charts library for streamlined business operations.Implemented a Monthly Profit and Loss Analysis. component providing users with valuable insights into their business financials."
    },

    {
        id:3,
        title: "Internship at Aim Infcorp",
        img:"./internship.png",
        desc: "Designed a Flutter-based inventory management application in Dart, catering to small-scale businessmen for efficient inventory control.Account login and management functionalities with various banking system-related features.Integrating banking system features and leveraging the Flutter charts library for streamlined business operations.Implemented a Monthly Profit and Loss Analysis. component providing users with valuable insights into their business financials."
    },
];

const Single = ( {item} ) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        {/* <button>Live Demo</button> */}
                        <button onClick={}>Source Code</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export const Projects = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id} />
        ))}
        </div>
    );
};
