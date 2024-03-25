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
	Input,
	Textarea,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import experience from "./content/experience.ts";
import projects from "./content/projects.ts";
import skills from "./content/skills.ts";
import { ElementRef, RefObject, useEffect, useRef, useState } from "react";
import { getCurrentSectionIndex, SectionsType } from "./utils/utils.ts";
import CustomCard from "./components/CustomCard.tsx";

function App() {
	const { theme, setTheme } = useTheme();
	const [textToWrite, setTextToWrite] = useState<string>("");
	const [currentSection, setCurrentSection] = useState<string>("");
	const experienceRef = useRef<ElementRef<"h1">>(null);
	const educationRef = useRef<ElementRef<"h1">>(null);
	const projectsRef = useRef<ElementRef<"h1">>(null);
	const skillsRef = useRef<ElementRef<"h1">>(null);
	const contactRef = useRef<ElementRef<"h1">>(null);

	const scrollToSection = (ref: RefObject<ElementRef<"h1">>) => {
		if (ref.current) {
			window.scrollTo({
				top: ref.current.offsetTop - 128,
				behavior: "smooth",
			});
		}
	};

	const writeEffect = () => {
		const text = "Hello, I'm";
		for (let i = 0; i < text.length; i++) {
			setTimeout(() => {
				setTextToWrite(text.slice(0, i + 1));
			}, 150 * i);
		}
	};

	useEffect(() => {
		writeEffect();
	}, []);

	useEffect(() => {
		if (
			!experienceRef.current ||
			!educationRef.current ||
			!projectsRef.current ||
			!skillsRef.current ||
			!contactRef.current
		)
			return;
		const sections: SectionsType[] = [
			{
				name: "experience",
				offsetTop: experienceRef.current.offsetTop,
				size: experienceRef.current.offsetHeight,
			},
			{
				name: "education",
				offsetTop: educationRef.current.offsetTop,
				size: educationRef.current.offsetHeight,
			},
			{
				name: "projects",
				offsetTop: projectsRef.current.offsetTop,
				size: projectsRef.current.offsetHeight,
			},
			{
				name: "skills",
				offsetTop: skillsRef.current.offsetTop,
				size: skillsRef.current.offsetHeight,
			},
			{
				name: "contact",
				offsetTop: contactRef.current.offsetTop,
				size: contactRef.current.offsetHeight,
			},
		];
		const handleScroll = () => {
			const sectionName = getCurrentSectionIndex(window.scrollY, window.innerHeight, sections);
			setCurrentSection(sectionName);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<main className="relative flex w-full flex-col items-center overflow-x-hidden bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 dark:bg-gray-900 dark:bg-none">
			<div className="absolute left-0 top-0 h-64 w-[32rem] -rotate-[20deg] rounded-full bg-gradient-to-bl from-purple-900 to-gray-700 opacity-0 blur-3xl dark:opacity-25"></div>
			<div className="absolute right-0 top-0 h-48 w-64 translate-x-[10%] -rotate-12 bg-gradient-to-tr from-indigo-900 to-gray-800 opacity-0 blur-3xl dark:opacity-50"></div>
			<Navbar maxWidth="full" className="fixed z-50 bg-black bg-opacity-10">
				<NavbarContent justify="start"></NavbarContent>
				<NavbarContent justify="center">
					<NavbarItem>
						<Button
							color="primary"
							variant={currentSection === "experience" ? "solid" : "light"}
							className="text-md font-semibold dark:text-gray-100"
							onClick={() => scrollToSection(experienceRef)}
						>
							Work Experience
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button
							color="primary"
							variant={currentSection === "education" ? "solid" : "light"}
							className="text-md font-semibold dark:text-gray-100"
							onClick={() => scrollToSection(educationRef)}
						>
							Education
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button
							color="primary"
							variant={currentSection === "projects" ? "solid" : "light"}
							className="text-md font-semibold dark:text-gray-100"
							onClick={() => scrollToSection(projectsRef)}
						>
							Projects
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button
							color="primary"
							variant={currentSection === "skills" ? "solid" : "light"}
							className="text-md font-semibold dark:text-gray-100"
							onClick={() => scrollToSection(skillsRef)}
						>
							Skills
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button
							color="secondary"
							variant={currentSection === "contact" ? "solid" : "light"}
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
			<div className="flex min-h-screen items-center justify-center">
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
			<div ref={experienceRef} className="relative flex w-2/3 flex-col items-center">
				<div className="absolute right-0 top-0 h-96 w-[46rem] -translate-y-1/3 translate-x-1/4 -rotate-[30deg] rounded-full bg-gradient-to-bl from-purple-900 to-gray-700 opacity-0 blur-3xl dark:opacity-25"></div>
				<h1 className="pb-16 text-4xl font-bold">Work Experience</h1>
				<div className="w-full space-y-16 pb-24">
					{experience.map((item, index) => (
						<CustomCard data={item} index={index} />
					))}
				</div>
			</div>
			<div ref={educationRef} className="relative flex w-2/3 flex-col items-center">
				<div className="absolute left-0 top-0 h-96 w-[36rem] -translate-x-1/4 -translate-y-1/3 rotate-[20deg] rounded-full bg-gradient-to-bl from-purple-900 to-gray-700 opacity-0 blur-3xl dark:opacity-25"></div>
				<h1 className="pb-16 text-4xl font-bold">Education</h1>
				<div className="w-full space-y-4 pb-24">
					{education.map((item, index) => (
						<CustomCard data={item} index={index} />
					))}
				</div>
			</div>
			<div ref={projectsRef} className="relative flex w-2/3 flex-col items-center">
				<h1 className="pb-16 text-4xl font-bold">Projects</h1>
				<div className="w-full space-y-4 pb-24">
					{projects.map((item, index) => (
						<CustomCard data={item} index={index} />
					))}
				</div>
			</div>
			<div ref={skillsRef} className="relative flex w-1/2 flex-col items-center">
				<h1 className="pb-16 text-4xl font-bold">Skills</h1>
				<div className="flex flex-col items-center space-y-8 pb-24">
					{skills.map((skillsItem) => (
						<div className="flex flex-col items-center space-y-8">
							<h2 className="text-xl font-medium">{skillsItem.category}</h2>
							<div className="flex space-x-8">
								{skillsItem.items.map((item) => (
									<div className="group flex w-20 flex-col items-center">
										<div className="rounded-full bg-slate-100 bg-opacity-50 p-2 shadow-lg transition-all duration-150 group-hover:-translate-y-[20%] dark:bg-slate-700">
											<ReactSVG src={item.icon} className="flex h-14 w-14 dark:fill-gray-100" />
										</div>
										<p className="-translate-y-1/2 text-nowrap text-center font-medium opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100">
											{item.title}
										</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex w-2/3 flex-col items-center">
				<h1 ref={contactRef} className="pb-16 text-4xl font-bold">
					Contact me
				</h1>
				<Card className="w-full dark:bg-slate-800" isBlurred>
					<CardBody className="grid grid-cols-2 space-x-4 p-6">
						<div className="flex flex-col space-y-2">
							<h2 className="pb-2 text-xl font-semibold">Let's keep in touch!</h2>
							<p>
								GitHub :{" "}
								<Link href={links.GitHub.full} target="_blank" className="text-blue-600">
									{links.GitHub.short}
								</Link>
							</p>
							<p>
								LinkedIn :{" "}
								<Link href={links.LinkedIn.full} target="_blank" className="text-blue-600">
									{links.LinkedIn.short}
								</Link>
							</p>
							<p>
								Email :{" "}
								<Link href={links.Email.full} className="text-blue-600">
									{links.Email.short}
								</Link>
							</p>
						</div>
						<div className="flex flex-col space-y-4">
							<h2 className="text-center text-xl font-semibold">Send me a message</h2>
							<Input type="email" label="Email" color="default" className="light" />
							<Textarea label="Message" className="light" minRows={5} />
							<Button
								title="Send"
								color="primary"
								className="w-fit light"
								endContent={<ReactSVG src="src/assets/send.svg" className="h-4 w-4 fill-gray-100" />}
							>
								Send
							</Button>
						</div>
					</CardBody>
				</Card>
				<div className="flex flex-col items-center py-8">
					<Link
						href="https://github.com/MattheoLec/portfolio-mattheo-lec"
						isExternal
						showAnchorIcon
						anchorIcon={
							<ReactSVG
								src="src/assets/github.svg"
								className="ml-1 flex w-6 items-center fill-gray-800 dark:fill-gray-100"
							/>
						}
						className="pb-1 text-sm font-medium text-gray-800 dark:text-gray-100"
					>
						Available on GitHub
					</Link>
					<p className="text-sm font-medium">Built with React, TypeScript, Tailwind CSS & NextUI</p>
				</div>
			</div>
		</main>
	);
}

export default App;
