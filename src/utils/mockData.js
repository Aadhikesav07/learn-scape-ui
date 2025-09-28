export const mockCourses = [
  {
    id: 1,
    title: "Introduction to Programming",
    instructor: "Jane Doe",
    description: "Learn the basics of programming using Python.",
    thumbnail: "https://via.placeholder.com/300x150",
    modules: [
      {
        id: 1,
        title: "Module 1: Basics",
        lectures: [
          { id: 1, title: "Lecture 1: What is Programming?", videoUrl: "https://www.youtube.com/watch?v=3Kq1MIfTWCE" },
          { id: 2, title: "Lecture 2: Variables", videoUrl: "https://www.youtube.com/watch?v=kqtD5dpn9C8" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Data Structures",
    instructor: "John Smith",
    description: "Learn about arrays, linked lists, and trees.",
    thumbnail: "https://via.placeholder.com/300x150",
    modules: [
      {
        id: 1,
        title: "Module 1: Arrays",
        lectures: [
          { id: 1, title: "Lecture 1: Introduction to Arrays", videoUrl: "https://www.youtube.com/watch?v=WwfhLC16bis" }
        ]
      }
    ]
  }
]

export const mockQuizzes = [
  {
    id: 1,
    title: "Programming Basics Quiz",
    questions: [
      {
        id: "q1",
        text: "What is a variable?",
        options: ["A storage location", "A function", "A loop"]
      }
    ]
  }
]

export const mockCertificates = [
  {
    id: 1,
    courseId: 1,
    studentName: "Alice",
    courseName: "Introduction to Programming",
    score: 92,
    link: "https://learnscape.fake/cert/1"
  }
]
