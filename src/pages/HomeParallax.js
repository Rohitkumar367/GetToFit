import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
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
                <div>
                    <HeroBanner/>
                </div>
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
                    // border: "5px solid green"
                }}
            >
                <Navbar/>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0}
                style={{
                    // top: "50vw",
                    backgroundColor: "#FF2625"
                }}
            >
            </ParallaxLayer>

        </Parallax>

    </div>
    )
}

export default HomeParallax
