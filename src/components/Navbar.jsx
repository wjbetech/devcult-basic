export default function Navbar() {
	return (
		<nav className="py-4 px-14 bg-zinc-100 flex justify-between align-middle items-center">
			<h3 className="font-semibold text-orange-600">
				devcult
			</h3>
			<div className="flex gap-6">
				<a
					className="hover:text-orange-600"
					href="/"
				>
					Mission
				</a>
				<a
					className="hover:text-orange-600"
					href="/"
				>
					Contact
				</a>
				<a
					className="hover:text-orange-600"
					href="/"
				>
					Team
				</a>
			</div>
		</nav>
	);
}
