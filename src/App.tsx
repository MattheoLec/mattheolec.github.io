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
	Input,
	Textarea
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import experience from "./content/experience.ts";
import projects from "./content/projects.ts";
import skills from "./content/skills.ts";
import { ElementRef, RefObject, useEffect, useRef, useState } from "react";

function App() {
	const { theme, setTheme } = useTheme();
	const [textToWrite, setTextToWrite] = useState<string>('');
	const experienceRef = useRef<ElementRef<'h1'>>(null);
	const educationRef = useRef<ElementRef<'h1'>>(null);
	const projectsRef = useRef<ElementRef<'h1'>>(null);
	const skillsRef = useRef<ElementRef<'h1'>>(null);
	const contactRef = useRef<ElementRef<'h1'>>(null);

	const scrollToSection = (ref: RefObject<ElementRef<'h1'>>) => {
		if (ref.current) {
			window.scrollTo({
				top: ref.current.offsetTop - 128,
				behavior: "smooth"
			});
		}
	}

	const writeEffect = () => {
		const text = "Hello, I'm";
		for (let i = 0; i < text.length; i++) {
			setTimeout(() => {
				setTextToWrite(text.slice(0, i + 1));
			}, 150 * i);
		}
	}

	useEffect(() => {
		writeEffect();
	}, []);

	return (
		<main className="flex w-full flex-col overflow-x-hidden bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 dark:bg-gray-900 dark:bg-none">
			<Navbar maxWidth="full" className="fixed z-50 bg-black bg-opacity-10">
				<NavbarContent justify="start"></NavbarContent>
				<NavbarContent justify="center">
					<NavbarItem>
						<Button
							color="primary"
							variant="light"
							className="text-md font-semibold dark:text-gray-100"
							onClick={() => scrollToSection(experienceRef)}
						>
							Work Experience
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button
							color="primary"
							variant="light"
							className="text-md font-semibold dark:text-gray-100"
							onClick={() => scrollToSection(educationRef)}
						>
							Education
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button
							color="primary"
							variant="light"
							className="text-md font-semibold dark:text-gray-100"
							onClick={() => scrollToSection(projectsRef)}
						>
							Projects
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button
							color="primary"
							variant="light"
							className="text-md font-semibold dark:text-gray-100"
							onClick={() => scrollToSection(skillsRef)}
						>
							Skills
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button
							color="secondary"
							variant="light"
							className="text-md font-semibold dark:text-gray-100"
							onClick={() => scrollToSection(contactRef)}
						>
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
						<h1 className="relative w-[max-content] whitespace-nowrap font-mono text-4xl font-extrabold text-gray-800 after:absolute after:inset-y-0 after:-right-2 after:w-1 after:animate-cursor after:bg-gray-900 dark:text-gray-100 after:dark:bg-gray-100">
							{textToWrite}
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
								<Button
									color="secondary"
									variant="ghost"
									className="text-md font-semibold shadow-md"
									onClick={() => scrollToSection(contactRef)}
								>
									Contact me
								</Button>
								<Button
									isIconOnly
									color="secondary"
									variant="light"
									aria-label="GitHub"
									as={Link}
									href={links.GitHub.full}
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
									href={links.LinkedIn.full}
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
									href={links.Email.full}
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
				<h1 ref={experienceRef} className="pb-16 text-4xl font-bold">Work Experience</h1>
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
				<h1 ref={educationRef} className="pb-16 text-4xl font-bold">Education</h1>
				<div className="max-w-2xl space-y-4 pb-24">
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
				<h1 ref={projectsRef} className="pb-16 text-4xl font-bold">Projects</h1>
				<div className="max-w-2xl space-y-4 pb-24">
					{projects.map((item, index) => (
						<Card className="rounded-md bg-opacity-50 dark:bg-slate-800" key={index}>
							<CardHeader className="flex flex-col items-start">
								<Chip color="primary" className="mb-2">
									{item.date}
								</Chip>
								<h1 className="text-xl font-bold">{item.title}</h1>
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
				<h1 ref={skillsRef} className="pb-16 text-4xl font-bold">Skills</h1>
				<div className="flex flex-col items-center space-y-8 pb-24">
					{skills.map((skillsItem) => (
						<div className="flex flex-col items-center space-y-8">
							<h2 className="text-xl font-medium">{skillsItem.category}</h2>
							<div className="flex space-x-8">
								{skillsItem.items.map(item => (
									<div className="flex flex-col group w-20 items-center">
										<div className="bg-slate-100 dark:bg-slate-700 bg-opacity-50 p-2 rounded-full shadow-lg group-hover:-translate-y-[20%] transition-all duration-150">
											<ReactSVG src={item.icon} className="flex w-14 h-14 dark:fill-gray-100"/>
										</div>
										<p className="font-medium text-nowrap text-center -translate-y-1/2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-150">{item.title}</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				<h1 ref={contactRef} className="pb-16 text-4xl font-bold">Contact me</h1>
				<Card className="w-1/2 bg-opacity-50" isBlurred>
					<CardBody className="grid grid-cols-2 p-6 dark:bg-gray-700 space-x-4">
						<div className="flex flex-col space-y-2">
							<h2 className="text-xl font-semibold pb-2">Let's keep in touch!</h2>
							<p>GitHub : <Link href={links.GitHub.full} target="_blank" className="text-blue-500">{links.GitHub.short}</Link></p>
							<p>LinkedIn : <Link href={links.LinkedIn.full} target="_blank" className="text-blue-500">{links.LinkedIn.short}</Link></p>
							<p>Email : <Link href={links.Email.full} className="text-blue-500">{links.Email.short}</Link></p>
						</div>
						<div className="flex flex-col space-y-4">
							<h2 className="text-xl font-semibold text-center">
								Send me a message
							</h2>
							<Input
								type="email"
								label="Email"
								color="default"
								className="light"
							/>
							<Textarea label="Message" className="light"/>
							<Button title="Send" color="primary" className="w-fit light" endContent={<ReactSVG src="src/assets/send.svg" className="w-4 h-4 fill-gray-100"/>}>
								Send
							</Button>
						</div>
					</CardBody>
				</Card>
			</div>
		</main>
	);
}

export default App;
