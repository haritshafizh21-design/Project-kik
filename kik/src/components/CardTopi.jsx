import topi from "../assets/topi.png"

function CardTopi ({title="", text =''}){

    return(
        <div className="border-blue-500 border-2 rounded-2xl m-6 w-full max-w-1/3 max-md:max-w-85   p-4 flex gap-6">
            <img src={topi} alt="" width={90} className=" h-20 bg-blue-700/20 p-3 rounded-full"/> 
            <div className="flex flex-col gap-2.5">
                <div className="border-l-4  border-blue-900  font-bold font-inter text-2xl  p-0 text-blue-900 w-full max-w-12">
                    <h2 className=" ml-2">{title}</h2>
                </div>
                <div>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default CardTopi