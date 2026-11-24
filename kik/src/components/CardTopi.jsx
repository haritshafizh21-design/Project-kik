import topi from "../assets/topi.png"

function CardTopi() {
    const items = [
        { id: 1, text: "pembelajaran berbasis kompetensi dan teknologi", title: "Pendidikan berkualitas", gambar: topi },
        { id: 2, text: "pembelajaran berbasis kompetensi dan teknologi", title: "Pendidikan berkualitas", gambar: topi },
        { id: 3, text: "pembelajaran berbasis kompetensi dan teknologi", title: "Pendidikan berkualitas", gambar: topi },
    ]

    return (
        <>
            {items.map((item) => (
                <div 
                    key={item.id} 
                    className="border-blue-500 border-2 rounded-2xl m-3 w-full max-w-1/3 max-md:max-w-85 p-4 flex gap-4 items-center bg-white shadow-sm"
                >
                    <img 
                        src={item.gambar} 
                        alt="Topi Icon" 
                        className="w-20 h-20 object-contain bg-blue-700/20 p-3 rounded-full shrink-0" 
                    />
                    <div className="flex flex-col gap-1.5">
                        <div className="border-l-4 border-blue-900 font-bold font-inter text-xl text-blue-900 pl-2">
                            <h2>{item.title}</h2>
                        </div>
                        <div>
                            <p className="text-sm text-gray-700">{item.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CardTopi