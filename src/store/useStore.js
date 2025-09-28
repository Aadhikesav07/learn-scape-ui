import { create } from "zustand"
import { mockCourses, mockQuizzes, mockCertificates } from "../utils/mockData"

export const useStore = create((set) => ({
  user: null,
  courses: mockCourses,
  quizzes: mockQuizzes,
  certificates: mockCertificates,

  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}))
