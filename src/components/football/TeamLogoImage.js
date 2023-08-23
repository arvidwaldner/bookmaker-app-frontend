import React, {Suspense} from 'react'
import {useImage} from 'react-image'

function TeamLogoImageComponent({teamLogoSrc}){
      
    const {src} = useImage({
        srcList: teamLogoSrc,
      })
    
      return <img src={src} />
   
}

export default TeamLogoImageComponent;