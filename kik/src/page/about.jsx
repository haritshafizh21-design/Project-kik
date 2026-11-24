import CardTopi from "../components/CardTopi"
import About3 from "../components/About3"
import SchoolStatsBanner from "../components/SchoolStatsBanner"

function About() {
    return (
        <div>
            <div className="flex items-center gap-5  justify-center ">
                <div className="h-0.5 w-22 mt-5  bg-black max-md:hidden"></div>
                <div className="bg-blue-200/80 w-1/6 p-2 mt-7 rounded-3xl max-md:w-1/3">
                    <h2 className="font-inter font-bold text-2xl text-center max-md:text-xs">ABOUT US</h2>
                </div>
                <div className="h-0.5 w-22 mt-5  bg-black max-md:hidden"></div>
            </div>
            <div className=" flex  items-center justify-center">
                <div className="w-120 flex flex-col gap-2.5 m-2.5">
                    <h1 className="text-blue-900 text-center text-5xl font-bold font-inter">Tentang Kami</h1>
                    <p className="font-ptc font-semibold flex flex-col-reverse text-center">Mengenal lebih dekat SMKN 5 Telkom Banda Aceh, sekolah kejuruan yang berkomitmen mencapai generasi unggul</p>
                </div>
            </div>
            <About3 />
            <div className="flex items-center justify-center mt-3 max-md:flex-col ">
               <CardTopi/>
            </div>
        <SchoolStatsBanner/>
        </div>
    )
}

export default About