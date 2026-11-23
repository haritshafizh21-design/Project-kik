import sekolah from '../assets/sekolah.jpg'

function About3() {
    return (
        <div className='mt-5 max-md:mt-7 flex max-md:flex-col'>
            <img src={sekolah} alt="" width={630} className='p-5 m-2 h-94 max-md:h-65 rounded-4xl max-md:m-1 ' />
            <div className=' mt-9 p-3 flex flex-col '>
                <h1 className='text-4xl w-full max-w-70 font-ptc font-bold text-blue-900'>SMKN 5 Telkom Banda Aceh</h1>
                <div className="h-1.5 w-15 mt-6  bg-blue-900 max-md:hidden"></div>
                <div className=' w-full max-w-xl flex flex-col gap-2.5 mt-2 font-inter font-bold'>
                    <p className=''>
                        SMK Negeri 5 Telkom Banda Aceh merupakan lembaga pendidikan kejuruan yang berkomitmen mengembangkan potensi peserta didik melalui pendidikan, keterampilan, dan pembentukan karakter.
                    </p>
                    <p>
                        Dengan mengedepankan kualitas pembelajaran, kreativitas, serta penguasaan teknologi, sekolah berupaya menciptakan generasi yang kompeten, mandiri, dan siap menghadapi tantangan masa depan.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About3