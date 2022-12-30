import SkillCard from "./components/skillcard"
import {skills} from "../data.js"
import {skilllevels} from "../data.js"
import SkillLevel from "./components/skilllevel"



const Frontend=()=>{
    return (
        <div className="flex flex-col pl-14 h-full">
            <h1 className="title text-3xl text-white font-bold m-3">Front end skills</h1>
            <div className="flex justify-between ">
                <div>
                {
                skills.map((skill,idx)=>{
                    return  <SkillCard icon={skill.icon} title={skill.title} body={skill.description} > 
                    </SkillCard>
                })
                }
                </div>
                <div>
                {
                skilllevels.map((skilllevel,idx)=>{
                    return  <SkillLevel  title={skilllevel.title} level={skilllevel.level} > 
                    </SkillLevel>
                })
                }
                </div>   

            </div>
           


        </div>
    )
}

export default Frontend 