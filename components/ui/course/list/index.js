export default function List({ courses, children }) {
  // children is the course card passed as a prop so that the <Card/> will wrap the course that goes inside it.
  return (
    <section
      className="grid gap-4 mb-5
      md:grid-cols-1 
      "
    >
      {courses.map(course => children(course))}
    </section>
  );
}
