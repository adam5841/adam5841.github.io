/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const navBar = {
  show: true
}
const mainBody = {
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Adam",
    middleName: "",
    lastName: "An",
    message: " Passionate about changing the world with technology. ",
    icons: [
      {
        image: "fa-linkedin",
        url: "https://www.linkedin.com/in/adam-jaehyun-an/",
      },
      {
        image: "fa-github",
        url: "https://github.com/adam5841",
      },
      {
        image: "fa-facebook",
        url: "https://www.facebook.com/adam.an.73594/",
      },
      {
        image: "fa-instagram",
        url: "https://www.instagram.com/adam_an/",
      },
      
    ],

}
const greeting = {
  username: "Adam",
  title: "Hi all, I'm Adam",
  subTitle: emoji(
    "A passionate Full Stack Software Developer ."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Hashir",
    middleName: "",
    lastName: "Shoaib",
    message: " Passionate about changing the world with technology. ",
    icons: [
      {
        image: "fa-github",
        url: "https://github.com/hashirshoaeb",
      },
      {
        image: "fa-facebook",
        url: "https://www.facebook.com/hashirshoaeb",
      },
      {
        image: "fa-instagram",
        url: "https://www.instagram.com/hashirshoaeb/",
      },
      {
        image: "fa-linkedin",
        url: "https://www.linkedin.com/in/hashirshoaeb/",
      },
      {
        image: "fa-twitter",
        url: "https://www.twitter.com/hashirshoaeb/",
      },
    ],
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, Berkeley",
      logo: require("./assets/images/berkeleylogo.png"),
      subHeader: "Bachelors in Computer Science",
      duration: "August 2020 - May 2024",
      desc: "Coursework: Data Structures, Interpretation of Programs, Efficient Algorithms, Computer Architecture, Database Systems, Discrete Mathematics, Artificial Intelligence, Cloud Computing, Computer Security",
      // descBullets: [
      //   "Coursework: "
      // ]
     
    },
    {
      schoolName: "Irvine High School",
      logo: require("./assets/images/ihslogo.png"),
      duration: "September 2016 - June 2020",

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Verkada",
      companylogo: require("./assets/images/verkadalogo.webp"),
      date: "May 2023 – August 2023",
      desc: "At Verkada, I developed a Swift-based middleware for integrating third-party devices with Verkada’s alarm systems, enhanced the CI/CD pipeline for direct scans from cameras to the app, and automated extensive testing, achieving significant improvements in system performance and user setup efficiency.",
    },
    {
      role: "Software Engineer Intern",
      company: "Grant Thornton",
      companylogo: require("./assets/images/Glogo.png"),
      date: "June 2022 – August 2022",
      desc: "Built a modular data visualization platform using React and D3.js integrated with GraphQL, and collaborated on developing a tax basis calculation tool that improved calculation speed by 17% through optimized algorithms and parallel processing."
    },
    {
      role: "Software Engineer Intern",
      company: "Neck.App",
      companylogo: require("./assets/images/necklogo.png"),
      date: "May 2021 – Sep 2021",
      desc: "Engineered dynamic REST APIs and implemented advanced indexing strategies with Amazon ElasticSearch and Redis to enhance data query performance, significantly improving the application's responsiveness and user experience."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "ORGANIZATIONS AND INITIATIVES I'VE CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/mdb.jpeg"),
      projectName: "Mobile Developers of Berkeley",
      projectDesc: "Community of mobile developers who love solving real-world problems through innovative methods and cutting edge technology.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://mdb.dev/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/joy.png"),
      projectName: "Joy",
      projectDesc: "Joy can accurately recognize your emotions from the sound of your voice (in real-time) and deliver exclusive in-app wellness content from world-renowned experts that is keyed to your real-time emotional needs",
      footerLink: [
        {
          name: "Visit App",
          url: "https://apps.apple.com/us/app/joy-ai-wellness-platform/id1618609385"
        }
      ]
    },
    {
      image: require("./assets/images/bookster.jpeg"),
      projectName: "Bookster",
      projectDesc: "A Flutter application that aims to provide a community for book-lovers to showcase their favorite books and explore.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/adam5841/Bookster"
        }
      ]
    },
    {
      image: require("./assets/images/gavel.png"),
      projectName: "Courtroom",
      projectDesc: "Courtroom provides matchmaking services in order to match clients and pro-bono lawyers/defense attorneys. Clients would submit a basic overview of their case and situation that lawyers would be able to filter through. Lawyers will have a profile describing their expertise and ratings that previous clients can give.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/adam5841/Courtroom"
        }
      ]
    },
    {
      image: require("./assets/images/fire.jpeg"),
      projectName: "FlameVent",
      projectDesc: "Created a CPU-automated fire extinguisher that utilize UV/IR sensors to detect and extinguish kitchen fires. Won 3rd place in Spirit of Innovation Conrad Challenge",
      footerLink: [
        {
          name: "Visit Pitch",
          url: "https://docs.google.com/presentation/d/1gAF_4f4iaP8DPaD2JbwbAyJl_pPwpN11xkgCS8BUDfg/edit?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/gitlet.png"),
      projectName: "Gitlet",
      projectDesc: "Gitlet is a version-control system that's similar to Git and utilizes Java. It supports most of Git's local functionalities, including add, commit, checkout, and log. It also supports branching actions like merge and rebase",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/adam5841/Gitlet"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements"),

  achievementsCards: [
    {
      title: "Cal Leadership Award",
      subtitle:
        "The Leadership Award is a one-year, merit-based scholarship that recognizes undergraduate students at U.C. Berkeley who demonstrate innovative, initiative-driven leadership that has a meaningful impact on their academic, work, or community environments.",
      image: require("./assets/images/leadership.png"),
      footerLink: [
        {
          name: "Website",
          url: "https://alumni.berkeley.edu/get-involved/scholarships/the-leadership-award/"
        },
      ]
    },
    {
      title: "Tomo Credit Case Competition",
      subtitle:
        "Won 2nd place out of 250 teams for the Tomo Credit Case Competition. Developed innovative solutions to help solve unique business challenges",
      image: require("./assets/images/tomo.jpeg"),
      footerLink: [
        {
          name: "Website",
          url: "https://tomocredit.com/"
        }
      ]
    },

    {
      title: "Presidential Award",
      subtitle: "The President’s Volunteer Service Award recognizes the valuable contributions volunteers make in our communities and encourages more people to serve. The award honors this American tradition and thanks those who inspire others to engage in volunteer service by demonstrated commitment and example.",
      image: require("./assets/images/pvsa.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Website",
          url: "https://www2.ed.gov/programs/presedaward/index.html"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to message me! I'm always excited to meet new people and explore interesting opportunities",
    number: "+1 (714) 724 - 1843",
    email_address: "anadam@berkeley.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  mainBody,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
