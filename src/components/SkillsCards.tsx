import { ReactSVG } from "react-svg";

interface SkillsCardsProps {
	skillsItem: {
		category: string;
		items: {
			title: string;
			icon: string;
		}[];
	};
}

const SkillsCards = ({ skillsItem }: SkillsCardsProps) => {
	return (
		<>
			{skillsItem.items.map((item) => (
				<div className="group mx-4 flex flex-col items-center rounded-md bg-slate-100 p-2 shadow-lg dark:bg-slate-700 md:w-20 md:bg-transparent md:p-0 md:shadow-none dark:md:bg-transparent">
					<div className="bg-opacity-50 p-2 transition-all duration-150 md:rounded-full md:bg-slate-100 md:shadow-lg md:group-hover:-translate-y-[20%] md:dark:bg-slate-700">
						<ReactSVG src={item.icon} className="flex h-14 w-14 dark:fill-gray-100" />
					</div>
					<p className="text-nowrap text-center font-medium text-gray-800 transition-all duration-150 dark:text-gray-100 md:-translate-y-1/2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
						{item.title}
					</p>
				</div>
			))}
		</>
	);
};

export default SkillsCards;
