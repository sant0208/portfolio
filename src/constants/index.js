import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  car,
  ic,
  threejs,
  python,
  java,
  sql,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id : "works",
    title : "Projects",
  },
  {
    id : "contact",
    title : "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Competitive Progammer",
    icon: mobile,
  },
  {
    title: "Problem Solving",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon : java,
  },
  {
    name : "sql",
    icon : sql,
  },
];

const experiences = [
  {
    title: "UG Bachelor of Engineering",
    company_name: "RMK College of Engineering and Technology",
    icon: ic,
    iconBg: "#383E56",
    date: "Augest 2021 - June 2025",
    points: [
      "(6.5+ CGPA*)"
    ],
  },
  {
    title: "12th Standard",
    company_name: "St John's Matirulation  Higher  Secondary School",
    icon: ic,
    iconBg: "#E6DEDD",
    date: "June 2020 - April 2021",
    points: [
      "(78.3%)",
    ],
  },
  {
    title: "10th Standard",
    company_name: "St John's Matirulation  Higher  Secondary School",
    icon: ic,
    iconBg: "#383E56",
    date: "June 2018 - April 2019",
    points: [
      "(71.3%)",
    ],
  },
];

const projects = [
  {
    name: "AI Article Summarizer",
    description:
      " A modern and user-friendly interface, offering an intuitive experience for users and Summarize any kind of article with just one click using the powerful OpenAI model.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "reduxtoolkit",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: car,
    source_code_link: "https://github.com/sant0208/SUMMARIZE_AI.git",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: car,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: car,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences,  projects };
