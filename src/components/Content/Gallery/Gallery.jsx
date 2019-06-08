import React from 'react';
import Gallery from "react-photo-gallery";
import Lightbox from 'react-images';
import styled from "styled-components"

const GalleryContainer=styled.div`
 `

function importAll(r) {
    return r.keys().map(r);
  }
  const staticImages = importAll(require.context('./images', false, /\.(webp)$/));
  
  




  const photos=staticImages.map((el,index)=>{ return{
    width: el.split("-")[1],
    height: el.split("-")[2],
    src:el,
  }})

    

  class Galleryies extends React.Component {
    constructor() {
      super();
      this.state = { currentImage: 0,
                    };
      this.closeLightbox = this.closeLightbox.bind(this);
      this.openLightbox = this.openLightbox.bind(this);
      this.gotoNext = this.gotoNext.bind(this);
      this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
      this.setState({
        currentImage: obj.index,
        lightboxIsOpen: true,
      });
    }
    closeLightbox() {
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false,
      });
    }
    gotoPrevious() {
      this.setState({
        currentImage: this.state.currentImage - 1,
      });
    }
    gotoNext() {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    }
   

    render() {
      console.log(photos)
      return (
        <GalleryContainer>
          <Gallery photos={photos} onClick={this.openLightbox} />
          <Lightbox images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </GalleryContainer>
      )
    }
  }

  export default Galleryies