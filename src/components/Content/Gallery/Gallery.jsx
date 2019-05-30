import React from 'react';
import Gallery from "react-photo-gallery";

function importAll(r) {
    return r.keys().map(r);
  }
  
  const staticImages = importAll(require.context('./images', false, /\.(webp)$/));
  const photos=staticImages.map((el)=>{ return{
        src:el,
        width: 4,
        height: 3
  }})

    

const Galleries = () => {
   console.log(staticImages)
  return ( 
        
         
    <Gallery photos={photos} />
        
    );
}
 
export default Galleries;