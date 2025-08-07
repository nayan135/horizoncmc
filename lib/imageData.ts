// Image data configuration for CMC Club website
// Update these paths when you add new images to the public folder

export interface TeamMember {
  name: string;
  role: string;
  image?: string; // Optional - will use default icon if not provided
  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface ProjectData {
  title: string;
  description: string;
  status: "Completed" | "Ongoing";
  image?: string; // Optional - will use placeholder if not provided
}

export interface EventData {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  image?: string; // Optional - will use placeholder if not provided
}

export interface PresidentData {
  name: string;
  title: string;
  description: string;
  vision: string;
  image?: string; // Optional - will use default icon if not provided
  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

// President Information
export const presidentData: PresidentData = {
  name: "Netra Bhusal",
  title: "President, CMC Club",
  description: "Leading the CMC Club with passion and dedication, Netra brings innovative ideas and strong leadership to drive our club towards excellence. With a vision to create meaningful impact in the automotive and technology space.",
  vision: "Innovation through Collaboration",
  image: "/team/president-image.jpg", 
  social: {
    facebook: "https://www.facebook.com/madhu.busal",
    instagram: "https://www.instagram.com/netra_bhusal16/",
    linkedin: "#"
  }
};

// Team Members Data
export const teamMembers: TeamMember[] = [
  {
    name: "Sushant Gyawali",
    role: "IP-President",
    image: "./sushant.png", 
    social: {
      facebook: "",
      instagram: "",
      linkedin: ""
    },
  },
   {
    name: "Rijan Shrestha ",
    role: "Vice-President ",
    image: "./rijan.jpeg", 
    social: {
      facebook: "",
      instagram: "",
      linkedin: ""
    },
  },
  {
    name: "Aakriti sapkota",
    role: "Secretary ",
    image: "./AakritiSapkota.jpeg", 
    social: {
      facebook: "",
      instagram: "",
      linkedin: ""
    }
    
  },
    {
    name: "Faizan Khan",
    role: "leader of 12 Morning",
    image: "/faizan.jpeg",
    social: {
      facebook: "",
      instagram: "",
      linkedin: ""
    }
  },
    {
    name: "karishma Chaudhary",
    role: "Joint Secretary",
    image: "",
    social: {
      facebook: "https://www.facebook.com/share/175geE2oSc/?mibextid=wwXIfr",
      instagram: "",
      linkedin: ""
    }
  },
    {
    name: "Kushal Bhandari",
    role: "Treasurer",
    image: "./kushal.jpeg",
    social: {
      facebook: "",
      instagram: "",
      linkedin: ""
    }
  },
    {
    name: "Sadikshya Sharma",
    role: " Joint Treasurer",
    image: "./sadikshya.jpeg",
    social: {
      facebook: "",
      instagram: "",
      linkedin: ""
    }
  },
    {
    name: "Pawan Chaudhary ",
    role: "Head of Director",
    image: "/pawan.jpg",
    social: {
      facebook: "https://www.facebook.com/share/16rbdc6JKa/",
      instagram: "https://www.instagram.com/mr_pawan069",
      linkedin: ""
    }
  },
  {
    name: "Santosh Bhandari",
    role: "IT Head",
    image: "/santosh.jpg",
    social: {
      facebook: "https://www.facebook.com/share/1C3cmLcgJR/",
      instagram: "https://www.instagram.com/the_santosh97",
      linkedin: ""
    }
  },


  {
    name: "Rashmi Bishowkarma",
    role: "Cultural Department Head",
    image: "./rashmi.jpg",
    social: {
      facebook: "",
      instagram: "",
      linkedin: ""
    }
  },
  {
    name: "Sandeep Pandey",
    role: "Education & Sanitation Head",
    image: "./sandeep.jpg",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "#"
    }
  }

];

// Advisors Data
export const advisorsData: TeamMember[] = [
  {
    name: "Loknath Upadhyaya",
    role: "Principal ",
    image: "/loknath.jpg", // Add image to public/advisors/ folder
  },
  {
    name: "Prakash Khanal",
    role: "+2 Management Coordinator",
    image: "/prakash.jpg", // Add image to public/advisors/ folder
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Nishedh Jung Karki",
    role: "Assistant Coordinator ",
    image: "/nishdesh.jpg", // Add image to public/advisors/ folder
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Ganesh Bhandari",
    role: "Club  Coordinator",
    image: "/ganesh.jpg", // Add image to public/advisors/ folder
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }
  }
];

// Projects Data
export const projectsData: ProjectData[] = [
  {
    title: "Smart Campus Navigation",
    description: "An innovative mobile app that helps students navigate the campus efficiently using AR technology.",
    status: "Completed",
    image: "/projects/smart-campus-navigation.jpg" // Add image to public/projects/ folder
  },
  {
    title: "Eco-Friendly Transport Initiative",
    description: "Promoting sustainable transportation solutions within the college community.",
    status: "Ongoing",
    image: "/projects/eco-transport.jpg"
  },
  {
    title: "Tech Workshop Series",
    description: "Monthly workshops covering latest technologies and industry trends for students.",
    status: "Ongoing",
    image: "/projects/tech-workshops.jpg"
  },
  {
    title: "Alumni Connect Platform",
    description: "A digital platform connecting current students with alumni for mentorship and career guidance.",
    status: "Completed",
    image: "/projects/alumni-connect.jpg"
  }
];

// Events Data
export const eventsData: EventData[] = [
  {
    title: "Tech Innovation Summit 2024",
    date: "March 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Main Auditorium",
    description: "Annual summit featuring latest tech trends and innovations",
    category: "Conference",
    image: "/events/tech-summit-2024.jpg" // Add image to public/events/ folder
  },
  {
    title: "AI & Machine Learning Workshop",
    date: "March 22, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Computer Lab 1",
    description: "Hands-on workshop on AI and ML fundamentals",
    category: "Workshop",
    image: "/events/ai-ml-workshop.jpg"
  },
  {
    title: "Startup Pitch Competition",
    date: "April 5, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Innovation Hub",
    description: "Students pitch their startup ideas to industry experts",
    category: "Competition",
    image: "/events/startup-pitch.jpg"
  },
  {
    title: "Industry Expert Talk Series",
    date: "April 12, 2024",
    time: "3:00 PM - 4:30 PM",
    location: "Seminar Hall",
    description: "Industry leaders share insights and career guidance",
    category: "Seminar",
    image: "/events/expert-talk.jpg"
  },
  {
    title: "Hackathon 2024",
    date: "April 20-21, 2024",
    time: "24 Hours",
    location: "Tech Center",
    description: "48-hour coding marathon with exciting prizes",
    category: "Competition",
    image: "/events/hackathon-2024.jpg"
  },
  {
    title: "Alumni Networking Event",
    date: "May 3, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "College Grounds",
    description: "Connect with successful alumni and expand your network",
    category: "Networking",
    image: "/events/alumni-networking.jpg"
  }
];

// Helper function to get image with fallback
export const getImageWithFallback = (imagePath?: string, defaultIcon?: React.ReactNode) => {
  return imagePath || null;
};
