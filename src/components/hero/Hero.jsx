import "./hero.scss"
import {motion} from "framer-motion"
const textVariants ={
    initial:{
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        },
    },
};

const sliderVariants ={
    initial:{
        x: 0,
    },
    animate:{
        x: "-520%",
        transition:{
            repeat: Infinity,
            duration: 20,
            repeatType: "mirror",
        },
    },
};

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div 
            className="textContainer" 
            variants={textVariants}
            initial="initial"
            animate="animate"
            >
                <motion.h2 variants={textVariants}>ANSHUMI KANERIA</motion.h2>
                <motion.h1 variants={textVariants}>Web developer and UI Designer</motion.h1> 
                {/* <div className="buttons">
                    <button>See the latest works</button>
                    <button>See the latest works</button>
                </div> */}
                {/* <img src="/scroll.png" alt="" /> */}
            </motion.div>
        </div>
        <motion.div 
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate">
            Eat.Sleep.Code.Repeat.
        </motion.div>
        <div className="imageContainer">
            <img src="/hero2.png" alt="" />
        </div>
    </div>
  )
}
export default Hero