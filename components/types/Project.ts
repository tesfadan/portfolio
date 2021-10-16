interface Project {
    "name": string,
    "description": string,
    "image": string,
    "url": string,
    "tags": string
    "links": { link: string, label: string }[],
    "label": string,
    "study": {
        "heading": string,
        "subHeading": string,
        "coverImage": string,
        "about": string,
        "process": string,
        "media": string[]
    }
}

export default Project