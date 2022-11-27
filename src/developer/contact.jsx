import { AiFillGoogleCircle,AiFillLinkedin,AiOutlineGithub,AiFillPhone,AiOutlineTwitter } from "react-icons/ai";

const Contact=()=>{
    return (
        <div>
            <div className="h-[200px] w-[200px] relative overflow-clip">
                
            </div> 
            <div className="domeoverlay h-[50px] w-screen mb-0  flex justify-center gap-7">
                        <a target={"blank"} href="mailto:createdliving1000@gmail.com"  className="bg-slate-200 shadow-2xl text-3xl ">{<AiFillGoogleCircle/>}</a >
                        <a target={"blank"} href="https://www.linkedin.com/in/edward-twumasi"  className="bg-slate-200 shadow-2xl text-3xl">{<AiFillLinkedin/>}</a >
                        <a target={"blank"} href="tel:+233 552489602"  className="bg-slate-200 shadow-2xl text-3xl">{<AiFillPhone/>}</a >
                        <a target={"blank"} href="https://github.com/Edward-kwabena-Twumasi"  className="bg-slate-200 shadow-2xl text-3xl">{<AiOutlineGithub/>}</a >
                        <a target={"blank"} href="https://twitter.com/EdwardsTwums"  className="bg-slate-200 shadow-2xl text-3xl">{<AiOutlineTwitter/>}</a > 
                </div> 
        </div>
    );
}

export default Contact;