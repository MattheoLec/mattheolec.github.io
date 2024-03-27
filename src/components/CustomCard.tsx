import { Card, CardBody, CardHeader, Chip, Link, Spacer } from "@nextui-org/react";

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
		<div className="group grid grid-cols-4 justify-end" key={index}>
			{data.cover && (
				<div className="relative col-[1/5] row-[1/1] md:hidden lg:block lg:h-full ">
					<img
						src={data.cover}
						alt={data.entity}
						className="block h-auto rounded-t-md shadow-medium lg:absolute lg:h-full lg:rounded-md lg:opacity-40 lg:transition-all lg:duration-150 lg:group-hover:h-[120%] lg:group-hover:-translate-x-[20%] lg:group-hover:-translate-y-[10%] lg:group-hover:opacity-100"
					/>
				</div>
			)}
			<Card
				className={`flex w-full rounded-md bg-opacity-50 dark:bg-slate-700 dark:bg-opacity-95 ${data.cover ? "col-[1/5] row-[2/2] rounded-t-none dark:border-slate-700 md:rounded-md md:border md:border-slate-200 lg:col-[2/5] lg:row-[1/1] lg:group-hover:translate-x-[5%] lg:group-hover:bg-opacity-100" : "col-span-4"}`}
			>
				<CardHeader className="flex flex-col items-start">
					<div className="mb-2 flex w-full justify-between">
						<Chip color="primary">{data.date}</Chip>
						{data.location && <Chip color="secondary">{data.location}</Chip>}
					</div>
					<Link
						className="group/title flex text-xl font-bold text-gray-800 dark:text-gray-100"
						href={data.link}
						target="_blank"
					>
						{<p className={`${data.link && "group-hover/title:underline"}`}>{data.title}</p>}
						{data.role && (
							<p className={`${data.link && "group-hover/title:underline"}`}>&nbsp;- {data.role}</p>
						)}
						{data.link && (
							<p className="font-serif font-semibold transition-transform duration-100 group-hover/title:-translate-y-[15%] group-hover/title:translate-x-[15%]">
								&nbsp;↗
							</p>
						)}
					</Link>
					{data.entity && <p className="text-gray-600 dark:text-slate-400">{data.entity}</p>}
				</CardHeader>
				<CardBody className="flex flex-col pt-0">
					<div className="grid grid-cols-5 items-center gap-x-2 pb-2">
						<div className={`col-span-5 flex flex-col ${data.cover && "md:col-span-3 lg:col-span-5"}`}>
							{data.description.map((descriptionItem) => (
								<div className="flex">
									&bull;
									<Spacer x={1} />
									<p className="text-gray-800 dark:text-gray-100">{descriptionItem}</p>
								</div>
							))}
						</div>
						{data.cover && (
							<img
								src={data.cover}
								alt={data.entity}
								className="col-span-2 hidden rounded-md md:block lg:hidden"
							/>
						)}
					</div>
					{data.skills && (
						<div className="mb-2">
							{data.skills.map((skillsItem) => (
								<Chip className="mr-2 mt-2 bg-slate-300 bg-opacity-50 text-gray-800 dark:bg-sky-950 dark:text-gray-100">
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
