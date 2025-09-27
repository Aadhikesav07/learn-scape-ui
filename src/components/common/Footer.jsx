export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} LearnScape. All rights reserved.</p>
        <p className="mt-2 text-sm text-gray-400">
          An NPTEL-inspired platform for lifelong learning.
        </p>
      </div>
    </footer>
  );
}
