import { Data } from '../types/data.type';
import { Item } from '../types/item.type';

export const ITEMS: Item[] = [
  {
    type: 'school',
    title:
      'UCSD: University of California San Diego - Engineering degree in computer science',
    description:
      '1 semester in the top 18th university in the world (shangairanking) to deepen my knowledge in data science.',
    skills: [
      'Data Structures',
      'Algorithms',
      'Sorting Algorithms',
      'SQL',
      'Java',
    ],
    years: '2024-2025',
    picture: {
      path: 'assets/schools-pictures/ucsd.png',
      altDescrption: 'LOGO UCSD',
    },
    url: 'https://ucsd.edu/',
  },
  {
    type: 'school',
    title: 'ESIEE Paris - Engineering degree in computer science',
    description:
      'Major in Computer Sciences and applications, 3D and medias technologies.',
    skills: [
      'C++',
      'C#',
      'OpenGL',
      'Unity',
      'Python',
      'Machine Learning',
      'Deep Learning',
      'Linux Operating System',
      'Web development',
    ],
    years: '2022-2025',
    picture: {
      path: 'assets/schools-pictures/esiee.png',
      altDescrption: 'LOGO ESIEE Paris',
    },
    url: 'https://www.esiee.fr/',
  },
  {
    type: 'school',
    title: 'ESIEE Paris - Preparatory classes',
    description: 'Preparatory classes required to enter the engineering cycle.',
    skills: ['Mathematics', 'Physics', 'Computer Science'],
    years: '2020-2022',
    picture: {
      path: 'assets/schools-pictures/esiee.png',
      altDescrption: 'LOGO ESIEE Paris',
    },
    url: 'https://www.esiee.fr/',
  },
  {
    type: 'experience',
    title: 'Front-End Engineer in Apprenticeship - Ekino',
    description:
      "Fixing bugs, creating features, giving feedbacks, understanding of the Product Owner's need, writing unit tests, creating and updating documentation.",
    skills: ['HTML', 'CSS', 'Angular', 'Typescript', 'NodeJs', 'Git', 'Docker'],
    years: '2023 - NOW',
    picture: {
      path: 'assets/experiences-pictures/ekino.png',
      altDescrption: 'Logo Ekino',
    },
    url: 'https://www.ekino.fr',
  },
  {
    type: 'experience',
    title: 'Product Owner in Apprenticeship - Ekino',
    description:
      'Creating and testing features, giving user stories to engineers, understanding of the customer need to transform it into web development, helping engineer to accomplish their tasks, identifying bugs and issues.',
    skills: ['Jira', 'Notion', 'Agile'],
    years: '2023 - 2024',
    picture: {
      path: 'assets/experiences-pictures/ekino.png',
      altDescrption: 'Logo Ekino',
    },
    url: 'https://www.ekino.fr',
  },
  {
    type: 'experience',
    title: 'IT engineer in Apprenticeship - Airbus Helicopters',
    description:
      'Cleaning and updating database, creating and updating scripts, creating web pages.',
    skills: ['Powershell', 'Ansible', 'HTML', 'CSS', 'Javascript'],
    years: '2022 - 2023',
    picture: {
      path: 'assets/experiences-pictures/airbus.png',
      altDescrption: 'Logo Airbus',
    },
    url: 'https://www.airbus.com/en/products-services/helicopters',
  },
  {
    type: 'project',
    title: 'Portfolio Generator',
    description:
      'A web application that generates a portfolio for you. You can choose your experience, the skills you want to show, and the projects you want to display. It is a simple and easy way to create a portfolio.',
    skills: [
      'Angular',
      'NodeJs (Express)',
      'Docker',
      'Kubernetes',
      'PostgreSQL',
    ],
    years: '2025',
    picture: {
      path: 'assets/projects-pictures/portfolio-generator.png',
      altDescrption: 'Picture of the app',
    },
    url: 'https://github.com/lombarma/portfolio-generator-v2',
  },
  {
    type: 'project',
    title: 'Intra-school social network',
    description:
      'A social network for my school, to enable associations to post announcements for upcoming events.',
    skills: ['Python', 'Django', 'MySQL', 'Fullstack'],
    years: '2024',
    picture: {
      path: 'assets/projects-pictures/nexus.png',
      altDescrption: 'Logo of the app',
    },
    url: 'https://github.com/MathisPipart/Nexus',
  },
  {
    type: 'project',
    title: 'Prediction of house prices',
    description:
      'Based on the data from Kaggle, I created a model to predict house prices. I used multiple algorithms to predict the price of a house based on its characteristics.',
    skills: ['Python', 'Machine Learning', 'Statistics'],
    years: '2024',
    picture: {
      path: 'assets/projects-pictures/house-prices-prediction.png',
      altDescrption: 'Picture of the app',
    },
    url: 'https://github.com/lombarma/HousePricePredicition',
  },
];

export const DATA: Data = {
  items: ITEMS,
  name: 'Maxime LOMBARDO',
  descriptionAboutYou:
    "I started programming back in 2019. I was in High school and I've chosen IT and digital sciences as my school subject. I was not informed about what programming was. I started with basic html/css website and I loved it." +
    '\n' +
    'Then, in 2020, I logically followed this path and entered an engineering school specializing in IT and computer sciences. Since this date, I learned a lot, over multiple subjects : AI, Assembler, Web development, Software development, Mathematics, electronic and more...\n' +
    '\n' +
    "When I don't learn new skills, I love spending time with friends or play videogames. I also love riding motorcycles.",
  phrases: ['Front-End Engineer at Ekino.', 'Computer Science student'],
  linkGithub: 'https://github.com/lombarma',
  linkEmail: 'mailto:maxime.lombardo2@gmail.com',
  linkLinkedIn: 'https://www.linkedin.com/in/maximelombardo/',
};
