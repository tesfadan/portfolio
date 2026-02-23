import React, { useState } from 'react'
import { Block, Layout } from '../@types/CaseStudy'
import ReactMarkdown from 'react-markdown';


const LayoutBlock = ({layout}: {layout: Layout})=>{
    return <>
        {layout.content.map((block, index) => <BlockRender key={`layout-block-${index}`} block={block}/>)}
    </>
}

export default function BlockRender({block}: {block: Block}) {
    const [isVideoHovered, setIsVideoHovered] = useState(false)

    switch (block.blockType) {
        case "image":
            return  <div className="block">
                        <div className="card image">
                            <img src={block.url} alt={block.alt}/>
                        </div>
                    </div>
        case "video":
            return <div className="block">
                         <div className="card video" onMouseEnter={() => setIsVideoHovered(true)} onMouseLeave={() => setIsVideoHovered(false)}>
                            <video loop={block.controls?.loop} muted autoPlay={block.controls?.autoplay} controls={isVideoHovered} poster={block.poster} width="100%" >
                                <source src={block.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                         </div>
                    </div>
        case "layout": 
            return <div className="block twocol">
                <LayoutBlock layout={block} />
            </div>
        default:
            return <div className="block">
                <ReactMarkdown>{block.content}</ReactMarkdown> 
            </div>
    }
}
