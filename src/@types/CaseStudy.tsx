
export interface MarkDownBlock {
    blockType: "markdown";
    content: string;
}

export type ImageBlock = {
    blockType: "image";
    url: string,
    alt: string
};

export type VideoBlock = {
    blockType: "video";
    url: string,
    poster: string
};

export interface CaseStudy {
    title: string,
    blurb: string,
    slug: string,
    coverImage: {
        url: string,
        alt: string
    },
    content: MarkDownBlock [] | ImageBlock[] | VideoBlock[]
  }

  export type Block = ImageBlock | MarkDownBlock | VideoBlock