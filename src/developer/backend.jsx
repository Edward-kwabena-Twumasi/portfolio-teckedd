
import SkillCard from "./components/skillcard"
import {beskills} from "../data.js"
import {beskilllevels} from "../data.js"
import SkillLevel from "./components/skilllevel"



const Backend=()=>{
    return (
        <div className="flex flex-col pl-14 h-full">
            <h1 className="title text-3xl text-white font-bold m-3">Back end skills</h1>
            <div className="flex justify-between">
                <div>
                {
                beskills.map((skill,idx)=>{
                    return  <SkillCard icon={skill.icon} title={skill.title} body={skill.description} > 
                    </SkillCard>
                })
                }
                </div>
                <div>
                {
                beskilllevels.map((beskilllevel,idx)=>{
                    return  <SkillLevel  title={beskilllevel.title} level={beskilllevel.level} > 
                    </SkillLevel>
                })
                }
                </div>   

            </div>
           


        </div>
    )
}

export default Backend 