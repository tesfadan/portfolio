// main projects go here 

// type Interface = {
//     name: String,
//     description: String,
//     image: String,
//     tags: String,
//     link: String,
//     sourceCode?: String
// }


const Projects = [
    {
        name: "Linkup",
        description: `
        A web application that lets users create a page where they 
        can feature multiple links to their content and social profiles 
        so their audience can find them easily. The app allows 
        for customization, so users can design their page in 
        keeping up with their brand.`,
        image: "linkup",
        tags: "React,SCSS,Firebase",
        link: "https://linkup.page",
    },
    {
        name: "Stoic Widgets",
        description: `iOS 14 widget app built using React Native and Swift. Stoic Widget provides a daily dose of insightful quotes to help users practice and embody stoic virtues throughout their day.`,
        image: "stoic",
        tags: "React Native,SCSS,Swift",
        link: "https://apps.apple.com/ca/app/stoic-widgets/id1541534447",
    },
    {
        name: "Transit Live",
        description: `Winnipeg Transit Live helps you find buses passing by stops around you. Find out if your bus is arriving on-time, early or late easily. Get a live update on upcoming bus schedules at nearby stops.`,
        image: "transit",
        tags: "React,SCSS,IONIC",
        link: "https://apps.apple.com/ca/app/winnipeg-transit-live/id1531948380",
    }
]

export default Projects
