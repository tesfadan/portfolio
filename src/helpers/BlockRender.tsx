import React, { useState } from 'react'
import { Block } from '../@types/CaseStudy'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


export default function BlockRender({block}: {block: Block}) {
    const [focus, setFocus] = useState({
        hover: false
    })

    switch (block.blockType) {
        case "image":
            return  <div className="block">
                        <div className="card image">
                            <img src={block.url} alt={block.alt}/>
                        </div>
                    </div>
        case "video":
            return <div className="block">
                         <div className="card video" onMouseEnter={()=>setFocus({hover: true})} onMouseLeave={()=>setFocus({hover: false})}>
                            <video controls={focus.hover ? true: false} poster={block.poster} width="100%" >
                                <source src={block.url} type="video/mp4" />
                                {/* <source src="path/to/your/video.webm" type="video/webm" /> */}
                                Your browser does not support the video tag.
                            </video>
                         </div>
                    </div>
        default:
            return <div className="block">
                <ReactMarkdown>{block.content}</ReactMarkdown> 
            </div>
    }
}
