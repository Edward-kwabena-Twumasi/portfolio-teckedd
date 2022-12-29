import SkillCard from "./components/skillcard"
import {FaEdit} from "react-icons/fa"
import {skills} from "../data.js"


const Frontend=()=>{
    return (
        <div className="flex flex-col pl-14">
            <h1 className="title text-3xl text-white font-bold m-3">Front end skills</h1>
            {
           skills.map((skill,idx)=>{
                return  <SkillCard icon={skill.icon} title={skill.title} body={skill.description} key={idx}> 
                </SkillCard>
              })
            }
           


        </div>
    )
}

export default Frontend 