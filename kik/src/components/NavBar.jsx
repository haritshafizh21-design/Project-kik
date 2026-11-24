import Logo_sekolah from '../assets/Logo_sekolah.png'
import {Menu} from 'lucide-react'

function NavBar() {
    return (
        <header className='sticky top-0'>
            <nav className="bg-blue-950/50  p-2.5 flex z-50  gap-7" >
                <div>
                    <img src={Logo_sekolah} alt="" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl text-white font-bold font-ptc">SMKN 5 Telkom</h1>
                    <p className="text-xl text-white font-inter">Banda Aceh</p>
                </div>
                <div>
                    <Menu className="w-6 h-6 text-black cursor-pointer" />
                </div>
            </nav>
        </header>
    )
}

export default NavBar