import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  angular,
  flutter,
  android,
  php,
  web_dev,
  eyepax,
  fiver,
  bank,
  salon,
  dashboard,
  musicPlayer,
  chefapp,
  uikit,puzzle,
  lec1,lec2,
  mail,call,location,
  linkedin,github2,youtube,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const basicDetails = [
  {
    type: "Email",
    icon: mail, // Replace with the actual icon path or use Font Awesome/other icon libraries
    info: "bagyaka.bc@gmail.com",
  },
  {
    type: "Phone",
    icon: call,
    info: "+94 70 336 0166",
  },
  {
    type: "Location",
    icon: location,
    info: "Gampaha, Sri Lanka",
  },
  {
    type: "LinkedIn",
    icon: linkedin,
    info: "Bagya Kaushallya",
    url: "http://www.linkedin.com/in/bagya-kaushallaya-a16828174",
  },
  {
    type: "Github",
    icon: github2,
    info: "Kaushallya",
    url: "https://github.com/Kaushallaya",
  },
  {
    type: "Youtube",
    icon: youtube,
    info: "SL Thadi",
    url: "https://www.youtube.com/@slthadi6621",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web_dev,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Graphic Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "android",
    icon: android,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: angular,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "php",
    icon: php,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Eyepax it consulting (PVT) LTD",
    icon: eyepax,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Follow company and industry standards, including confidentiality and intellectual property guidelines, while adhering to project requirements.",
      "Gather requirements, prepare specs, write efficient code with comments, execute unit tests, and ensure timely task delivery within budgets and timelines.",
      "Test solutions thoroughly before going live and prepare comprehensive documentation, including manuals, diagrams, and flowcharts.",
      "Work closely with team members in a collaborative environment, participate in stand-up meetings, and share meeting notes with stakeholders.",
    ],
  },
  {
    title: "Intern - Software Engineer",
    company_name: "Eyepax it consulting (PVT) LTD",
    icon: eyepax,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - May 2022",
    points: [
      "Developing and maintaining web applications using Script Case which base on PHP.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelancer/Social Media Handler",
    company_name: "Fiver & Local Clients",
    icon: fiver,
    iconBg: "#383E56",
    date: "Jan 2020 - Present",
    points: [
      "Develop and curate engaging content for social media platforms, aligning with the brand’s voice, goals, and audience.",
      "Manage social media profiles across multiple platforms, ensuring timely posting, consistency, and interaction with followers to grow engagement.",
      "Collaborate with clients to understand their goals and create effective social media strategies, including content calendars, campaigns, and promotions.",
      "Track and analyze key performance metrics (e.g., reach, engagement, follower growth), providing regular reports to clients and adjusting strategies accordingly.",
    ],
  },
  {
    title: "Management Trainee",
    company_name: "People's Bank Sri Lanka",
    icon: bank,
    iconBg: "#E6DEDD",
    date: "Jan 2017 - Jan 2018",
    points: [
      "Assist in managing day-to-day banking operations while ensuring compliance with regulatory standards and internal policies.",
      "Build and maintain strong customer relationships by providing excellent service, addressing client needs, and promoting bank products and services.",
      " Analyze financial data and performance metrics to support decision-making processes, preparing reports for senior management.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I know Kaushallaya for past two years as his university teacher. He is an undergraduate student at the Department of Computer Science of Trincomalee Campus. He is a polite, hard-working, enthusiastic and self-motivated person. He consistently managed a good academic performance throughout the semesters. He is a competent student who excels in problem solving and programming, mobile application development and UI designing.",
    name: "Subramaniam Khethika",
    designation: "Senior Lecturer",
    company: "EUSL SriLanka",
    image: "https://media.licdn.com/dms/image/v2/C5103AQEOxDBzfVUr_w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1527697317926?e=1732752000&v=beta&t=vFMyLzaqKmWhpzTI7CgeVLT5LNAuhFWu22dQ2vCUG5Y",
  },
  {
    testimonial:
      "I know Bagya Kaushallaya as a Computer Science undergraduate student at Trincomalee Campus, Eastern University, Sri Lanka when I was working as a Lecturer (probationary). He is a hard-working, enthusiastic and self-motivated person. He is really interested in implementing computer applications and has a positive attitude in his work. I believe that Bagya will be a good team member in a team and will achieve great things in his career. My best wishes to him!.",
    name: "Kalyani Yogeswaranathan",
    designation: "Senior Lecturer",
    company: "EUSL SriLanka",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQHU16pJKXerdw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516549877613?e=1732752000&v=beta&t=NYQs0sejEyd1WwVUli9M3rJIFmV74gftDsLtooiolS0",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Salon Prauge",
    description:
      "I’ve been working on developing a full-fledged B2C platform for Express Hair Salon, where customers can easily view salon services, book appointments, and make secure online payments using Stripe. This platform provides flexibility, allowing customers to book slots from 8:00 AM to 6:00 PM, ensuring that busy schedules are no longer a barrier to great haircuts!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
    ],
    image: salon,
    source_code_link: "https://github.com/Kaushallaya/salon_prauge",
  },
  {
    name: "Admin Dashboard",
    description:
      "Express Hair Salon Admin Dashboard is a comprehensive management tool for salon administrators. It allows easy management of clients, reservations, and stylists. Key features include a calendar for scheduling, drag-and-drop functionality for rescheduling appointments, automated email reminders, and detailed analytics with visual dashboards.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/Kaushallaya/Salon_admin_dashboard",
  },
  {
    name: "Smart Music Player",
    description:
      "New step of my development life with AI assistance.This is a simple music player with AI voice assistance, built using the Alan Flutter SDK. Designed for ease of use, especially at bedtime, it allows users to control their music hands-free, making it a perfect companion for those who want a seamless listening experience while drifting off to sleep.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Alan AI",
        color: "green-text-gradient",
      },
      {
        name: "Dart",
        color: "pink-text-gradient",
      },
    ],
    image: musicPlayer,
    source_code_link: "https://github.com/Kaushallaya/Music_Player_Voice_Assist",
  },
  {
    name: "Digital Chief ",
    description:
      "A complete android app that help to search nearest food shops based on PHI categories with other user’s feedbacks and also include google map navigation to navigate the nearest root. Also guide slides are available. It design by me for special client requirement of Kataragama PHI divisional.",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Adobe XD",
        color: "pink-text-gradient",
      },
    ],
    image: chefapp,
    source_code_link: "https://github.com/Kaushallaya/Digital_Chief_Project",
  },
  {
    name: "Cafeteria App UI kit",
    description:
      "Cafeteria Mobile App UI Kit is a simple and user-friendly design for campus canteens. It allows students to browse menus, place orders, and track them in real-time. Canteen owners can easily manage orders and menus. The app is designed to provide a smooth experience, making food ordering fast and convenient for both students and canteen staff.",
    tags: [
      {
        name: "Adobe XD",
        color: "blue-text-gradient",
      },
      {
        name: "iconfinder",
        color: "green-text-gradient",
      },
    ],
    image: uikit,
    source_code_link: "https://github.com/Kaushallaya/Digital_Chief_Project",
  },
  {
    name: "Brain Master Puzzle Game",
    description:
      "Brain Master Puzzle Game is a fun, simple brain teaser game designed for puzzle lovers. While still in its early stages, the game challenges users with various levels of tricky questions and puzzles to keep their minds sharp. The goal is to progress through levels by solving questions correctly. Though it's small, there's potential for further development, and it's a perfect way to enjoy a quick mental challenge.",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe XD",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
    ],
    image: puzzle,
    source_code_link: "https://github.com/Kaushallaya/Brain-Master-Game",
  },
];

export { basicDetails, services, technologies, experiences, testimonials, projects };
