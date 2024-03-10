const SECTIONS_NAMES = {
	NONE: "none",
	EXPERIENCE: "experience",
	EDUCATION: "education",
	PROJECTS: "projects",
	SKILLS: "skills",
	CONTACT: "contact",
} as const;

type ObjectValues<T> = T[keyof T];
type SectionsNamesType = ObjectValues<typeof SECTIONS_NAMES>;

export type SectionsType = {
	name: SectionsNamesType;
	offsetTop: number;
	size: number;
};

export const getCurrentSectionIndex = (
	scrollY: number,
	windowSize: number,
	sectionsOffsetList: SectionsType[],
): SectionsNamesType => {
	for (let i = 0; i < sectionsOffsetList.length; i++) {
		if (
			Math.min(scrollY + windowSize, sectionsOffsetList[i].offsetTop + sectionsOffsetList[i].size) -
				Math.max(scrollY, sectionsOffsetList[i].offsetTop) >
			windowSize / 2
		) {
			return sectionsOffsetList[i].name;
		}
	}
	return SECTIONS_NAMES.NONE;
};
