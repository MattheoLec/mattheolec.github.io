import profile_picture from "./assets/profile_picture.jpg";
import { ReactSVG } from "react-svg";
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
	Chip,
	Spacer,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import experience from "./content/experience.ts";

function App() {
	const { theme, setTheme } = useTheme();
	return (
		<main className="flex w-full flex-col overflow-x-hidden bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 dark:bg-gray-900 dark:bg-none">
			<Navbar maxWidth="full" className="fixed z-50 bg-black bg-opacity-10">
				<NavbarContent justify="start"></NavbarContent>
				<NavbarContent justify="center">
					<NavbarItem>
						<Button color="primary" variant="light" className="text-md font-semibold dark:text-gray-100">
							Work Experience
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button color="primary" variant="light" className="text-md font-semibold dark:text-gray-100">
							Education
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button color="primary" variant="light" className="text-md font-semibold dark:text-gray-100">
							Projects
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button color="primary" variant="light" className="text-md font-semibold dark:text-gray-100">
							Skills
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button color="secondary" variant="light" className="text-md font-semibold dark:text-gray-100">
							Contact me
						</Button>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify="end">
					<Switch
						isSelected={theme === "dark"}
						onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
						size="lg"
						color="secondary"
						thumbIcon={({ isSelected }) =>
							isSelected ? (
								<ReactSVG src="src/assets/moon.svg" className="w-[80%] fill-[#7828c8]" />
							) : (
								<ReactSVG src="src/assets/sun.svg" className="w-[80%] fill-gray-800" />
							)
						}
					></Switch>
				</NavbarContent>
			</Navbar>
			<div className="relative flex min-h-screen items-center justify-center">
				<div className="absolute right-0 top-0 h-48 w-64 translate-x-[10%] -rotate-12 bg-gradient-to-tr from-indigo-900 to-gray-800 opacity-0 blur-3xl dark:opacity-50"></div>
				<div className="absolute bottom-0 right-0 h-96 w-[46rem] -translate-x-1/4 translate-y-1/3 -rotate-[30deg] rounded-full bg-gradient-to-bl from-purple-900 to-gray-700 opacity-0 blur-3xl dark:opacity-25"></div>
				<div className="absolute left-0 top-0 h-64 w-[32rem] -rotate-[20deg] rounded-full bg-gradient-to-bl from-purple-900 to-gray-700 opacity-0 blur-3xl dark:opacity-25"></div>
				<div className="relative flex items-center">
					<div className="absolute left-0 top-2/3 h-48 w-1/2 -translate-x-[10%] -translate-y-1/2 rotate-[15deg] bg-gradient-to-tr from-red-900 to-purple-900 opacity-20 blur-3xl dark:opacity-60"></div>
					<div className="z-10 w-full max-w-xl">
						<h1 className="relative w-[max-content] whitespace-nowrap font-mono text-4xl font-extrabold text-gray-800 before:absolute before:inset-0 before:animate-typewriter before:bg-gray-900 after:absolute after:inset-0 after:w-1 after:animate-cursor after:bg-gray-900 dark:text-gray-100 after:dark:bg-gray-100">
							Hello, I'm
						</h1>
						<div className="flex flex-col">
							<p className="bg-gradient-to-r from-blue-500 via-purple-500 via-30% to-orange-500 bg-clip-text font-mono text-5xl font-extrabold text-transparent dark:from-purple-600 dark:to-red-500">
								Matthéo Lécrivain
							</p>
							<p className="py-4">
								Final‐year Master’s student in Computer Science specializing in Software Architecture at
								Nantes University in France.
							</p>
							<div className="flex space-x-2">
								<Button color="primary" className="text-md bg-primary font-semibold shadow-md">
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
										className="flex w-10 items-center fill-secondary shadow-md dark:fill-gray-100"
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
										className="flex w-10 items-center fill-secondary shadow-md dark:fill-gray-100"
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
										className="flex w-9 items-center fill-secondary shadow-md dark:fill-gray-100"
									/>
								</Button>
							</div>
						</div>
					</div>
					<div className="group relative flex">
						<img
							src={profile_picture}
							alt="profile_picture"
							className="z-10 max-w-xs rounded-xl transition-all duration-100 group-hover:translate-x-[1%] group-hover:translate-y-[1%] group-hover:shadow-lg"
						/>
						<div className="absolute inset-0 z-10 rounded-xl bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 opacity-25 transition-all duration-100 group-hover:translate-x-[1%] group-hover:translate-y-[1%] group-hover:opacity-0 dark:bg-gray-800 dark:bg-none"></div>
						<div className="absolute inset-0 translate-x-[4%] translate-y-[4%] rounded-xl ring-2 ring-secondary transition-all duration-100 group-hover:translate-x-[3%] group-hover:translate-y-[3%]"></div>
					</div>
				</div>
			</div>
			<div className="z-10 flex flex-col items-center py-8">
				<p className="pb-16 text-4xl font-bold">Work Experience</p>
				<div className="max-w-2xl space-y-4 pb-24">
					{experience.map((item, index) => (
						<Card className="rounded-md bg-opacity-50 dark:bg-slate-800" key={index}>
							<CardHeader className="flex flex-col items-start">
								<div className="mb-2 flex w-full justify-between">
									<Chip color="primary" className="">
										{item.date}
									</Chip>
									<Chip color="secondary" className="">
										{item.location}
									</Chip>
								</div>
								<h1 className="text-xl font-bold">{item.title}</h1>
								<p className="text-gray-600 dark:text-slate-400">{item.company}</p>
							</CardHeader>
							<CardBody className="flex flex-col pt-0">
								<div className="pb-2">
									{item.description.map((descriptionItem) => (
										<div className="flex">
											&bull;
											<Spacer x={1} />
											<p className="text-gray-800 dark:text-gray-100">{descriptionItem}</p>
										</div>
									))}
								</div>
								<div className="flex space-x-2">
									{item.skills.map((skillsItem) => (
										<Chip className="bg-slate-300 bg-opacity-50 dark:bg-slate-700">
											{skillsItem}
										</Chip>
									))}
								</div>
							</CardBody>
						</Card>
					))}
				</div>
				<p className="pb-16 text-4xl font-bold">Education</p>
				<div className="max-w-2xl space-y-4">
					{education.map((item, index) => (
						<Card className="rounded-md bg-opacity-50 dark:bg-slate-800" key={index}>
							<CardHeader className="flex flex-col items-start">
								<div className="mb-2 flex w-full justify-between">
									<Chip color="primary" className="">
										{item.date}
									</Chip>
									<Chip color="secondary" className="">
										{item.location}
									</Chip>
								</div>
								<h1 className="text-xl font-bold">{item.title}</h1>
								<p className="text-gray-600 dark:text-slate-400">{item.school}</p>
							</CardHeader>
							<CardBody className="pt-0">
								<p className="text-gray-800 dark:text-gray-100">{item.description}</p>
							</CardBody>
						</Card>
					))}
				</div>
			</div>
		</main>
	);
}

export default App;
