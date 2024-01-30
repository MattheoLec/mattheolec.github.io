import profile_picture from './assets/profile_picture.jpg';
import {ReactSVG} from "react-svg";
import links from "./content/links.ts";
import education from "./content/education.ts";
import {
	Button,
	Link,
	Navbar,
	NavbarContent,
	NavbarItem,
	Card,
	CardBody,
	Switch,
	CardHeader,
	Chip
} from "@nextui-org/react";
import {useTheme} from "next-themes";

function App() {
	const { theme, setTheme } = useTheme();
	return (
		<main
			className="flex flex-col w-full bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 dark:bg-none
			dark:bg-gray-900 overflow-x-hidden"
		>
			<Navbar maxWidth="full" className="fixed bg-black bg-opacity-10 z-50">
				<NavbarContent justify="start">
				</NavbarContent>
				<NavbarContent justify="center">
					<NavbarItem>
						<Button color="primary" variant="light" className="text-md font-semibold">
							Education
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button color="primary" variant="light" className="text-md font-semibold">
							Work Experience
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button color="primary" variant="light" className="text-md font-semibold">
							Projects
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button color="primary" variant="light" className="text-md font-semibold">
							Skills
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button color="secondary" variant="light" className="text-md font-semibold">
							Contact me
						</Button>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify="end">
					<Switch
						isSelected={theme === 'dark'}
						onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						size="lg"
						color="secondary"
						thumbIcon={({isSelected}) =>
							isSelected ? (
								<ReactSVG src="src/assets/moon.svg" className="w-[80%] fill-[#7828c8]"/>
							) : (
								<ReactSVG src="src/assets/sun.svg" className="w-[80%] fill-gray-800"/>
							)
						}
					>
					</Switch>
				</NavbarContent>
			</Navbar>
			<div className="relative flex justify-center items-center min-h-screen">
				<div
					className="absolute h-48 w-64 top-0 right-0 translate-x-[10%] -rotate-12 blur-3xl opacity-0
					dark:opacity-50 bg-gradient-to-tr from-indigo-900 to-gray-800"
				></div>
				<div
					className="absolute h-96 w-[46rem] rounded-full bottom-0 right-0 -translate-x-1/4 translate-y-1/3
					-rotate-[30deg] blur-3xl opacity-0 dark:opacity-25 bg-gradient-to-bl from-purple-900 to-gray-700"
				></div>
				<div
					className="absolute h-64 w-[32rem] rounded-full top-0 left-0 -rotate-[20deg] blur-3xl opacity-0
					dark:opacity-25 bg-gradient-to-bl from-purple-900 to-gray-700"
				></div>
				<div className="relative flex items-center">
					<div
						className="absolute h-48 w-1/2 top-2/3 -translate-y-1/2 left-0 -translate-x-[10%] opacity-20
						dark:opacity-60 blur-3xl rotate-[15deg] bg-gradient-to-tr from-red-900 to-purple-900"
					>
					</div>
					<div className="w-full max-w-xl z-10">
						<h1
							className="text-4xl font-mono font-extrabold relative w-[max-content] before:absolute
							before:inset-0 before:bg-gray-900 before:animate-typewriter whitespace-nowrap
							after:absolute after:inset-0 after:w-1 after:bg-gray-900 after:dark:bg-gray-100
							after:animate-cursor"
						>
							Hello, I'm
						</h1>
						<div
							className="flex flex-col"
						>
							<p
								className="text-5xl font-mono font-extrabold text-transparent bg-clip-text
								bg-gradient-to-r from-purple-600 to-orange-500"
							>
								Matthéo Lécrivain
							</p>
							<p className="py-4">
								Final‐year Master’s student in Computer Science specializing in Software Architecture at
								Nantes University in France.
							</p>
							<div className="flex space-x-2">
								<Button
									color="primary"
									className="text-md font-semibold bg-orange-500 dark:bg-indigo-800 shadow-md"
								>
									Resume
								</Button>
								<Button color="secondary" variant="ghost" className="text-md font-semibold shadow-md">
									Contact me
								</Button>
								<Button
									isIconOnly
									color="secondary"
									variant="light"
									aria-label="GitHub"
									as={Link}
									href={links.GitHub}
									target="_blank"
								>
									<ReactSVG
										src="src/assets/github.svg"
										className="w-10 fill-secondary dark:fill-gray-100 flex items-center shadow-md"
									/>
								</Button>
								<Button
									isIconOnly
									color="secondary"
									variant="light"
									aria-label="LinkedIn"
									as={Link}
									href={links.LinkedIn}
									target="_blank"
								>
									<ReactSVG
										src="src/assets/linkedin.svg"
										className="w-10 fill-secondary dark:fill-gray-100 flex items-center shadow-md"
									/>
								</Button>
								<Button
									isIconOnly
									color="secondary"
									variant="light"
									aria-label="Email"
									as={Link}
									href={links.Email}
								>
									<ReactSVG
										src="src/assets/email.svg"
										className="w-9 fill-secondary dark:fill-gray-100 flex items-center shadow-md"
									/>
								</Button>
							</div>
						</div>
					</div>
					<div className="relative flex group">
						<img
							src={profile_picture}
							alt="profile_picture"
							className="rounded-xl max-w-xs z-10 group-hover:shadow-lg group-hover:translate-x-[1%]
							group-hover:translate-y-[1%] transition-all duration-100"
						/>
						<div
							className="rounded-xl absolute inset-0 bg-gradient-to-br from-indigo-200 via-red-200
							to-yellow-100 dark:bg-none dark:bg-gray-800 opacity-25 z-10 group-hover:translate-x-[1%]
							group-hover:translate-y-[1%] group-hover:opacity-0 transition-all duration-100"
						></div>
						<div
							className="rounded-xl absolute inset-0 translate-x-[4%] translate-y-[4%] ring-2
							ring-orange-500 dark:ring-indigo-800 group-hover:translate-x-[3%]
							group-hover:translate-y-[3%] transition-all duration-100"
						></div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center py-8 z-10">
				<p className="text-4xl font-bold pb-16">Education</p>
				<div className="max-w-2xl space-y-4">
					{education.map((item, index) => (
						<Card className="rounded-md bg-slate-800" key={index}>
							<CardHeader className="flex flex-col items-start">
								<div className="flex w-full mb-2 justify-between">
									<Chip color="primary" className="">{item.date}</Chip>
									<Chip color="secondary" className="">{item.location}</Chip>
								</div>
								<h1 className="text-xl font-bold">{item.title}</h1>
								<p className="text-gray-800 dark:text-gray-100">{item.school}</p>
							</CardHeader>
							<CardBody className="pt-0">
								<div className="flex flex-col">
									<p className="text-gray-800 dark:text-gray-100">{item.description}</p>
								</div>
							</CardBody>
						</Card>
					))}
				</div>
			</div>
		</main>
	)
}

export default App
