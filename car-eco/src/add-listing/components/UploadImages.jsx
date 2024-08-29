// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from 'react'
import PropTypes from "prop-types";
import  {storage}  from '../../../configs/firebaseConfing';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { IoMdCloseCircle } from "react-icons/io";
import { db } from '../../../configs';
import { CarImages } from '../../../configs/schema';
const UploadImages = ({triggerUploadImages,setLoading}) => {
    const [selectedFiles,setSelectedFiles] = useState([])
    useEffect(() =>{
        if(triggerUploadImages){
            onUploadImages()
        }
    })

    const onFileSelected = (event)=>{
        const files = event.target.files
        console.log(files);
        for (let i=0; i<files.length; i++){
            const file = files[i];
            setSelectedFiles((perv)=>[...perv, file])
            // const objecturl = URL.createObjectURL(file)
        }
        
    }
    // eslint-disable-next-line no-unused-vars
    const onImageRemove=(image,index)=>{
        const result = selectedFiles.filter((item)=>item!= image)
        setSelectedFiles(result)
    }
    const onUploadImages = ()=>{
        setLoading(true)
         selectedFiles.forEach((file)=> {
            const filename = Date.now() + '.jpeg'
            const storageRef = ref(storage,'car-images/'+filename)
            const metaData = {
                contentType: 'image/jpeg'
            }   
            // eslint-disable-next-line no-unused-vars
            uploadBytes(storageRef,file, metaData).then((snapShot) =>    {
                console.log("uploaded");
                
            // eslint-disable-next-line no-unused-vars
            }).then(res=>{
                getDownloadURL(storageRef).then(async(downloadURL) =>{
                    if(downloadURL){
                        await db.insert(CarImages).values({
                            imageUrl:downloadURL,
                            carListingId:triggerUploadImages
                        })
                    }
                    
                })
            })   
        setLoading(false)
        });
    }
  return (
    <div>
        <h2 className='font-medium text-xl my-3'>Upload car Image</h2>
        <div className=' grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 '>
            {selectedFiles.map((image,index) =>(
                <div key={index}>
                    <h2 className=''><IoMdCloseCircle  className='absolute h-7  text-lg m-1 cursor-pointer hover:shadow-md'
                    onClick={()=>onImageRemove(image,index)}/></h2>
                    <img src={URL.createObjectURL(image)} alt="images list" className=' w-full h-[130] object-cover rounded-xl' />
                </div>
            ))}
            <label htmlFor="upload-images">
                <div className='border rounded-xl border-dotted border-primary bg-slate-200 p-10 cursor-pointer hover:shadow-md'>
                    <h2 className='text-lg text-center text-primary'>+</h2>
                </div>
            </label>
            <input onChange={onFileSelected} type="file" multiple={true} id='upload-images' className='opacity-0'/>
        </div>
    </div>
  )
}

UploadImages.propTypes = {
    triggerUploadImages: PropTypes.any,
    setLoading: PropTypes.any,
  };
export default UploadImages