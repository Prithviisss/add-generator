import { useState } from "react";
import Title from "../components/Title";
import UploadZone from "../components/UploadZone";
import { RectangleVerticalIcon } from "lucide-react";

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




        <div className="w-full">
           <div className="mb-4">
            <label htmlFor="name" className="block text-sm mb-4"> Project Name</label>
            <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Name your project" required className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm
            border-violet-200/10 focus:border-violet-500/50 outline-none transition-all" />
           </div>
           <div className="mb-4 text-grey-300">
            <label htmlFor="Productname" className="block text-sm mb-4"> Product Name</label>
            <input type="text" id="Productname" value={Productname} onChange={(e)=>setProductName(e.target.value)}  placeholder="Enter product name" required className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm
            border-violet-200/10 focus:border-violet-500/50 outline-none transition-all" />
           </div>
           <div className="mb-4 text-gray-300">
            <label htmlFor="ProductDescription" className="block text-sm mb-4"> Product Description <span className="text-xs text-violet-400">(optional)</span></label>
            <textarea id="ProductDescription" rows={4} value={ProductDescription} onChange={(e)=>setProductDescription(e.target.value)} placeholder="Enter product description" className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm
            border-violet-200/10 focus:border-violet-500/50 outline-none resize-none transition-all" />
           </div>
           <div className="mb-4 text-gray-300">
            <label className="block text-sm mb-4"> Aspect Ratio</label>
            <div className="flex gap-3">
                <RectangleVerticalIcon onClick={()=>setAspectRation('9:16')}
                className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2
                ring-transparent cursor-pointer ${aspectRatio==='9:16'? 'ring-violet-500/50 bg-white/10': ''`} />
            </div>
           </div>
        </div>
    </div>   
   </form>
        </div>
    )
}
export default Generator;