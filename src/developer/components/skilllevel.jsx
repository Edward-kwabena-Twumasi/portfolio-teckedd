
const SkillLevel=({title,level,index})=>{
    const val=level;
    return (
        <div className="level w-[500px] h-auto flex flex-col text-white m-3 p-4 rounded-md" key={index}>
            <div className="flex justify-between gap-5 h-6 w-full">
                <div className="title font-bold">
                {title}
                </div>
                <div className="title font-bold">
                {level}
                </div>
            </div>
             <div className=" mt-3 h-2 rounded-full bg-slate-400 text-sm w-full">
                 <div className=" h-full bg-blue-500 rounded-full" style={{width:val}}>

                 </div>
            </div>

        
        </div>
    )
}

export default SkillLevel