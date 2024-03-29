import React from "react";

const SECTIONS_IDS = {
	NONE: "none",
	EXPERIENCE: "experience",
	EDUCATION: "education",
	PROJECTS: "projects",
	SKILLS: "skills",
	CONTACT: "contact",
} as const;

type ObjectValues<T> = T[keyof T];
type SectionsIdsType = ObjectValues<typeof SECTIONS_IDS>;

export type SectionsType = {
	id: SectionsIdsType;
	name: string;
	ref: React.RefObject<React.ElementRef<"h1">>;
};

export const getCurrentSectionIndex = (
	scrollY: number,
	windowSize: number,
	sectionsOffsetList: SectionsType[],
): SectionsIdsType => {
	if (scrollY + windowSize >= document.body.offsetHeight - 10)
		return sectionsOffsetList[sectionsOffsetList.length - 1].id;
	for (let i = 0; i < sectionsOffsetList.length; i++) {
		if (
			Math.min(
				scrollY + windowSize,
				(sectionsOffsetList[i].ref.current?.offsetTop as number) +
					(sectionsOffsetList[i].ref.current?.offsetHeight as number),
			) -
				Math.max(scrollY, sectionsOffsetList[i].ref.current?.offsetTop as number) >
			windowSize / 2
		) {
			return sectionsOffsetList[i].id;
		}
	}
	return SECTIONS_IDS.NONE;
};
