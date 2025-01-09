import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import HeroBanner from '../components/HeroBanner'
import backgroundCutting from '../assets/images/backgroundCutting.png'
import cuttingBottom from '../assets/images/cuttingBottom.png'
import './HomeParallax.css'
import ParallaxContent from '../components/ParallaxContent'

const HomeParallax = () => {

    return (
    <div >
        <Parallax pages={2.25} className='parallax-container' style={{display: "block"}}>

            <ParallaxLayer offset={0} speed={0}
                style={{
                    height: "120vh",
                    backgroundImage: "linear-gradient(to top, #ffe7e2, #ffffff)",
                    // border: "5px solid green"
                }}
            ></ParallaxLayer>

            {/* <ParallaxLayer offset={0} speed={-0.2}>
                <div
                    className='border-part-fitnessGirl'
                ></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.1}>
                <div
                    className='full-part-fitnessGirl'
                ></div>
            </ParallaxLayer> */}


            <ParallaxLayer offset={0.05} speed={0.3}
                style={{
                    backgroundColor: "transparent",
                    // border: "5px solid green"
                }}
            >
                <p className="exercise-text">
                    Exercise
                </p>
            </ParallaxLayer>

            <ParallaxLayer offset={0.87} speed={0.05}
                style={{
                    backgroundImage: `url(${backgroundCutting})`,
                    backgroundSize: 'contain',
                    opacity: 0.4,
                }}
            ></ParallaxLayer>

            <ParallaxLayer offset={0.97} speed={0.1}
                style={{
                    backgroundImage: `url(${backgroundCutting})`,
                    backgroundSize: 'contain',
                }}
            ></ParallaxLayer>

            <ParallaxLayer offset={0.93} speed={0.2}
                style={{
                    backgroundImage: `url(${backgroundCutting})`,
                    backgroundSize: 'contain',
                }}
            ></ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.2}
                style={{
                    height: "250vh",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        position:"absolute",
                        bottom: "-4vw",
                        backgroundColor: "transparent",
                        border: '2px solid black',
                        width: "100vw",
                        height: "39vw",
                    }}
                >
                    <img src={cuttingBottom} alt='cutting_image' 
                        style={{
                            width: "100%",
                        }}
                    />
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0}
                style={{
                    height: "100vh",
                    background: "transparent",
                }}
            >
                <div>
                    <HeroBanner/>
                </div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.15}
                style={{
                    top: "115vh",
                    // border: '2px solid yellow',
                    height: "110vh",
                    backgroundColor: "#FF2625"
                }}
            >
                <ParallaxContent/>
            </ParallaxLayer>

        </Parallax>

    </div>
    )
}

export default HomeParallax
