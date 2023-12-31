import React from 'react'
import avatar from '../../assets/default_avatar.png'


const useImage= (initialImage: string) => {
     const [imgSrc, setImgSrc] = React.useState(initialImage)

     React.useEffect(() => {
        if (initialImage === '') {
            setImgSrc(avatar)
        }
        setImgSrc(`http://localhost:8000/${initialImage}`)
     }, [initialImage])


     const onError = () => {
        setImgSrc(avatar)
     }

    return {
        imgSrc, onError
    }
}

export default useImage