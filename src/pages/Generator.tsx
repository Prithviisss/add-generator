import { useState } from "react";
import Title from "../components/Title";
import UploadZone from "../components/UploadZone";

const Generator=() => {
    const[name,setName]=useState("");
    const[Productname,setProductName]=useState("");
    const[ProductDescription,setProductDescription]=useState("");
    const[aspectRation,setAspectRation]=useState("9:16");
    const[productImage,setProductImage]=useState<File | null>(null);
    const[modelImage,setModelImage]=useState<File | null>(null);
    const[userprompt,setUserPrompt]=useState("");
    const[isGenerating,setIsGenerating]=useState(false);

    const handlefileChange=(e:React.ChangeEvent<HTMLInputElement>,type:"product" | "model") => {
        if(e.target.files && e.target.files[0]){
            if(type==="product"){
                setProductImage(e.target.files[0]);
            }else{
                setModelImage(e.target.files[0]);
            }
        }
    }
    
    const handleGenerate= async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setIsGenerating(true);
        // Add your generate logic here
    }
    return(
        <div className='min-h-screen text-white p-6 md:p-12 mt-28'>
<form onSubmit={handleGenerate} className="max-w-4xl mx-auto mb-40" >
    <Title heading='Create in-Context Image' description='upload your model and product images to generate stunning short-form videos and social media posts' />

    <div className="flex gap-20 max-sm:flex-col items-start justify-between">
        <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-8 mb-12">
            <UploadZone label="Product Image" file={productImage} onClear={()=>setProductImage(null)} onChange={(e)=>handlefileChange(e, "product")} />
        <UploadZone label="Model Image" file={modelImage} onClear={()=>setModelImage(null)} onChange={(e)=>handlefileChange(e, "model")} />
       
        </div>
        <div>
            <p>
                right col
            </p>
        </div>
    </div>    <button type="submit" disabled={isGenerating} className="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold disabled:opacity-50">
        {isGenerating ? "Generating..." : "Create"}
    </button></form>
        </div>
    )
}
export default Generator;