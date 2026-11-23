import Home from "./page/Home"
import ScrollExpand from "./components/SroolExpand"
import Footer from "./components/Footer"
import sekolah from "./assets/sekolah.jpg"
import About from "./page/about"


function App() {

  return (
    <>

      <main >
        <div className="bg-black">
          <ScrollExpand
            src={sekolah}
            alt="Product hero"
            title="Welcome"
            scrollHint="Scroll to explore"
            useWindowScroll
          >

            <Home />
          </ScrollExpand>
        </div>
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App