import Link from "next/link";
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CursorContext } from '../../lib/context';


const MotionLink = motion(Link);
const animLink = {
    backgroundColor: ["#121212", "rgb(143, 102, 163)", "rgb(54, 77, 50)", "#453d77", "rgb(143, 102, 163)", "#121212"],
    transition: { duration: 1, repeat: Infinity }
}

export function Logo() {

    const { setHoveringLogo } = useContext(CursorContext);
    const handleMouseEnter = () => {
        setHoveringLogo(true);
    };
    const handleMouseLeave = () => {
        setHoveringLogo(false);
    };

    return (
        <div className="flex items-center justify-center mt-2">
            <CursorContext.Consumer>
                {({ isHoveringLogo }) => (
                    <MotionLink
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        aria-label=" Beauty Zone " href='/'
                        className={`${isHoveringLogo ? "bg-dark dark:bg-light" : "dark:bg-dark"
                            } w-16 h-16 bg-dark text-light border-2 border-solid border-transparent dark:border-light flex justify-center items-center rounded-full`}
                        whileHover={animLink}
                    >
                        <LogoImage size={44} color="white" />
                    </MotionLink>
                )}
            </CursorContext.Consumer>

        </div>
    )
}


export function LogoImage({ className, size, color }) {
    const props = {
        className,
    };
    if (size) {
        props.width = size;
        props.height = size;
    }
    if (color) {
        props.fill = color;
    }

    return (
        
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 46 24"
            {...props}
        >





<text x="1" y="12" className="text-xl font-semibold text-gray-900 dark:text-white" > ZIRI</text>


<text x="10" y="28" className="text-sm font-normal text-gray-900 dark:text-white" > SKIN</text>



           
        </svg>
        
    )
}

LogoImage.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    className: PropTypes.string,
};







