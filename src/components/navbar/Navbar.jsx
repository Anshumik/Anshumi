import "./navbar.scss";
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
 
export const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar*/}
        <Sidebar></Sidebar>
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}} 
            transition={{duration:0.5}}
            >
              A N S U H M I
            </motion.span>
            <div className="social">
                <a href="#">
                  <img src="/linkedin.png"></img>
                </a>
                <a href="https://github.com/Anshumik">
                  <img src="/github.png"></img>
                </a>
                <a href="#">
                  <img src="/gmail.png"></img>
                </a>
                <a href="#">
                  <img src="/linkedin.png"></img>
                </a>
            </div>        
        </div>
    </div>
  );
};
