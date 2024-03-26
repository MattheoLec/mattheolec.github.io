import { Card, CardBody, CardHeader, Chip, Spacer } from "@nextui-org/react";

interface CustomCardProps {
	data: {
		title: string;
		role?: string;
		entity?: string;
		location?: string;
		date: string;
		description: string[];
		skills?: string[];
		cover?: string;
		link?: string;
	};
	index: number;
}

const CustomCard = ({ data, index }: CustomCardProps) => {
	return (
		<div
			className={`group grid grid-cols-4 justify-end ${data.link && "cursor-pointer"}`}
			key={index}
			onClick={() => {
				data.link && window.open(data.link);
			}}
		>
			{data.cover && (
				<div className="relative col-[1/3] row-[1/1]">
					<img
						src={data.cover}
						alt={data.entity}
						className="absolute h-full rounded-md opacity-40 shadow-medium transition-all duration-150 group-hover:h-[120%] group-hover:-translate-x-[20%] group-hover:-translate-y-[10%] group-hover:opacity-100"
					/>
				</div>
			)}
			<Card
				className={`flex w-full rounded-md bg-opacity-50 dark:bg-slate-700 dark:bg-opacity-95 ${data.cover ? "col-[2/5] row-[1/1] group-hover:translate-x-[5%] group-hover:dark:bg-opacity-100" : "col-span-4"}`}
			>
				<CardHeader className="flex flex-col items-start">
					<div className="mb-2 flex w-full justify-between">
						<Chip color="primary">{data.date}</Chip>
						{data.location && <Chip color="secondary">{data.location}</Chip>}
					</div>
					<h1 className="flex text-xl font-bold">
						{<p className={`${data.link && "group-hover:underline"}`}>{data.title}</p>}
						{data.role && <p className={`${data.link && "group-hover:underline"}`}>&nbsp;- {data.role}</p>}
						{data.link && (
							<p className="font-serif font-semibold transition-transform duration-100 group-hover:-translate-y-[15%] group-hover:translate-x-[15%]">
								&nbsp;↗
							</p>
						)}
					</h1>
					{data.entity && <p className="text-gray-600 dark:text-slate-400">{data.entity}</p>}
				</CardHeader>
				<CardBody className="flex flex-col pt-0">
					<div className="pb-2">
						{data.description.map((descriptionItem) => (
							<div className="flex">
								&bull;
								<Spacer x={1} />
								<p className="text-gray-800 dark:text-gray-100">{descriptionItem}</p>
							</div>
						))}
					</div>
					{data.skills && (
						<div className="flex space-x-2">
							{data.skills.map((skillsItem) => (
								<Chip className="bg-slate-300 bg-opacity-50 text-gray-800 dark:bg-sky-950 dark:text-gray-100">
									{skillsItem}
								</Chip>
							))}
						</div>
					)}
				</CardBody>
			</Card>
		</div>
	);
};

export default CustomCard;
