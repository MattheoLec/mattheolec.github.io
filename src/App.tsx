import profile_picture from "/profile_picture.jpg";
import { ReactSVG } from "react-svg";
import links from "./content/links.ts";
import education from "./content/education.ts";
import {
	Button,
	Link,
	Navbar,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Switch,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import experience from "./content/experience.ts";
import projects from "./content/projects.ts";
import skills from "./content/skills.ts";
import { ElementRef, RefObject, useEffect, useRef, useState } from "react";
import { getCurrentSectionIndex, SectionsType } from "./utils/utils.ts";
import CustomCard from "./components/CustomCard.tsx";
import SkillsCards from "./components/SkillsCards.tsx";

function App() {
	const { resolvedTheme, setTheme } = useTheme();
	const [textToWrite, setTextToWrite] = useState<string>("");
	const [currentSection, setCurrentSection] = useState<string>("");
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [sections, setSections] = useState<SectionsType[]>([]);
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
		const sections: SectionsType[] = [
			{
				id: "experience",
				name: "Work Experience",
				ref: experienceRef,
			},
			{
				id: "education",
				name: "Education",
				ref: educationRef,
			},
			{
				id: "projects",
				name: "Projects",
				ref: projectsRef,
			},
			{
				id: "skills",
				name: "Skills",
				ref: skillsRef,
			},
			{
				id: "contact",
				name: "Contact me",
				ref: contactRef,
			},
		];
		setSections(sections);
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
			<Navbar
				maxWidth="full"
				className="fixed z-50 bg-black bg-opacity-10"
				isMenuOpen={isMenuOpen}
				onMenuOpenChange={setIsMenuOpen}
			>
				<NavbarContent justify="start"></NavbarContent>
				<NavbarContent justify="center" className="hidden lg:flex">
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
				<NavbarMenu className="space-y-2 bg-black bg-opacity-10">
					{sections.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Button
								color="primary"
								variant="light"
								className="text-lg font-semibold dark:text-gray-100"
								size="lg"
								onPress={() => setIsMenuOpen(false)}
								onClick={() => scrollToSection(item.ref)}
							>
								{item.name}
							</Button>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
				<NavbarContent justify="end">
					<Switch
						isSelected={resolvedTheme === "dark"}
						onChange={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
						size="lg"
						color="secondary"
						thumbIcon={({ isSelected }) =>
							isSelected ? (
								<ReactSVG src="/moon.svg" className="w-[80%] fill-[#7828c8]" />
							) : (
								<ReactSVG src="/sun.svg" className="w-[80%] fill-gray-800" />
							)
						}
					></Switch>
					<NavbarMenuToggle className="lg:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
				</NavbarContent>
			</Navbar>
			<div className="flex min-h-screen w-5/6 items-center justify-center lg:w-4/5 xl:w-3/4 2xl:w-2/3">
				<div className="relative flex items-center">
					<div className="absolute left-0 top-2/3 h-48 w-1/2 -translate-x-[10%] -translate-y-1/2 rotate-[15deg] bg-gradient-to-tr from-red-900 to-purple-900 opacity-20 blur-3xl dark:opacity-60"></div>
					<div className="z-10 w-full max-w-xl">
						<div className="flex flex-col">
							<div className="flex items-center gap-2">
								<div className="flex h-fit basis-0 flex-col" id="test">
									<h1 className="relative w-[max-content] whitespace-nowrap font-mono text-4xl font-extrabold text-gray-700 after:absolute after:inset-y-0 after:-right-2 after:w-1 after:animate-cursor after:bg-gray-700 dark:text-gray-100 after:dark:bg-gray-100">
										{textToWrite}
									</h1>
									<p className="bg-gradient-to-r from-blue-500 via-purple-500 via-30% to-orange-500 bg-clip-text font-mono text-5xl font-extrabold text-transparent dark:from-purple-600 dark:to-red-500">
										Matthéo Lécrivain
									</p>
								</div>
								<div className="flex w-full justify-center lg:hidden">
									<img
										src={profile_picture}
										alt="profile_picture"
										className="w-[196px] rounded-medium"
									/>
								</div>
							</div>
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
										src="/github.svg"
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
										src="/linkedin.svg"
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
										src="/email.svg"
										className="flex w-9 items-center fill-secondary dark:fill-gray-100"
									/>
								</Button>
							</div>
						</div>
					</div>
					<div className="group relative hidden lg:flex">
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
			<div ref={experienceRef} className="relative flex w-5/6 flex-col items-center lg:w-4/5 xl:w-3/4 2xl:w-2/3">
				<div className="absolute right-0 top-0 h-96 w-[46rem] -translate-y-1/3 translate-x-1/4 -rotate-[30deg] rounded-full bg-gradient-to-bl from-purple-900 to-gray-700 opacity-0 blur-3xl dark:opacity-25"></div>
				<h1 className="pb-16 text-4xl font-bold">Work Experience</h1>
				<div className="w-full space-y-8 pb-24 lg:space-y-16">
					{experience.map((item, index) => (
						<CustomCard data={item} index={index} />
					))}
				</div>
			</div>
			<div ref={educationRef} className="relative flex w-5/6 flex-col items-center lg:w-4/5 xl:w-3/4 2xl:w-2/3">
				<div className="absolute left-0 top-0 h-96 w-[36rem] -translate-x-1/4 -translate-y-1/3 rotate-[20deg] rounded-full bg-gradient-to-bl from-purple-900 to-gray-700 opacity-0 blur-3xl dark:opacity-25"></div>
				<h1 className="pb-16 text-4xl font-bold">Education</h1>
				<div className="w-full space-y-8 pb-24">
					{education.map((item, index) => (
						<CustomCard data={item} index={index} />
					))}
				</div>
			</div>
			<div ref={projectsRef} className="relative flex w-5/6 flex-col items-center lg:w-4/5 xl:w-3/4 2xl:w-2/3">
				<div className="absolute right-0 top-0 h-96 w-[62rem] -translate-y-1/3 translate-x-3/4 -rotate-[60deg] rounded-full bg-gradient-to-bl from-purple-900 to-gray-700 opacity-0  blur-3xl dark:opacity-15"></div>
				<h1 className="pb-16 text-4xl font-bold">Projects</h1>
				<div className="w-full space-y-8 pb-24">
					{projects.map((item, index) => (
						<CustomCard data={item} index={index} />
					))}
				</div>
			</div>
			<div
				ref={skillsRef}
				className="relative flex w-full flex-col items-center md:w-5/6 lg:w-4/5 xl:w-3/4 2xl:w-2/3"
			>
				<div className="absolute left-0 top-0 h-[32rem] w-[64rem] -translate-x-1/4 -translate-y-1/4 -rotate-[30deg] rounded-full bg-gradient-to-bl from-gray-700 via-purple-900 to-indigo-950 opacity-0 blur-3xl dark:opacity-15"></div>
				<h1 className="pb-16 text-4xl font-bold">Skills</h1>
				<div className="z-10 flex w-full flex-col items-center space-y-8 pb-24">
					{skills.map((skillsItem) => (
						<div
							className={`flex w-full flex-col space-y-8 md:items-center ${skillsItem.category === "Miscellaneous" && "items-center"}`}
						>
							<h2 className="text-center text-xl font-medium text-gray-800 dark:text-gray-100">
								{skillsItem.category}
							</h2>
							<div
								className={`flex w-fit md:animate-none ${skillsItem.category !== "Miscellaneous" && "animate-infinite-scroll"}`}
							>
								<SkillsCards skillsItem={skillsItem} />
								{skillsItem.category !== "Miscellaneous" && window.innerWidth < 768 && (
									<SkillsCards skillsItem={skillsItem} />
								)}
							</div>
						</div>
					))}
				</div>
			</div>
			<div ref={contactRef} className="relative flex w-5/6 flex-col items-center lg:w-4/5 xl:w-3/4 2xl:w-2/3">
				<div className="absolute right-0 top-0 h-[32rem] w-[46rem] -translate-y-1/2 translate-x-1/2 rotate-[25deg] rounded-full bg-gradient-to-bl from-purple-900 to-gray-700 opacity-0   blur-3xl dark:opacity-15"></div>
				<h1 ref={contactRef} className="pb-16 text-4xl font-bold">
					Contact me
				</h1>
				<p className="font-semibold text-gray-800 dark:text-gray-100">
					I'm currently open for{" "}
					<span className="font-bold text-blue-700 dark:text-blue-500">Front-end positions</span>.
				</p>
				<p className="font-semibold text-gray-800 dark:text-gray-100">
					Feel free to reach out to me for any inquiries.
				</p>
				<div className="flex space-x-4 pt-8">
					<Button
						color="primary"
						className="text-md gap-2 bg-primary p-3 font-semibold shadow-md"
						aria-label="LinkedIn"
						as={Link}
						href={links.LinkedIn.full}
						target="_blank"
						startContent={
							<ReactSVG src="/linkedin.svg" className="flex w-5 items-center fill-gray-100" />
						}
					>
						LinkedIn
					</Button>
					<Button
						color="primary"
						className="text-md gap-2 bg-primary p-3 font-semibold shadow-md"
						aria-label="Email"
						as={Link}
						href={links.Email.full}
						startContent={
							<ReactSVG src="/email.svg" className="flex w-5 items-center fill-gray-100" />
						}
					>
						Email
					</Button>
					<Button
						color="primary"
						className="text-md gap-2 bg-primary p-3 font-semibold shadow-md"
						startContent={
							<ReactSVG src="/resume.svg" className="flex w-5 items-center fill-gray-100" />
						}
					>
						Resume
					</Button>
				</div>
				<div className="flex flex-col items-center pb-8 pt-32">
					<Link
						href="https://github.com/MattheoLec/portfolio-mattheo-lec"
						isExternal
						showAnchorIcon
						anchorIcon={
							<ReactSVG
								src="/github.svg"
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
