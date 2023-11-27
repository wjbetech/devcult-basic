import "./Header.css"
import developer from "../assets/developer.png"

export default function Header() {
  return (
    <div className="h-full flex text-black-800">
      <div className="bg-orange-300 w-full p-6">
        <div className="titles h-full flex flex-col justify-evenly w-[60%]">
          <h1 className="font-bold">devcult</h1>
          <div className="subtitle w-[66%]">
            <h3 className="w-[66%] mb-4">Share local <span className=" text-orange-600">dev</span>eloper <span className="text-orange-600">cul</span>ture</h3>
            <span className="text-[20px]">See what developers around the world have to say about local developer culture, their tech stacks, local code hangouts, and more</span>
          </div>
        </div>
      </div>
      <div className="bg-white w-[40%]">
        <img className="object-cover w-full h-full blur-sm grayscale-[50%]" src={developer} alt="a developer" />
      </div>
    </div>
  )
}
