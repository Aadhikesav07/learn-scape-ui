import create from "zustand";
import { mockCourses, mockUser, mockCertificates } from "../utils/mockData";

export const useStore = create((set) => ({
  user: mockUser,
  courses: mockCourses,
  certificates: mockCertificates,
  enrolledCourses: [],
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  enrollCourse: (courseId) =>
    set((state) => ({
      enrolledCourses: state.enrolledCourses.includes(courseId)
        ? state.enrolledCourses
        : [...state.enrolledCourses, courseId]
    }))
}));
