import { useEffect, useState } from "react";
import { dummyGenerations } from "../assets/assets";
import type { project } from "../Types/Index";
import { Loader2Icon } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { PrimaryButton } from "../components/Buttons";

const MyGeneration =() => {
    const[generations,setGenerations]=useState<project[]>([]);
        const[loading,setLoading]=useState(true)
        const fetchMyGenerations=async()=>{
            setTimeout(()=>{
                setGenerations(dummyGenerations);
                setLoading(false);
        },3000)
    
        }
        useEffect(()=>{
            fetchMyGenerations();
        },[])
    return loading?(
        <div className="flex items-center justify-center min-h-screen">
            <Loader2Icon  className="size-7 animate-spin text-indigo-400"/>
            </div>
        ):(
            <div className=" min-h-screen text-white p-6 md:p-12 my-28"> 
        <div className="max-w-6xl mx-auto">
            <header className="mb-12">
                <h1 className="text-3xl md:text-4xl font-semibold mb-4">My Generations</h1>
                <p className="text-gray-400">View and Manage your AI-generated content</p></header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {generations.map((gen)=>(
                       <ProjectCard key={gen.id} gen={gen} setGenerations={setGenerations}  />
                    ))}
                </div>
                {generations.length===0 && (
                    <div className="text-center py-20 bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-xl font-medium mb-2"> No Generations yet</h3>
                        <p className="text-gray-400 mb-6">Start creating stunning product photos today</p>
                        <PrimaryButton onClick={()=>window.location.href="/generate"}> 
                            Create New  Generations
                        </PrimaryButton>
                    </div>
                )}
                </div>
            </div>
        )
}
export default MyGeneration ;