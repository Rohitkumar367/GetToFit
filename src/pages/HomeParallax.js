import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import backgroundCutting from '../assets/images/backgroundCutting.png'
import './HomeParallax.css'

const HomeParallax = () => {

    return (
    <div >
        <Parallax pages={2} style={{display: "block"}}>

            <ParallaxLayer offset={0} speed={0}
                style={{
                    height: "100vh",
                    backgroundImage: "linear-gradient(to top, #ffe7e2, #ffffff)",
                    // border: "5px solid green"
                }}
            >
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.3}
                style={{
                    backgroundColor: "transparent",
                    // border: "5px solid green"
                }}
            >
                <p className="exercise-text">
                    Exercise
                </p>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0}
                style={{
                    backgroundColor: "transparent",
                    width: "100vw",
                    height: "10vw",
                    zIndex: 1,
                    // border: "5px solid green"
                }}
            >
                <Navbar/>
            </ParallaxLayer>

            <ParallaxLayer offset={0.76} speed={0.05}
                style={{
                    backgroundImage: `url(${backgroundCutting})`,
                    backgroundSize: 'contain',
                    opacity: 0.4,
                }}
            >
            </ParallaxLayer>

            <ParallaxLayer offset={0.8} speed={0.1}
                style={{
                    backgroundImage: `url(${backgroundCutting})`,
                    backgroundSize: 'contain',
                }}
            >
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

            <ParallaxLayer offset={1} speed={0}
                style={{
                    backgroundColor: "#FF2625"
                }}
            >
                sdf
            </ParallaxLayer>

        </Parallax>

    </div>
    )
}

export default HomeParallax
