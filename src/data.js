
import {FaPen} from "react-icons/fa"
import {FaCode} from "react-icons/fa"
import {FaCss3} from "react-icons/fa"
import {BiTestTube} from "react-icons/bi"
import {FaDatabase} from "react-icons/fa"
import {BiData} from "react-icons/bi"
import {BiCloud} from "react-icons/bi"
import {FaAppStore} from "react-icons/fa"
import electionHuburl from "./assets/electionhub.PNG";
import treckTrafficUrl from "./assets/trecktraffic.PNG";
import phishingurl from "./assets/phishing_detect.png";
import cnnurl from "./assets/cnn_classify.jpeg";
import rnnurl from "./assets/rnn_text.png";
import ecommerceurl from "./assets/ecommerce.png";
import travelmates from "./assets/travelmates.png";
import stocktakingurl from "./assets/stock-tacking.png";
import smartfarmUrl from "./assets/smart-farming.png";
import notesUrl from "./assets/notes.png";






export const skills=[
  
       {
         "icon":<FaPen/>,
         "title":"UI/UX Design",
         "description":"Designing great looking, user-friendly and highly interactive interfaces using figma"
    
          },
          {
            "icon":<FaCode/>,
            "title":"Web Development",
            "description":"Transforming a good looking website design into good-looking pixel perfect website"
       
          },
          {
            "icon":<FaCss3/>,
            "title":"Styling and Animation",
            "description":"Make websites look great by adding styles and animations with css,intersection observer api and tailwindcss"
       
          },
          {
            "icon":<BiTestTube/>,
            "title":"UI testing",
            "description":"Testing my website interfaces to ensure its usability and interactivity working as expected"
       
          },

];
export const beskills=[
  
   {
    "icon":<FaDatabase/>,
    "title":"Database Design and Management",
    "description":"Designing effective databases for data storage and retrieval"

     },
     {
       "icon":<BiData/>,
       "title":"Data fetching",
       "description":"Fetching data from apis and existing databases for website"
  
     },
     {
       "icon":<FaAppStore/>,
       "title":"RESTful api development",
       "description":"Develop custom apis for applications to work with data efficiently"
  
     },
     {
       "icon":<BiCloud/>,
       "title":"Cloud and DevOps",
       "description":"Containerize apps, deploy to the cloud and use agile technologies to speed up development"
  
     },

];

export const skilllevels=[
  
  {
   
    "title":"HTML",
    "level":"100%"

     },
     {
      
       "title":"CSS",
       "level":"90%"
  
     },
     {
      
       "title":"JAVASCRIPT",
       "level":"90%"
  
     },
     {
       
       "title":"TYPESCRIPT",
       "level":"80%"
  
     },
     {
       
      "title":"REACT",
      "level":"80%"
 
    },
    {
       
      "title":"VUE",
      "level":"40%"
 
    },
    {
       
      "title":"JEST",
      "level":"80%"
 
    },

];
export const beskilllevels=[
  
  {
   
    "title":"Postgresql",
    "level":"100%"

     },
     {
      
       "title":"Mongodb",
       "level":"90%"
  
     },
     {
      
       "title":"Firebase",
       "level":"90%"
  
     },
     {
       
       "title":"Nodejs",
       "level":"80%"
  
     },
     {
       
      "title":"Django",
      "level":"80%"
 
    },
    {
       
      "title":"PHP",
      "level":"70%"
 
    },
    {
       
      "title":"RESTFUL APIS",
      "level":"80%"
 
    },
    {
       
      "title":"DOCKER",
      "level":"70%"
 
    },
    {
       
      "title":"KUBERNETES",
      "level":"70%"
 
    },
    {
       
      "title":"AWS",
      "level":"80%"
 
    },

];

export const projects=[
  {
    "title":"Automated Data Archiver",
    "description":"An automated traffic data archiving system",
    "completed":true,
    "image":treckTrafficUrl
  },
  {
    "title":"Election Info System",
    "description":"A platform for relieable election information",
    "completed":false,
    "image":electionHuburl
  },
  {
    "title":"Stock Taking Application",
    "description":"A stock taking app built for a client",
    "completed":false,
    "image":stocktakingurl
  },
  {
    "title":"E-Commerce website",
    "description":"A platform for selling organic foods with payment integration",
    "completed":true,
    "image":ecommerceurl
  },
  {
    "title":"Notes-taking app",
    "description":"A minimalistic app for notes taking with cool features",
    "completed":true,
    "image":notesUrl
  },
  {
    "title":"Integrated ticketing system",
    "description":"Book bus,flight and train all on one intelligent platform",
    "completed":true,
    "image":travelmates
  }
]