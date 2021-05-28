import React from 'react'

export default function DataReader() {
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch('https://dk-frontend-test.s3-eu-west-1.amazonaws.com/index.json')
         .then(res => {
            setImages(res)
          })
         .catch(err => console.log('err is: ', err)
     },[])

    console.log(images)
    return (
        <div>
            love
        </div>
    )
}
