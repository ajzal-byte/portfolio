export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Keeping clients involved and having candid conversations every step of the way",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Time zones pose no challenges",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an AI SaaS Application",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Snipp - Next.js Self Blog App",
    des: "Snipp is a personal blog platform built with Next.js, featuring an integrated social login experience powered by Auth.js.",
    img: "/snipp.png",
    iconLists: [
      "/next.svg",
      "/js.svg",
      "/mongoose.svg",
      "/mongodb.svg",
      "/next-auth.svg",
    ],
    link: "https://snipp-blog.vercel.app",
  },
  {
    id: 2,
    title: "heeder - Ecommerce App",
    des: "heeder is a e-commerce web application developed using Node.js, Express.js, and MongoDB",
    img: "/heeder.png",
    iconLists: [
      "/nodejs.svg",
      "/js.svg",
      "/express.svg",
      "/mongodb.svg",
      "/ejs.svg",
    ],
    link: "https://heeder.store",
  },
  {
    id: 3,
    title: "Bello - MERN Chat App",
    des: "Bello is a real-time messaging app built with MERN, Socket.io, TailwindCSS, and Zustand.",
    img: "/bello.png",
    iconLists: [
      "/mongodb.svg",
      "/express.svg",
      "/react.svg",
      "/tailwind.svg",
      "/socket.svg",
    ],
    link: "https://chat-app-mern-mz0h.onrender.com",
  },
  {
    id: 4,
    title: "BargainBuddy - Amazon Price Tracker",
    des: "This Next.js app enables users to track Amazon product prices and receive email alerts when prices drop.",
    img: "/bb.png",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tailwind.svg",
      "/mongodb.svg",
      "/nm.svg",
    ],
    link: "https://bargain-buddy-beta.vercel.app",
  },
  {
    id: 5,
    title: "Cue - Fullstack Next.js App",
    des: "cue is a Next.js-powered web app that enables users to discover, share and collaborate on AI writing prompts.",
    img: "/cue.png",
    iconLists: [
      "/next.svg",
      "/js.svg",
      "/tailwind.svg",
      "/mongoose.svg",
      "/mongodb.svg",
    ],
    link: "https://cue-prompts.vercel.app",
  },
  {
    id: 6,
    title: "Cryptoverse - Everything about Crypto",
    des: "Cryptoverse is a React-based app that provides real-time cryptocurrency data, news and insights.",
    img: "/crypto.png",
    iconLists: [
      "/react.svg",
      "/js.svg",
      "/react-router.svg",
      "/redux.svg",
      "/ant-d.svg",
    ],
    link: "https://cryptoverse-react-guy.vercel.app",
  },
];

export const certifications = [
  {
    title: "Back End Development and APIs - FreeCodeCamp",
    description:
      "Gained expertise in Node.js back-end development and API creation, utilizing Express framework, MongoDB, and Mongoose.",
    link: "https://www.freecodecamp.org/certification/ajzal-dev/back-end-development-and-apis",
    img: "/freecodecamp-certificate.svg",
  },
  {
    title: "Using MongoDB with Node.js - MongoDB University",
    description:
      "Mastered MongoDB integration within Node.js applications, covering connection setup, CRUD operations, and aggregation techniques.",
    link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/6a340975-222d-4aa5-bef3-e72b86a15612-ajzal-muhammed-ff443142-c424-4cda-975e-20e20169634c-certificate.pdf",
    img: "/mongodb-certificate.svg",
  },
];

export const testimonials = [
  {
    quote:
      "I've known Ajzal for some time now, and I'm always amazed by how quickly he picks up new skills in web development. He's a fast learner who isn't afraid to ask questions to improve. What I admire most about Ajzal is his willingness to take on challenges. He faces them with determination and always finds solutions. In the world of web development, having someone like him on your team is a real advantage. He's adaptable, resilient, and always ready to learn more.",
    name: "Muhammed Fasil",
    title: "Full-Stack Developer at VortexWeb",
    img: "/fasil.jpeg",
  },
  {
    quote:
      "Working with Ajzal was a fantastic experience. Despite being relatively new to some of the technologies we used, his enthusiasm and willingness to learn were truly impressive. Ajzal quickly picked up Next.js and implemented it effectively in our project. He has a natural curiosity that drives him to explore and master new tools and techniques.",
    name: "Eldho George",
    title: "Junior Technical Engineer at DataNimbus",
    img: "/eldho.jpeg",
  },
  {
    quote:
      "I had the opportunity to collaborate with Ajzal on a project that involved web scraping and data integration. Although he was still getting acquainted with these areas, his eagerness to dive in and learn was remarkable. His curiosity and proactive mindset make him an invaluable person to work with, always ready to tackle new challenges and contribute innovative ideas.",
    name: "Sreeraj C R",
    title: "Flutter Developer at Levon Techno Solutions",
    img: "/sreeraj.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Intern",
    desc: "Self learning platform where industry experts conduct weekly reviews. Developed multiple small and large scale applications.",
    company: "Brototype",
    time: "Jul 2023 - Present",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    desc: "Worked with clients with their ideas, from initial project planning to deployment on the web.",
    company: "Self employed",
    time: "Jan 2024 - Present",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ajzal-byte",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/ajzal_byte",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ajzal-muhammed/",
  },
];
