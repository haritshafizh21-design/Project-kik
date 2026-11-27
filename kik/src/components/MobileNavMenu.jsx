import { NavLink, Link } from 'react-router';
import {
    BookOpen,
    X,
    Home,
    Image as ImageIcon,
    Users,
    Phone,
    UserPlus,
    ArrowUpRight,
    MapPin,
} from 'lucide-react';

export default function MobileNavMenu({ isOpen = true, onClose }) {
    if (!isOpen) return null;

    const navItems = [
        { path: '/', label: 'Beranda', icon: Home, end: true },
        { path: '/galeri', label: 'Galeri', icon: ImageIcon },
        { path: '/info-guru', label: 'Info Guru', icon: Users },
        { path: '/kontak', label: 'Kontak', icon: Phone },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
            
            <div className="w-full max-w-90 rounded-4xl bg-stone-50 p-6 shadow-2xl">
                
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-blue-600/30 bg-violet-50 text-blue-600">
                            <BookOpen className="h-6 w-6 stroke-[1.8]" />
                        </div>
                        <div>
                            <h1 className="font-inter text-[15px] font-bold tracking-tight text-slate-900">
                                SMK NEGERI 5 TELKOM
                            </h1>
                            <p className="text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
                                UNGGUL • BERKARAKTER • BERDAYA
                            </p>
                        </div>
                    </div>

                   
                    <button
                        onClick={onClose}
                        aria-label="Tutup Menu"
                        className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                
                <div className="mt-7 mb-5">
                    <h2 className="font-ptc text-xl font-bold text-slate-900">
                        Menu Utama
                    </h2>
                    <p className="mt-0.5 text-xs text-slate-400">
                        Jelajahi informasi sekolah
                    </p>
                </div>

               
                <nav className="flex flex-col gap-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.end}
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `group flex items-center rounded-2xl p-2.5 transition-all duration-200 ${isActive
                                        ? ' bg-blue-800 text-white shadow-md shadow-violet-600/25'
                                        : 'text-slate-700 hover:bg-slate-200'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        
                                        <div
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${isActive
                                                    ? 'bg-white text-blue-800'
                                                    : 'bg-stone-100 text-stone-500 group-hover:bg-blue-800/10 group-hover:text-blue-800'
                                                }`}
                                        >
                                            <Icon className="h-4 w-4 stroke-2" />
                                        </div>

                                       
                                        <span
                                            className={`flex-1 font-ptc text-sm font-semibold ${isActive ? 'pr-9 text-center' : 'pl-3.5 text-left'
                                                }`}
                                        >
                                            {item.label}
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        );
                    })}
                </nav>


                <Link
                    to="/daftar-ppdb"
                    onClick={onClose}
                    className="mt-6 flex items-center justify-between rounded-2xl bg-blue-800 p-3.5 text-white shadow-lg shadow-violet-600/25 transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-blue-600">
                            <UserPlus className="h-5 w-5 stroke-2" />
                        </div>
                        <div>
                            <p className="text-sm font-bold leading-tight">
                                Daftar PPDB Sekarang
                            </p>
                            <p className="mt-0.5 text-[10px] text-violet-100">
                                Penerimaan peserta didik baru 2026/2027
                            </p>
                        </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-white/90" />
                </Link>


                <div className="mt-5 flex items-center gap-1.5 border-t border-slate-100 pt-4 text-[11px] text-slate-400">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                    <span className="truncate">
                        Jl. Stadion H. Dimurthala No. 5, Banda Aceh.
                    </span>
                </div>
            </div>
        </div>
    );
}