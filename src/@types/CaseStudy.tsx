
export interface MarkDownBlock {
    blockType: "markdown";
    content: string;
}

export type ImageBlock = {
    blockType: "image";
    url: string,
    alt: string
};

export interface CaseStudy {
    title: string,
    blurb: string,
    slug: string,
    coverImage: {
        url: string,
        alt: string
    },
    content: MarkDownBlock [] | ImageBlock[]
  }