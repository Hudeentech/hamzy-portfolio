// Mock Data for Hudeen Portfolio

// Helper to get random image from unsplash for placeholders
const unsplash = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`;

export const heroData = [
  {
    fade: "CREATIVE",
    headingSalutation: "HELLO, I'M",
    name: "DANESI HAMZAH",
    summary: "A passionate Creative Developer & UI/UX Designer crafting digital experiences that blend aesthetic excellence with functional precision. I turn complex problems into elegant, user-centric solutions.",
    socialMedia: [
      { platform: "github", url: "https://github.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "instagram", url: "https://instagram.com" }
    ]
  }
];

export const aboutData = [
  {
    contrast: "WHO AM I?",
    title: "I am a creative director and designer based in the digital realm.",
    imgUrl: unsplash("1507003211169-0a1dd7228f2d?w=800&h=800"), // Placeholder portrait
  }
];

export const servicesData = [
  {
    heading: "UI/UX Design",
    summary: "Crafting intuitive and aesthetically pleasing interfaces that drive user engagement and satisfaction.",
    icon: "https://cdn-icons-png.flaticon.com/512/1260/1260111.png"
  },
  {
    heading: "Web Development",
    summary: "Building robust, scalable, and high-performance websites using the latest technologies.",
    icon: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png"
  },
  {
    heading: "Brand Identity",
    summary: "Developing unique and memorable brand identities that resonate with your target audience.",
    icon: "https://cdn-icons-png.flaticon.com/512/1583/1583162.png"
  },
  {
    heading: "Motion Design",
    summary: "Adding life to your digital products with smooth and captivating animations.",
    icon: "https://cdn-icons-png.flaticon.com/512/2928/2928883.png"
  }
];

export const projectData = [
  {
    projectName: "E-Commerce Reimagined",
    desc: "A modern approach to online shopping with a focus on ease of use and visual appeal.",
    images: unsplash("1460925895917-afdab827c52f?w=800&h=600"),
    tag: "web",
    liveDemo: "https://example.com",
    overview: "This project involved a complete redesign of a legacy e-commerce platform. The goal was to improve conversion rates by streamlining the checkout process and modernizing the visual language."
  },
  {
    projectName: "FinTech Dashboard",
    desc: "A comprehensive dashboard for monitoring financial assets and market trends in real-time.",
    images: unsplash("1551288049-bebda4e38f71?w=800&h=600"),
    tag: "ui",
    liveDemo: "https://example.com",
    overview: "Designed for a high-frequency trading firm, this dashboard aggregates complex data streams into actionable insights. The focus was on data visualization and rapid interactions."
  },
  {
    projectName: "Travel Companion App",
    desc: "Mobile application designed to assist travelers in planning and journaling their trips.",
    images: unsplash("1469854523086-cc02fe5d8800?w=800&h=600"),
    tag: "ui",
    liveDemo: "https://example.com",
    overview: "A holistic travel app that handles bookings, itinerary planning, and photo journaling. The UI captures the excitement of travel with vibrant imagery and playful interactions."
  },
  {
    projectName: "Portfolio Template",
    desc: "A highly customizable portfolio template for creatives to showcase their work.",
    images: unsplash("1545239351-ef35f43d514b?w=800&h=600"),
    tag: "web",
    liveDemo: "https://example.com",
    overview: "Built with React and Framer Motion, this template offers smooth page transitions and a modular component architecture, making it easy for developers to adapt."
  }
];

export const experienceWallpaperData = [
  {
    heading: "Building Digital",
    contrast1: "PRODUCTS",
    contrast2: "BRANDS",
    contrast3: "EXPERIENCES",
    wallpaper: unsplash("1550751827-4bd374c3f58b?w=1600&h=900")
  }
];

export const experienceYearData = [
  {
    year: "2023",
    skills: [
       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
    ]
  },
  {
    year: "2022",
    skills: [
       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    ]
  },
  {
    year: "2021",
    skills: [
       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
    ]
  }
];

export const testimonialData = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Product Manager",
    company: "TechFlow",
    message: "Hudeen transformed our vague requirements into a stunning, functional reality. The attention to detail was impeccable.",
    pictureUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    submissionDate: "2023-11-15"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "CEO",
    company: "Creative Pulse",
    message: "Working with Hudeen was a breeze. He brought fresh ideas to the table and executed them perfectly.",
    pictureUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    submissionDate: "2023-10-02"
  },
  {
    id: 3,
    name: "David Chen",
    role: "CTO",
    company: "StartUp Inc",
    message: "Exceptional coding skills and a great eye for design. Hudeen is a rare breed of developer who gets both sides.",
    pictureUrl: "https://randomuser.me/api/portraits/men/11.jpg",
    submissionDate: "2023-09-20"
  }
];

export const footerData = {
  headline: "Let's Build Something Amazing Together",
  links: [
    { title: "LinkedIn", url: "https://linkedin.com" },
    { title: "GitHub", url: "https://github.com" },
    { title: "Instagram", url: "https://instagram.com" },
    { title: "Twitter", url: "https://twitter.com" }
  ],
  buttonText: "Let's Talk"
};

export const resumeData = {
   url: "#", // Placeholder for now
   title: "Hudeen_CV_2024"
};

export const skillsData = [
  { icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { icons: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

export const aboutPageData = {
  name: "Hudeen",
  bio: "I am a creative developer with a passion for building beautiful and functional websites. I have a background in both design and development, which allows me to create unique digital experiences.",
  imageUrl: [
    unsplash("1507003211169-0a1dd7228f2d?w=800&h=800"),
    unsplash("1500648767791-00dcc994a43e?w=800&h=800")
  ],
  otherInfo: {
    age: "25",
    location: "New York, NY",
    occupation: "Software Engineer",
    language: "English, Spanish",
    hobbies: ["Photography", "Traveling", "Gaming"],
    skills: ["React", "Node.js", "Design"],
    experience: "Over 5 years of experience in full-stack development, working with clients from around the globe to deliver high-quality software solutions."
  }
};

export const projectPageData = [
  {
    _id: "1",
    projectName: "E-Commerce Reimagined",
    desc: "A modern approach to online shopping.",
    imageUrl: unsplash("1460925895917-afdab827c52f?w=800&h=600"),
    github: "https://github.com",
    demoLink: "https://example.com",
    behance: "https://behance.net",
    tag: "web",
    case: unsplash("1556740738-b6a63e27c4df?w=800&h=600"),
    case2: unsplash("1556742111-a301076d9d18?w=800&h=600"),
    overview: "This project involved a complete redesign of a legacy e-commerce platform.",
    conclusion: "The project was a huge success, resulting in a 20% increase in sales."
  },
  {
    _id: "2",
    projectName: "FinTech Dashboard",
    desc: "Real-time financial data visualization.",
    imageUrl: unsplash("1551288049-bebda4e38f71?w=800&h=600"),
    github: "https://github.com",
    demoLink: "https://example.com",
    behance: "https://behance.net",
    tag: "ui",
    case: unsplash("1551288049-bebda4e38f71?w=800&h=600"),
    case2: unsplash("1551288049-bebda4e38f71?w=800&h=600"),
    overview: "Designed for a high-frequency trading firm, this dashboard aggregates complex data.",
    conclusion: "The client was extremely satisfied with the performance and design."
  }
];
