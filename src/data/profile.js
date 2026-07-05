// profile.js — everything about YOU lives here.
// Edit this one file and it flows through the whole site:
// name, title, bio, photo, contact info, resume, and social links.

export const profile = {
  // Basic identity
  name: "Veer Jain",
  role: "Software Developer",
  tagline: "Competitive Programmer & Aspiring Software Developer.",

  // Shown in the About section. Keep each paragraph short.
  bio: [
    "I'm an Aspiring Software Developer and Competitive Programmer, studying Computer Science at Manipal University Jaipur.",
    "Solved 500+ DSA & competitive programming problems combined across LeetCode, Codeforces, Coding Ninjas etc.",
    "Comfortable across the web stack — React, HTML, CSS & Tailwind on the front, currently leveling up with Node.js on the back.",
  ],

  // Location, shown in the status bar and About section
  location: "India",

  // Photo: drop your image at src/assets/profile-photo.jpg (or .png)
  // and this path will pick it up automatically. Until then, a
  // placeholder avatar is shown.
  photo: "https://ibb.co/QFFY5MTz",

  // Resume/CV — put the file in the `public` folder and point to it here
  resumeUrl: "/resume.pdf",

  // Contact
  email: "jainveer2007@gmail.com",
  phone: "+91 7976144676",

  // Social / external links — leave a value empty ("") to hide that icon
  socials: {
    github: "https://github.com/jainveer2007",
    linkedin: "https://www.linkedin.com/in/veer-jain-02133436b/",
    leetcode: "",
    codeforces: "",
  },

  // Availability badge shown near the hero / contact section
  availableForWork: true,
};

export default profile;
