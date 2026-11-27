import Logo_sekolah from '../assets/Logo_sekolah.png'
import { Menu } from 'lucide-react'

function NavBar({click}) {
    return (
        <header className='sticky top-0 z-10'>
            <nav className="bg-blue-950/50  p-2.5 flex justify-between" >
                <div className='flex gap-7'>
                    <div>
                        <img src={Logo_sekolah} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-2xl text-white font-bold font-ptc">SMKN 5 Telkom </h1>
                        <p className="text-xl text-white font-inter">Banda Aceh</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <Menu
                        className="w-12 h-12 text-white  hover:text-blue-600 transition-all duration-200 cursor-pointer transform hover:scale-105 active:scale-95"
                        strokeWidth={3}
                        onClick={click}
                    />
                </div>
            </nav>
        </header>
    )
}

export default NavBar