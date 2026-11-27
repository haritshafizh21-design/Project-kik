
import { Users, Trophy } from 'lucide-react';
import Teacher from '../assets/Teacher.png'
import sekolah from '../assets/sekolah.jpg';

const SchoolStatsBanner = () => {
  const stats = [
    {
      id: 1,
      icon: <Users className="w-10 h-10 text-white" strokeWidth={2} />,
      value: '695 +',
      label: 'Siswa',
    },
    {
      id: 2,
      icon: <img src={Teacher} alt="" width={59}/>,
      value: '68 +',
      label: 'Guru',
    },
    {
      id: 3,
      icon: <Trophy className="w-10 h-10 text-white" strokeWidth={2} />,
      value: 'B',
      label: 'Akreditasi',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 my-8  ">

      <div
        className="relative overflow-hidden rounded-2xl bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${sekolah})` }}
      >

        <div className="absolute inset-0 bg-[#1e3a6e]/85 backdrop-blur-[1px]"></div>


        <div className="absolute -top-6 -left-6 w-24 h-24 pointer-events-none">
          <div className="w-4 h-32 bg-[#4a85e8] rotate-45 transform origin-top-left translate-x-6"></div>
          <div className="w-2.5 h-32 bg-[#254b8f] rotate-45 transform origin-top-left translate-x-12 -translate-y-32"></div>
        </div>


        <div className="absolute -bottom-6 -right-6 w-24 h-24 pointer-events-none">
          <div className="w-4 h-32 bg-[#4a85e8] rotate-45 transform origin-bottom-right -translate-x-6"></div>
          <div className="w-2.5 h-32 bg-[#254b8f] rotate-45 transform origin-bottom-right -translate-x-12 translate-y-32"></div>
        </div>


        <div className="relative z-10 px-6 py-8 md:py-10 text-white">

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-[1.5px] w-12 sm:w-20 bg-white/80 rounded-full"></span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-center">
              SMKN 5 Telkom Banda Aceh
            </h2>
            <span className="h-[1.5px] w-12 sm:w-20 bg-white/80 rounded-full"></span>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/40">
            {stats.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center py-4 md:py-2 px-4 text-center"
              >
                <div className="mb-3">{item.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm sm:text-base font-medium text-white/90 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolStatsBanner;