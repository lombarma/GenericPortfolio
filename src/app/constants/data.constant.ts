import {Data} from '../types/data.type';
import {Item} from '../types/item.type';

export const ITEMS: Item[] = [
  {
    type:"school",
    title:"UCSD: University of California San Diego - Engineering degree in computer science",
    description: "1 semester in the top 18th university in the world (shangairanking) to deepen my knowledge in data science.",
    skills: ["Data Structures", "Algorithms", "Sorting Algorithms", "SQL", "Java"],
    years: "2024-2025",
    picture: {
      path: "assets/schools-pictures/ucsd.png",
      altDescrption: "LOGO UCSD"
    },
    url:"https://ucsd.edu/"
  },
  {
    type:"school",
    title:"ESIEE Paris - Engineering degree in computer science",
    description: "Major in Computer Sciences and applications, 3D and medias technologies.",
    skills: ["C++", "C#", "OpenGL", "Unity", "Python", "Machine Learning", "Deep Learning", "Linux Operating System", "Web development"],
    years: "2022-2025",
    picture: {
      path: "assets/schools-pictures/esiee.png",
      altDescrption: "LOGO ESIEE Paris"
    },
    url:"https://www.esiee.fr/"
  },
  {
    type:"school",
    title:"ESIEE Paris - BAC+2",
    description: "Preparatory classes required to enter the engineering cycle.",
    skills: ["Mathematics", "Physics", "Computer Sciences"],
    years: "2020-2022",
    picture: {
      path: "assets/schools-pictures/esiee.png",
      altDescrption: "LOGO ESIEE Paris"
    },
    url:"https://www.esiee.fr/"
  },
  {
    type:"experience",
    title:"Front-End Engineer in Apprenticeship - Ekino",
    description: "Fixing bugs, creating features, giving feedbacks, understanding of the Product Owner's need.",
    skills: ["HTML", "CSS", "Angular", "Javascript", "Typescript", "NodeJs", "Git"],
    years: "2024 - NOW",
    picture: {
      path: "assets/experiences-pictures/ekino.png",
      altDescrption: "Logo Ekino"
    },
    url:"https://www.ekino.fr"
  },
  {
    type:"experience",
    title:"Product Owner in Apprenticeship - Ekino",
    description: "Creating and testing features, giving user stories to engineers, understanding of the customer need to transform it into web development, helping engineer to accomplish their tasks, identifying bugs and issues.",
    skills: ["Jira", "Notion", "Agile"],
    years: "2023 - 2024",
    picture: {
      path: "assets/experiences-pictures/ekino.png",
      altDescrption: "Logo Ekino"
    },
    url:"https://www.ekino.fr"
  },
  {
    type:"experience",
    title:"IT engineer in Apprenticeship - Airbus Helicopters",
    description: "Cleaning and updating database, creating and updating scripts, creating web pages.",
    skills: ["Powershell", "Ansible", "HTML", "CSS", "Javascript"],
    years: "2022 - 2023",
    picture: {
      path: "assets/experiences-pictures/airbus.png",
      altDescrption: "Logo Airbus"
    },
    url:"https://www.airbus.com/en/products-services/helicopters"
  },
  {
    type:"experience",
    title:"Warehouseman - Printemps",
    description: "Storage and preparation of items.",
    skills: [],
    years: "Summer 2022",
    picture: {
      path: "assets/experiences-pictures/printemps.png",
      altDescrption: "Logo printemps"
    },
    url:"https://www.printemps.com/fr/fr"
  },
  {
    type:"experience",
    title:"ECT Distribution - Storekeeper",
    description: "Storage of items, preparation of orders, deliveries to customers, selling items.",
    skills: [],
    years: "Summers 2020/2021",
    url:"https://www.google.com/search?q=ect+distribution&rlz=1C5GCEM_enFR1087FR1087&oq=ect+di&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyEAgBEC4YrwEYxwEYgAQYjgUyBggCEEUYQDIGCAMQRRg5MgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg8qAIAsAIA&sourceid=chrome&ie=UTF-8"
  },
  {
    type:"project",
    title:"Tasks Manager",
    description: "A simple tasks manager app with authentification page. You can try with with user:test password:test .",
    skills: ["NodeJS", "ExpressJS", "Javascript", "APIs Restful"],
    years: "2023",
    picture: {
      path: "assets/projects-pictures/tasks-manager.png",
      altDescrption: "Picture of the app"
    },
    url:"https://github.com/lombarma/MyLoginPage"
  },
]

export const DATA: Data = {
  items: ITEMS,
  name: "Maxime LOMBARDO",
  descriptionAboutYou: "I started programming back in 2019. I was in High school and I've chosen IT and digital sciences as my school subject. I was not informed about what programming was. I started with basic html/css website and I loved it." +
    "\n" +
    "Then, in 2020, I logically followed this path and entered an engineering school specializing in IT and computer sciences. Since this date, I learned a lot, over multiple subjects : AI, Assembler, Web development, Software development, Mathematics, electronic and more...\n" +
    "\n" +
    "When I don't learn new skills, I love spending time with friends or play videogames. I also love riding motorcycles.",
  phrases: ["Front-End Engineer at Ekino.", "Computer Sciences student"],
  linkGithub: "https://github.com/lombarma",
  linkEmail: "mailto:maxime.lombardo2@gmail.com",
  linkLinkedIn: "https://www.linkedin.com/in/maximelombardo/",
}

