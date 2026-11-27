import Home from "./Home"
import ScrollExpand from "../components/SroolExpand"
import Footer from "../components/Footer"
import sekolah from "../assets/sekolah.jpg"
import About from "./about"


function Beranda({bahu}) {


  return (
    <>
      <main>


        <div className="bg-black">
          <ScrollExpand
            src={sekolah}
            alt="Product hero"
            title="Welcome"
            scrollHint="Scroll to explore"
            useWindowScroll
          >
            <Home  apakek={bahu}/>
          </ScrollExpand>
        </div>


        <div className="bg-white text-black py-10">
          <About />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Beranda