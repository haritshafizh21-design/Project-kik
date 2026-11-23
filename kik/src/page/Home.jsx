import NavBar from "../components/Navbar"

function Home() {
    return (
        
        <div className='absolute inset-0 bg-linear-to-r from-indigo-950 via-indigo-950/40 to-transparent max-md:bg-indigo-950/50     h-screen '>
            <NavBar/>
            <div className='p-8 flex flex-col gap-4 mt-26 max-md:mt-46' >
                <div className='bg-violet-700 text-white w-1/6 max-md:w-1/2 rounded-2xl text-center'>
                    <p>
                        selamat datang
                    </p>
                </div>
                <div className='w-1/2 max-md:w-full'>
                    <h2 className='text-white  text-5xl max-md:text-3xl font-ptc font-bold'>
                        SMK NEGERI 5 TELKOM Banda Aceh
                    </h2>
                </div>
                <div className='text-white w-1/3 max-md:w-full'>
                    <p className='font-ptc'>
                        Mencetak generasi kompeten, mandiri, kreatif, dan siap menghadapi masa depan
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home