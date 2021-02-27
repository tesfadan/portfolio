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
        image: "color",
        tags: "React,SCSS,IONIC",
        link: "https://moderncolor.cc",
        sourceCode: "https://github.com/tesfadan/color"
    },
    {
        name: "Tap Tempo",
        description: `
        TapTempo is a music production utility tool for finding BPM 
        (beats per minute). With only two keystrokes or mouse clicks, 
        the javascript code calculates the time difference between 
        the input events and displays the current approximate 
        count, improving accuracy upon additional interaction.
        `,
        image: "tempo",
        tags: "HTML,CSS,JS",
        link: "https://taptempo.netlify.app",
        sourceCode: "https://github.com/tesfadan/Tempo"
    },
    {
        name: "WHATUPRG",
        description: `
        This was one of the many WordPress projects I worked on 
        in my second-year Web Development class in college. 
        The WordPress theme was selected and provided by 
        the instructor, and my job was to design and 
        build a child theme.
        `,
        image: "whatuprg",
        tags: "WordPress,PHP,CSS",
        link: "https://www.behance.net/gallery/100604327/WHATUPRG-Website-Design",
    },
]

export default Projects
