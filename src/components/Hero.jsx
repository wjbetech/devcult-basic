import developer from "../assets/developer.png";

export default function Hero() {
	return (
		<div className="h-screen flex text-black-800">
			<div className="bg-orange-300 w-full p-14">
				<div className="h-full flex flex-col justify-evenly">
					<h1 className="font-bold w-[50%] text-[90px] leading-[75px]">
						share{" "}
						<span className="text-orange-700">
							local
						</span>{" "}
						developer culture{" "}
						<span className="text-[65px]">
							🌎
						</span>
					</h1>
					<div className="w-[60%]">
						<p className="tracking-wide text-2xl font-normal">
							Here the world connects to talk
							about local dev scenes, work
							culture, and tech stacks
						</p>
					</div>
				</div>
			</div>
			<div className="bg-white w-[50%]">
				<img
					className="object-cover w-full h-full p-[1px] grayscale-[90%] blur-[2px]"
					src={developer}
					alt="a developer"
				/>
			</div>
		</div>
	);
}
