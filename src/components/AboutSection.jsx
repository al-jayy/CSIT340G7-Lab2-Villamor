import SectionHeading from './SectionHeading'
import Fact from './Fact'

function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I grew up in Consolacion all my life and currently studying in CIT-U. I picked IT because of influence
        and what I think is good for my future. So far my favorite part in coding is taking a break
        and playing video games.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Consolacion, Cebu" />
      </dl>
    </section>
  )
}

export default AboutSection