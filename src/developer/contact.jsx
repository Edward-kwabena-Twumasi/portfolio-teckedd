import { FaGithub, FaGoogle, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";

const Contact=()=>{
    return (
           
           <div className="h-full justify-center flex flex-col ">
            <h1 className="self-center m-6 text-white font-semibold">We certainly need to talk or connect. Dont hesitate to reach me.</h1>
            <div className=" w-full mb-0  flex justify-center gap-7">
                        <a target={"blank"} href="mailto:createdliving1000@gmail.com"  className="text-white shadow-2xl text-5xl p-1 rounded-full ">{<FaGoogle/>}</a >
                        <a target={"blank"} href="https://www.linkedin.com/in/edward-twumasi"  className="text-white shadow-2xl text-5xl p-1 rounded-full">{<FaLinkedin/>}</a >
                        <a target={"blank"} href="tel:+233 552489602"  className="text-white shadow-2xl text-5xl p-1 rounded-full">{<FaPhone/>}</a >
                        <a target={"blank"} href="https://github.com/Edward-kwabena-Twumasi"  className="text-white shadow-2xl text-5xl p-1 rounded-full">{<FaGithub/>}</a >
                        <a target={"blank"} href="https://twitter.com/EdwardsTwums"  className="text-white shadow-2xl text-5xl p-1 rounded-full">{<FaTwitter/>}</a > 
            </div> 
           </div>
                 
    );
}

export default Contact;