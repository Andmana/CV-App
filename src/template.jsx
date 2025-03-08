const templateData = {
    "Personal Details": {
        name: "Jahn Doe",
        email: "foo@bar.com",
        phone: "+62 XXX 0101 2020",
        address: "Jakarta, Indonesia",
    },

    section: {
        Skills: [
            {
                id: crypto.randomUUID(),
                name: "Skill",
                description: "Tools or description of skill",
            },
            {
                id: crypto.randomUUID(),
                name: "Procrastination",
                description:
                    "The art of keeping busy doing everything except what you're supposed to do.",
            },
            {
                id: crypto.randomUUID(),
                name: "Multitasking",
                description:
                    "Trying to do multiple things at once, and failing at all of them simultaneously.",
            },
            {
                id: crypto.randomUUID(),
                name: "Expert Googler",
                description:
                    "The skill of typing a question into Google and pretending to be an expert after reading the first two results.",
            },
        ],

        Educations: [
            {
                id: crypto.randomUUID(),
                degree: "your degree",
                school: "Home school",
                start: "2024",
                end: "2025",
                location: "location",
            },
            {
                id: crypto.randomUUID(),
                degree: "Master of Procrastination",
                school: "Home School",
                start: "2024",
                end: "2025",
                location: "Bedroom, under a blanket",
            },
            {
                id: crypto.randomUUID(),
                degree: "Bachelor of Netflix Binge Watching",
                school: "University of Couch Potato",
                start: "2024",
                end: "2026",
                location: "Living Room, near snacks",
            },
        ],
        Experiences: [
            {
                id: crypto.randomUUID(),
                company: "company name",
                position: "position title",
                start: "12/2023",
                end: "12/2025",
                location: "city, country",
                description: "Your description",
            },
            {
                id: crypto.randomUUID(),
                company: "Pirate Crew",
                position: "Chief Treasure Hunter",
                start: "May 1503",
                end: "March 1520",
                location: "Caribbean Sea",
                description: `
                Defeat ex of Seven Warlords ,
                Made maps of nonexistent islands just to confuse rival pirates,
                Successfully avoided capture by wearing an elaborate disguise of seaweed
                `,
            },
            {
                id: crypto.randomUUID(),
                company: "Qin Dynasty Emperor Inner Circle",
                position: "Eunuch",
                start: "July 706",
                end: "September 753",
                location: "Beijing, China",
                description: [
                    "Demonstrated excellence in the civil servant exam",
                    "Successfully poisoned multiple emperors",
                    "Seduced the wives of 3 emperors in a row",
                ],
            },
        ],
    },
};

export const emptyData = {
    "Personal Details": {
        name: "",
        email: "",
        phone: "",
        address: "",
    },
    section: {
        Skills: [],
        Educations: [],
        Experiences: [],
    },
};
export default templateData;
