export const mockUser = {
  id: 1,
  name: "Jane Doe",
  email: "jane@example.com",
  role: "student", // or 'instructor', 'admin'
  enrolledCourses: [1],
  profilePic: "/assets/logo.png"
};

export const mockCourses = [
  {
    id: 1,
    title: "Introduction to Data Science",
    instructor: "Dr. Smith",
    thumbnail: "/assets/logo.png",
    description: "Learn the basics of Data Science, including stats, Python, and ML.",
    syllabus: [
      { module: "Getting Started", lectures: ["Welcome", "Setup", "Intro video"] },
      { module: "Core Concepts", lectures: ["Statistics", "Python", "Regression"] }
    ],
    category: "Data Science",
    materials: [{ type: "pdf", title: "Syllabus PDF", url: "#" }]
  },
  {
    id: 2,
    title: "Advanced React",
    instructor: "Prof. Agarwal",
    thumbnail: "/assets/logo.png",
    description: "Deep dive into React hooks, context, testing, Redux.",
    syllabus: [
      { module: "Hooks", lectures: ["useState", "useEffect"] },
      { module: "Redux", lectures: ["State Management", "Middleware"] }
    ],
    category: "Web Development",
    materials: []
  }
];

export const mockCertificates = [
  {
    id: 1,
    userName: "Jane Doe",
    courseName: "Introduction to Data Science",
    date: "2025-09-27",
    score: 87,
    qrCode: "/assets/logo.png",
    verifyUrl: "https://learnscape/verify/1"
  }
];
