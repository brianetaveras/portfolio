import React from 'react';
import Gallery from 'react-grid-gallery';


export default function Media(props){
    console.log(props);
    return(
        <div className="project-gallery">
            <Gallery  images={props.photos.map(photo=>{
                return {
                    src: `https://api.briantastic.com/${photo.path}`,
                    thumbnail: `https://api.briantastic.com/${photo.path}`,
                    thumbnailWidth: 320,
                    thumbnailHeight: 174,

                }
            })}/>
        </div>
    )
}