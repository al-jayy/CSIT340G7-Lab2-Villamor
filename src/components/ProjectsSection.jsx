import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard year="2026" title="About Me in React" description="My first React project, rebuilt from a plain HTML page." tech="React · Tailwind CSS" link="https://github.com/al-jayy/CSIT340-Lab1-Villamor" />
        <ProjectCard year="2025" title="Pawcalypse Adventures" description="First game made in Java for a group project." tech="Java" link="https://github.com/al-jayy/Pawcalypse-Adventure" />
        {/* <ProjectCard year="2025" title="Clinic Records" description="A desktop app for our database class that keeps visit records for a small clinic." tech="Java · MySQL" link="https://github.com/juandelacruz/clinic-records" />
        <ProjectCard year="2024" title="Org Event Page" description="A one-page site for our org's freshman orientation, with the schedule and venue." tech="HTML · Bootstrap" link="https://github.com/juandelacruz/org-event-page" /> */}
      </div>
    </section>
  )
}

export default ProjectsSection