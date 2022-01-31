

export default function List({courses, children}) { // children is the course card passed as a prop
    return (
      <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
        { courses.map(course => children(course))}
      </section>
    )
  }