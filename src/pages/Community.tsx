import { useEffect, useState } from "react";
import type { project } from "../Types/Index";
import { dummyGenerations } from "../assets/assets";
import { Loader2Icon } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const Community =()=>{
    const[projects,setProjects]=useState<project[]>([]);
    const[loading,setLoading]=useState(true)
    const fetchProjects=async()=>{
        setTimeout(()=>{
            setProjects(dummyGenerations);
            setLoading(false);
    },3000)

    }
    useEffect(()=>{
        fetchProjects();
    },[])
    return loading ? (
        <div className="flex items-center justify-center min-h-screen">
            <Loader2Icon  className="size-7 animate-spin text-indigo-400"/>
            </div>
    ) :(
        <div className=" min-h-screen text-white p-6 md:p-12 my-28"> 
        <div className="max-w-6xl mx-auto">
            <header className="mb-12">
                <h1 className="text-3xl md:text-4xl font-semibold mb-4">Community</h1>
                <p className="text-gray-400">See what others are creating with this</p></header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project)=>(
                       <ProjectCard key={project.id} gen={project} setGenerations={setProjects} forCommunity={true} />
                    ))}
                </div>
                 </div></div>
    )
}
export default Community;