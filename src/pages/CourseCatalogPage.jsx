import React, { useState } from "react";
import { useStore } from "../store/useStore";
import CourseCard from "../components/common/CourseCard";

const CourseCatalogPage = () => {
  const { courses } = useStore();
  const [query, setQuery] = useState("");

  const filtered = courses.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.instructor.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-8">Course Catalog</h1>
      <input
        type="search"
        className="border rounded px-3 py-2 mb-6 w-full"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search by title or instructor"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map(course => <CourseCard key={course.id} course={course}/>)}
      </div>
    </div>
  );
};

export default CourseCatalogPage;
