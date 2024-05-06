// import React, {useContext} from "react";
// import "./Skills.scss";
// import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
// import {illustration, skillsSection} from "../../portfolio";
// import {Fade} from "react-reveal";
// import codingPerson from "../../assets/lottie/codingPerson";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
// import StyleContext from "../../contexts/StyleContext";

// export default function Skills() {
//   const {isDark} = useContext(StyleContext);
//   if (!skillsSection.display) {
//     return null;
//   }
//   return (
//     <div className={isDark ? "dark-mode main" : "main"} id="skills">
//       <div className="skills-main-div">
//         <Fade left duration={1000}>
//           <div className="skills-image-div">
//             {illustration.animated ? (
//               <DisplayLottie animationData={codingPerson} />
//             ) : (
//               <img
//                 alt="Man Working"
//                 src={require("../../assets/images/developerActivity.svg")}
//               ></img>
//             )}
//           </div>
//         </Fade>
//         <Fade right duration={1000}>
//           <div className="skills-text-div">
//             <h1
//               className={isDark ? "dark-mode skills-heading" : "skills-heading"}
//             >
//               {skillsSection.title}{" "}
//             </h1>
//             <p
//               className={
//                 isDark
//                   ? "dark-mode subTitle skills-text-subtitle"
//                   : "subTitle skills-text-subtitle"
//               }
//             >
//               {skillsSection.subTitle}
//             </p>
//             <SoftwareSkill />
//             <div>
//               {skillsSection.skills.map((skills, i) => {
//                 return (
//                   <p
//                     key={i}
//                     className={
//                       isDark
//                         ? "dark-mode subTitle skills-text"
//                         : "subTitle skills-text"
//                     }
//                   >
//                     {skills}
//                   </p>
//                 );
//               })}
//             </div>
//           </div>
//         </Fade>
//       </div>
//     </div>
//   );
// }
import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import profileImage from "../../assets/images/IMG_3415.jpg"
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }

  // Assuming you have a path to your circular profile image
  const profileImagePath = "../../assets/images/developerActivity.svg"; // Replace with actual path

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <img
              src={profileImage} // Use your profile image here
              alt="profile"
              className="profile-image" // Bootstrap class for circular images
            />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              About Me
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              I am currently a student at UC Berkeley, majoring in Computer Science. 
              I have a strong interest in social entrepreneurship, and I am a member of MDB, 
              a student-run organization that builds mobile apps for social good. As a software 
              engineer intern at Verkada, I work with a team of engineers to develop and maintain 
              the iOS app for their cloud-based security system. Feel free to message me at anadam@berkeley.edu. 
              I'm always excited to meet new people and explore interesting opportunities!
            </p>

            <SoftwareSkill />
          </div>
        </Fade>
      </div>
    </div>
  );
}
