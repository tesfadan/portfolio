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
        description: `Linkup is a web application created to help content creators share more than one link through their social media bio. Creators use linkup to provide their audience with multiple links to their content all over the internet. Users easily sign in using Google or Facebook and setup their page in under 5 minutes. The app allows users to customize the look and feel of their page so it fits their brand.`,
        image: "/assets/images/projects/linkup.png",
        tags: "React,SCSS,Firebase",
        link: "https://linkup.page",
        // sourceCode: "https://linkup.page"
    },
    {
        name: "Stoic Widgets",
        description: `iOS 14 widget app built using React Native and Swift. Stoic Widget provides a daily dose of insightful quotes to help users practice and embody stoic virtues throughout their day.`,
        image: "/assets/images/projects/stoic.png",
        tags: "React Native,SCSS,Swift",
        link: "https://apps.apple.com/ca/app/stoic-widgets/id1541534447",
        // sourceCode: "https://apps.apple.com/ca/app/stoic-widgets/id1541534447"
    },
    {
        name: "Transit Live",
        description: `Winnipeg Transit Live helps you find buses passing by stops around you. Find out if your bus is arriving on-time, early or late easily. Get a live update on upcoming bus schedules at nearby stops.`,
        image: "/assets/images/projects/transit.png",
        tags: "React,SCSS,IONIC",
        link: "https://apps.apple.com/ca/app/winnipeg-transit-live/id1531948380",
        // sourceCode: "https://apps.apple.com/ca/app/winnipeg-transit-live/id1531948380"
    },
    {
        name: "Modern Color",
        description: `
        Modern Color is a web application I built to create and 
        store color schemes for my design work. It uses Vibrant.js 
        to extract prominent colors from an image. It also uses 
        Brain.js to check for contrast values for a better user 
        experience. The color schemes are saved for anyone to access 
        from anywhere.
        `,
        image: "/assets/images/projects/color.png",
        tags: "React,SCSS,IONIC",
        link: "moderncolor.cc",
        sourceCode: "https://github.com/tesfadan/color"
    }
]

export default Projects