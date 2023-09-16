import {

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
    careercraft,
    classy,
    rhythm,
    chat,


    threejs,
    express,
    bootstrap,
  jquery,
  jwt,
  npm,
  socket,
  nginx,
  postgresql,
  mysql,
  aws,
  firebase,
  digitalocean,
  python,
  java,
  next,
  github,
  postman,
  gmail,
  linkedIn,
  fb,
  instagram,
  netflix
  } from "../assets";
  
  export const navLinks = [
    {
      id: "skills",
      title: "Skills",
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "express",
      icon: express,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "jquery",
      icon: jquery,
    },
    {
      name: "jwt",
      icon: jwt,
    },
    {
      name:'npm',
      icon:npm
    },{
      name:"socket",
      icon:socket
    },{
      name:"nginx",
      icon:nginx
    },{
      name:"postgresql",
      icon:postgresql
    },{
      name:"mysql",
      icon:mysql
    },{
      name:"aws",
      icon:aws
    },{
      name:"firebase",
      icon:firebase
    },{
      name:"digitalocean",
      icon:digitalocean
    },{
      name:"python",
      icon:python
    },{
      name:"java",
      icon:java
    },{
      name:"next",
      icon:next
    },
    {
      name:'GItHub',
      icon:github
    },
    {
      name:'Postman',
      icon:postman
    }

  ];
  
 
  const projects = [
    {
      name: "Career Craft",
      description:
        "This platform is designed to assist IT Field job seekers in crafting and growing their professional careers.It includes Chat, Video interview  and Online test.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
        
        {
          name: "Express js",
          color: "yellow-text-gradient",
        },
        {
          name: "Node js",
          color: "green-text-gradient",
        },
        {
          name: "SocketIO",
          color: "blue-text-gradient",
        },
        {
          name: "WebRTC",
          color: "pink-text-gradient",
        },
        {
          name: "CleanArc",
          color: "blue-text-gradient",
        },
      ],
      image: careercraft,
      source_code_link: "https://github.com/Pranav-0001/career_craft_client",
      liveLink:'https://careercraft.vercel.app/'
    },
    {
      name: "Classy Fashion",
      description:
        "An e-commerce platform specializing in clothing sales. Shop effortlessly with cart and wishlist functionality. Experience secure payments for a seamless shopping experience.",
      tags: [
        {
          name: "HBS",
          color: "orange-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Node",
          color: "yellow-text-gradient",
        },
        {
          name: "Express",
          color: "blue-text-gradient",
        },
        {
          name: "MVC",
          color: "blue-text-gradient",
        },
      ],
      image: classy,
      source_code_link: "https://github.com/Pranav-0001/classy-fashion",
      liveLink:'https://classyfashion.online/'
    },
    {
      name: "Rhytm",
      description: "a captivating music web app built with React and powered by Firebase for seamless data management and authentication. Providing an enjoyable experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "FIrebase",
          color: "yellow-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: rhythm,
      source_code_link: "https://github.com/Pranav-0001/rhythm-music-app",
    },
    {
      name: "Let's Chat",
      description:
        "Dive into the world of real-time communication with my Socket.IO-powered chat application. 🚀🔌 Using the robust MERN stack, I've developed a feature-rich chat platform that offers an immersive experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        
        {
          name: "Node",
          color: "pink-text-gradient",
        },
        {
          name: "Express",
          color: "yellow-text-gradient",
        },
        {
          name: "SocketIO",
          color: "blue-text-gradient",
        },
      ],
      image: chat,
      source_code_link: "https://github.com/Pranav-0001/chat-app-client",
    },
    {
      name: "Netflix Clone",
      description:
        "Developed a Netflix-inspired web application using React, meticulously cloning the UI. Integrated TMDB API for a diverse movie selection, demonstrating proficiency in front-end development and API integration.",
      tags: [
        {
          name: "recat",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "TMDB api",
          color: "blue-text-gradient",
        },

      ],
      image: netflix,
      source_code_link: "https://github.com/Pranav-0001/Netflix_clone",
    },
  ];

  const social=[
    {
      name:"Gmail",
      image:gmail,
      link:'https://mail.google.com/mail/u/0/?fs=1&to=pranavkpz12345@gmail.com&su=SUBJECT&body=BODY&tf=cm'
    },
    {
      name:"LinkedIn",
      image:linkedIn,
      link:'https://www.linkedin.com/in/pranav-chakkalakkal/'
    },
    {
      name:"Github",
      image:github,
      link:'https://github.com/Pranav-0001'
    },
    {
      name:"facebook",
      image:fb,
      link:'https://www.facebook.com/pranavChakkalakkal'
    },
    {
      name:"Instagram",
      image:instagram,
      link:'https://www.instagram.com/iam_pranav_/'
    }
  ]
  
  export {  technologies, projects ,social};
